const getNextElement = (arr, value) => {
  if (!arr || arr.length === 0) return undefined;
  
  const currentIndex = arr.indexOf(value);
  const nextIndex = (currentIndex + 1) % arr.length;
  
  return arr[nextIndex];
};