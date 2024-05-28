function formatDateToApi(date) {
  const formatter = new Intl.DateTimeFormat("en-CA");
  const correctDate = formatter.format(date);
  return correctDate;
}

export function getNowDateToAPI() {
  const date = new Date();
  return formatDateToApi(date);
}

export function getMonthAgoDateToAPI() {
  const date = new Date();
  const monthAgo = formatDateToApi(date.setMonth(date.getMonth() - 1));
  return monthAgo;
}

export function getWeekAgoDateToAPI() {
  const date = new Date();
  const weekAgo = formatDateToApi(date.setDate(date.getDate() - 7));
  return weekAgo;
}
