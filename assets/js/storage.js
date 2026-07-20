const STORAGE_KEY = '@ctr-progress:selected';
const DATA_KEY = '@ctr-progress:data';

function readStorage(key, fallback = {}) {
  try {
    return JSON.parse(localStorage.getItem(key)) ?? fallback;
  } catch {
    return fallback;
  }
}

function writeStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}