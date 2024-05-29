export function createId() {
  const date = Date.now();
  const id = `id${Math.floor(Math.random() * 100000)}_${date}`;
  return id;
}
