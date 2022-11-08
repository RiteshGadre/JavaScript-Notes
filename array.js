// Creating Array
var countries= ["India", "USA", "Japan"];
var states= new Array("Maharashtra", "Orisa", "Delhi");

console.log(countries.length);
console.log(states.length);


// Accessing Array
console.log(states[0]);


// pushing and removing last element in array;
states.push("Bihar");
console.log(states);
states.pop();
console.log(states);

// Pushing and removing elements from front
states.unshift("Bihar");
console.log(states);
states.shift();
console.log(states);

// Finding the position of element in array
// In case element is not present inside an array it will return -1
console.log(states.lastIndexOf("Delhi"));


// Converting string into array
console.log(Array.from("Ritesh"));

// Fill() method
const ans= [1,2,3,4,5,6,7,8];
// ans.fill(5);
// ans.fill(5, 2);
// ans.fill(5, 2, 5);
// console.log(ans);

//filter() method
const newArr= ans.filter(e => e%2===0);
console.log(newArr); 

// Slice Method
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(-2))
console.log(animals);

// Splice Method
animals.splice(1, 2, 'girraffe', 'dog');
console.log(animals);