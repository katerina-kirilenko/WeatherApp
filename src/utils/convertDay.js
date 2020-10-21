import moment from 'moment';

export const convertDayName = (day) => {
  return moment(day).format('dddd');
};
