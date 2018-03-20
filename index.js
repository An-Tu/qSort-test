const qSortFix = require('./qsort-fix-pivot');
const qSortRand = require('./qsort-rand-pivot');
const qSortRand2 = require('./qsort-rand-pivot-2');

const randomInteger = (min, max) => Math.floor(min + Math.random() * (max + 1 - min));

const len = 1000000;

console.log('qSort with fixed pivot point');
for (i = 0; i <= 10; i++) {
  let array = [...Array(len)].map(() => randomInteger(0, 1000000));

  console.time('a');
  qSortFix(array, 0, array.length - 1);
  console.timeEnd('a');
}

console.log('qSort with random pivot point');
for (i = 0; i <= 10; i++) {
  let array = [...Array(len)].map(() => randomInteger(0, 1000000));

  console.time('a');
  qSortRand(array, 0, array.length - 1);
  console.timeEnd('a');
}

console.log('qSort with random pivot point (the random number is prepaid in advance)');
for (i = 0; i <= 10; i++) {
  let array = [...Array(len)].map(() => randomInteger(0, 1000000));

  console.time('a');
  qSortRand2(array, 0, array.length - 1);
  console.timeEnd('a');
}
