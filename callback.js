let num= [2,6,4,8,6].every(e=>e%2===0);
console.log(num);

// fill()

const nums= [1,2,3,4,5,6,7,8];
// nums.fill(8); => [8, 8, 8, 8, 8, 8, 8, 8]
// nums.fill(8, 2); => [1, 2, 8, 8, 8, 8, 8, 8]
// nums.fill(8, 2, 5); => [  1, 2, 8, 8, 8, 6, 7, 8]
console.log(nums);



// filter()
const arr= [34, 54, 57 , 23, 11, 98];
const newArr= arr.filter(num => num>20);
console.log(newArr);