const storage = localStorage;

export function setItem(key, value) {
  const jsonObject = JSON.stringify(value);
  storage.setItem(key, jsonObject);
}

export function getItem(key) {
  const jsonObject = storage.getItem(key);
  if (jsonObject) {
    return JSON.parse(jsonObject);
  }
  return null;
}
