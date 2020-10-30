const CACHE_NAME = 'cache-v1';
const CACHING_DURATION = 3600;
const DEBUG = false;

self.addEventListener('fetch', (event) => {
  const { request } = event;

  event.respondWith(
    caches.open(CACHE_NAME).then((cache) =>
      cache.match(request).then((response) => {
        if (response) {
          if (DEBUG) console.log(`SW: обслуживание ${request.url} из кеша.`);
          const expirationDate = Date.parse(response.headers.get('sw-cache-expires'));
          const now = new Date();

          if (expirationDate > now) {
            return response;
          }
          cache.delete(request);
        }

        if (DEBUG) console.log(`SW: нет совпадений в кеше для ${request.url}, использует сеть.`);

        return fetch(request.url).then((liveResponse) => {
          const expires = new Date();
          expires.setSeconds(expires.getSeconds() + CACHING_DURATION);

          const cachedResponseFields = {
            status: liveResponse.status,
            statusText: liveResponse.statusText,
            headers: { 'SW-Cache-Expires': expires.toUTCString() },
          };
          liveResponse.headers.forEach((v, k) => {
            cachedResponseFields.headers[k] = v;
          });

          const returnedResponse = liveResponse.clone();
          return liveResponse.blob().then((body) => {
            if (DEBUG) console.log(`SW: кеширование ${request.url} до ${expires.toUTCString()}.`);

            cache.put(request, new Response(body, cachedResponseFields));
            return returnedResponse;
          });
        });
      }),
    ),
  );
});
