const jim = 84;
const dela = 98;
const chinku = 99;

if( jim > dela && jim > chinku){
    console.log("Jim will get the cake");
}
else if (dela > jim && dela > chinku){
    console.log("Dela Will get the cake");
}
else{
    console.log("Chinku Will get teh cake");
}


function findMaxNumber(num1, num2, num3) {
    // Using the Math.max function to find the maximum of the three numbers
    return Math.max(num1, num2, num3);
  }
  
  // Example usage:
  let result = findMaxNumber(10, 5, 8);
  console.log(result); // Output: 10


  //ok