let counter= document.querySelector("p");
let welcome= document.querySelector(".welcome");
counter.innerHTML= 1023;

let count= 0;

setInterval( ()=> {
    if(count<1000){
        count++;
        counter.innerHTML= count;
    }
}
, 0.5);

setTimeout(()=>{
    welcome.innerHTML= "welcome to my house";

}, 5000);