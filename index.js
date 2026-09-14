let a= 20;
let b=10;
a=a+b;
b=a-b;
a=a-b;
console.log(a);
console.log(b);

function hello()
{
    console.log("Hello World");
}
console.log(hello());


console.log("start");
setTimeout(() => {
    console.log("Hello World");
},0);

Promise.resolve().then(() => console.log());
console.log("end");





