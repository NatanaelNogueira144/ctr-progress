const getNextElement = (arr, value) => {
  if (!arr || arr.length === 0) return undefined;
  
  const currentIndex = arr.indexOf(value);
  const nextIndex = (currentIndex + 1) % arr.length;
  
  return arr[nextIndex];
};

function getNestedValue(obj, path, defaultValue = undefined) {
  return path.split('.').reduce((acc, key) => {
    if (acc && Object.prototype.hasOwnProperty.call(acc, key)) {
      return acc[key];
    }
    return defaultValue;
  }, obj);
}

function setNestedValue(obj, path, newValue) {
  const keys = path.split('.');
  const lastKey = keys.pop();

  const target = keys.reduce((acc, key) => {
    if (!acc[key] || typeof acc[key] !== 'object') {
      acc[key] = {};
    }
    return acc[key];
  }, obj);

  target[lastKey] = newValue;
  return obj;
}