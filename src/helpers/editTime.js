export const editTime = (unixTimeFromBackend, timeStringFromInput) => {
  const [hours, minutes] = timeStringFromInput.split(':').map(Number);

  const date = new Date(unixTimeFromBackend);

  date.setHours(hours);
  date.setMinutes(minutes);

  return date.getTime();
};
