import moment from 'moment';

export const convertDayName = (day) => {
  return moment(day * 1000).format('dddd');
};
