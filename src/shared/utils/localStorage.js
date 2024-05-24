function getLocalItem(key) {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

function setLocalItem(key, value) {
  const item = JSON.stringify(value);
  localStorage.setItem(key, item);
}

export { getLocalItem, setLocalItem };
