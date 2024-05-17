export const convertTimeToUnix = (timeString) => {
  const [hours, minutes] = timeString.split(':').map(Number);

  const date = new Date();
  date.setHours(hours);
  date.setMinutes(minutes);

  return date.getTime();
};