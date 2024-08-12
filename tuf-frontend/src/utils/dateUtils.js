import dayjs from 'dayjs';

export const getTomorrowNoon = () => {
  return dayjs().add(1, 'day').set('hour', 12).startOf('hour').valueOf();
};

export const formatDate = (timestamp) => {
  return dayjs(timestamp).format('MMMM D, YYYY h:mm:ss A [GMT]Z');
};
