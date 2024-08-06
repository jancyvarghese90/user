let array=[5,20,30,40];
let isprime=true;

if(array[0]==1)
{
    console.log('1 is neither prime nor composite number');
}
else if(array[0]>1){
for (let i = 2; i<=array[0]-1; i++) {
    if(array[0]%i==0){
isprime=false;
break;
    }}
 if(isprime){
    console.log(array[0],'is a primenumber');
 }
 else{
    console.log(array[0],'is a not a primenumber');
 }
}

let arr = [
    1, 1, 3, 5, 7, 6, 8, 5, 8, 4,
    7, 6, 6, 2, 1, 6, 8, 9, 6,
];

arr.sort((a, b) => a - b);
//console.log(arr)
let count = 1,
    max = 0,
    el;

for (let i = 1; i < arr.length; ++i) {
    if (arr[i] === arr[i - 1]) {
        count++;
    } else {
        count = 1;
    }
    if (count > max) {
        max = count;
        el = arr[i];
    }
}
console.log("The most occured element is: " + el,"and it is occured " + max, "times");

for(i=0;i<=15;i++)
{
    
    if(i%2==0)
        console.log(i,"is an even number");

    else
    console.log(i,"is an odd number")
}

let arr2=[3,6,7]
let sum=0,square=0;
for(i=0;i<arr2.length;i++)
{
let square=arr2[i]*arr2[i] 
sum=square+sum;

}
console.log("Sum of numbers in an array with " +arr2.length, " values is:" +sum);