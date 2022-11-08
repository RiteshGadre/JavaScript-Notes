let isEven= (element) => {
    return element%2==0;
};

console.log(isEven(4));

// Let's move to complex one
// every() is used to check if all the elements satify the condition or not
// If all elements will satisfy the condition it will return true
// If anyone element failed the condition it will return false
let isPositive= (element)=>{
    return element>=0;
}

let arr= [1,2,-2,4,4].every(isPositive);
console.log(arr);