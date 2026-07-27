console.log("Hello World");
var c=10 //reassinged , redeclared , function scoped but not block scoped, if we access it earlier then it says undefined
let p=10  //reassign,not redeclared , block scoped, if we access it earlier then it says error
const d=19 //cannot be reassinged, not redeclared, block scoped, if we access it earlier then it says error

const sum = (a,b) => a+b;
console.log(sum(5,6)); 

// const a=()=>({a:1,b:2})  //no this keyword , arguments , super key
// const sum = {...Number,a,b};  //rest parameters should always be used in last

a=[1,2,3,4,5,6];
const b = new Array(2,3,5,6,7);
console.log(b.at(-1));

for(item in a){
  console.log(item);
}

const z = a.map(item=> item*item)
console.log(z);
//filter method 

const student= {
  name:"Manan",
  age:18,
  address:"Samana"
}
console.log(student["name"]);
console.log(student["age"]);