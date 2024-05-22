function formatDateToApi(date) {
  const formatter = new Intl.DateTimeFormat("en-CA");
  const correctDate = formatter.format(date);
  return correctDate;
}

export function getNowDateToAPI() {
  const date = new Date();
  return formatDateToApi(date);
}

export function getWeekAgotDateToAPI() {
  const date = new Date();
  const weekAgo = formatDateToApi(date.setMonth(date.getMonth() - 1));
  return weekAgo;
}
