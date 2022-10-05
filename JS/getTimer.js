function getTime(currDate, timerInfo) {
  const date = new Date(currDate);
  const timeTillDate = date - Date.now();
  const seconds = Math.floor(timeTillDate / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  timerInfo.minutes = minutes % 60;
  timerInfo.seconds = seconds % 60;
  timerInfo.hours = hours % 24;
}
