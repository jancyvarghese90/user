console.log('My first page');
// Variables
a=5; //without declarations
var a=5;
console.log(a);
let b=68;
{                 //Block 2
   var a=6;
   console.log(a);
   let b=90;
   console.log(b); 
}
console.log(b);
console.log(a);
var a=67;
console.log(a);
var firstName='Jancy';
console.log(typeof(firstName));
var g;
console.log(typeof(g));
var h='';
console.log(typeof(h)); 
// Arrays    
// in javascript arrays can contain non homogeneous types os data
var arr1=['Jancy','Arun','Anya',10];
console.log(arr1);
console.log(arr1[1]);
console.log(arr1.length);
arr1.push('Anish');
console.log(arr1);
arr1.pop();
console.log(arr1);
// Objects
// let person={
// fname:'Maya',
// age:80,
// location:'TVM'
// }
// console.log(person.age)
let car=new Object();
car.name='Hundai';
car.engine='petrol';
car.model='2024';
console.log(car);
// function definition
function display(fname){
   console.log('welcome ' +fname+ ' to functions');
}
display('Jancy');  //function call
// FUNCTION TO ADD 2 NUMBERS
function add_values(a,b){
   var sum=a+b;
   console.log(sum);
}
add_values(10,20);
// function for multiplication with return 

function multiply(x,y)
{
   var z=x*y;
   return z;
}
result=multiply(9,5);
console.log(result);
// increment operator
var ab=7;
var abc=ab++;   //post increment(one step it will increment onlt no assigning)
console.log(ab);
console.log(abc);
 var bc=10;
 var bcd=++bc;   //pre increment(one step itself incrementation and assigning happen)
 console.log(bc);
 console.log(bcd);
 var exp=(4*7)-8**2+9;
 console.log(exp);
//  conditional statements
if (exp>0){
   console.log('value is greater than zero');

}
 else if(exp==0)
{
   console.log('value is equal to  zero');

}
else{
console.log("value is less than zero");
}
var tm=56;
var tt='56';
if (tm>tt)
{
   console.log('value is greater');

}
else if(tm==tt)
{
   console.log('value is equal');

}
else{
   console.log('value is less');
}
// value comparison with 3 equal here it will check the datatype also
var tm=56;
var tt='56';
if (tm>tt)
{
   console.log('value is greater');

}
else if(tm===tt)
{
   console.log('value is equal');

}
else{
   console.log('value is less');
}

if (tm>tt || tm==tt)
{
   console.log('value is greater or equal');

}


else{
   console.log('value is less');
}
// ternary opertor
var result1=exp>0? 'value is greater than zero' : 'value is less than zero';
console.log(result1);
// 30/7/24 Looping statements
for (let i=1;i<11;i++) {
   console.log(i);
   

}
var array=[1,45,34,56,78]
for(i=0;i<array.length;i++){
   console.log(array[i])
}