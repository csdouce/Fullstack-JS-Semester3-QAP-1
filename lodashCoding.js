// require statement
const _ = require('lodash');

// Determining the version of Lodash library
const ver = _.VERSION;
console.log(`Lodash Library Version: ${ver}`);

// Blank line in console
console.log('');

// sample array
let words = ['sky', 'wood', 'forest', 'falcon', 'pear', 'ocean', 'universe'];

// First and Last array element
let fel = _.first(words);
let lel = _.last(words);

// Consoling the first and last words in array
console.log(`First array Element: ${fel}`);
console.log(`Last array Element: ${lel}`);

// Blank line in console
console.log('');

// Getting the nth element of an array

// sample array
let nums = [1, 2, 3, 4, 5, 6, 7, 8];

// add argument to say what index to return
console.log('Returning the Index 3 element from nums Array');
console.log(_.nth(nums, 3));
// Negative number as an argument returns from end of array
console.log('Returning the Index -3 element from nums Array');
console.log(_.nth(nums, -3));

// Blank line in console
console.log('');

// Using Lodash chunking array

// breaks array into chunks of 2 (or whatever argument is put in instead of 2)
let c1 = _.chunk(nums, 2);
console.log('Breaks nums array into groups of 2');
console.log(c1);

// breaks array into chunks of 3 (or whatever argument is put in instead of 3)
let c2 = _.chunk(nums, 3);
console.log('Breaks nums array into groups of 3');
console.log(c2);

// Blank line to console
console.log('');

// Lodash Sum function

// sample array
let vals = [-2, 0, 3, 7, -5, 1, 2];

// Storing results of Lodash sum function in sum variable
let sum = _.sum(vals);
console.log(`Sum of vals array is: ${sum}`);

// Blank line to console
console.log('');

// Lodash Collection filter

// sample array
let nums2 = [4, -5, 3, 2, -1, 7, -6, 8, 9];

// Filters all values that are greater than 0 in nums2 array
console.log('Filters out all values that are greater than 0 in nums2 array and prints to screen')
let pos_num = _.filter(nums2, (e) => e > 0);
console.log(pos_num);