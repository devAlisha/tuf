import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export const calculateTimeLeft = (targetTime) => {
  const now = dayjs();
  const durationLeft = dayjs.duration(dayjs(targetTime).diff(now));
  if (durationLeft.asMilliseconds() <= 0) {
    return {
      days: '00',
      hours: '00',
      minutes: '00',
      seconds: '00',
    };
  }

  return {
    days: String(durationLeft.days()).padStart(2, '0'),
    hours: String(durationLeft.hours()).padStart(2, '0'),
    minutes: String(durationLeft.minutes()).padStart(2, '0'),
    seconds: String(durationLeft.seconds()).padStart(2, '0'),
  };
};

export const getTomorrowAt12pm = () => {
  return dayjs().add(1, 'day').set('hour', 12).startOf('hour').format('YYYY-MM-DDTHH:mm');
};
