const resutl = Math.pow(3 , 8);
// console.log(resutl);

const num1 = 25;
const num2 = 45;

const gap = Math.abs(num1 - num2);
if(gap < 5 ){
    // console.log("Your gus can be friends");
}
else{
    // console.log("You gus can apart");
}


//-------------------
// 
//------------
// Math.round
const number = 2.51598;
const fullNumber = Math.round(number);
// console.log(fullNumber);

//---- ceiling
const result2 = Math.ceil(2.0001);
// console.log(result2);

//----- floor
const result3 = Math.floor(459.5455);
// console.log(result3);

//Random
console.log(Math.random());


for( let i = 0; i <= 20; i++){
    const random = Math.round(Math.random() * 6);
    // console.log(random);
}




const myNumber = [20, 25, 12, 21, 32, 45, 11, 25, 27];
console.log(Math.max(...myNumber));


