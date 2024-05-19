export function formatTimestampToTime(timestamp) {
  const date = new Date(parseInt(timestamp));

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12;
  const minutesStr = minutes < 10 ? '0' + minutes : minutes;

  const formattedTime = hours + ':' + minutesStr + ' ' + ampm;
  return formattedTime;
}
