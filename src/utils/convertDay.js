import moment from 'moment';

const convertDayName = (day) => {
  return moment(day).format('dddd');
};

export default convertDayName;
