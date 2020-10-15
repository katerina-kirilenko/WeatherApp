import { DEMO_ACTION } from '@/actions';

export default (state = 0, { type, payload }) => {
  switch (type) {
    case DEMO_ACTION:
      return state;
    default:
      return state;
  }
};
