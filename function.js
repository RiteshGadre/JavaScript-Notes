// with no parameter
function solve(){
    console.log("Hello World");
}
solve();


// with 1 parameter
function solve1(num){
    console.log(num*num);
}
solve1(3);

// with 2 parameter
function solve2(num1, num2){
    console.log(num1*num2);
}
solve2(3, 5);

// with return value
function isEven(n){
    return n%2===0;
}
let ele= isEven(3);
console.log(ele);