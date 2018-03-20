const randomNum = [...Array(1000000)].map(() => Math.random());
let offset = 0;

const qSort = (array, lo, hi) => {
  if (lo < hi) {
    const p = partisan(array, lo, hi);
    qSort(array, lo, p - 1);
    qSort(array, p, hi);
  }
};

const partisan = (array, lo, hi) => {
  if (offset > randomNum.length - 1) {
    offset = 0;
  }
  const pivot = array[Math.floor(randomNum[offset] * (hi - lo)) + lo];
  offset++;

  let i = lo;
  let j = hi;

  while (i <= j) {
    while (array[i] < pivot) {
      i++;
    }
    while (array[j] > pivot) {
      j--;
    }
    if (i <= j) {
      const tmp = array[i];
      array[i] = array[j];
      array[j] = tmp;
      i++;
      j--;
    }
  }
  if (hi + 1 === i) {
    return i - 1;
  }
  return i;
};

module.exports = qSort;

