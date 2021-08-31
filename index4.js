// Java Script Algorithms Crash Course

//-----Use this loop when you are given an array but do not want it to be a function----

// var array = [1,2,3,4,10,50];

// let sum = 0;
//  for (let i = 0; i < array.length; i++) { sum += array[i]; } 

//  console.log(sum)

//----Use this function when you are given an array------

 function sumNumbers(a){
    var total=0;
    for(var i in a) { 
        total += a[i];
    }
    return total;
}
var array = [1,2,3,4,10,50];
var weeklyPay= sumNumbers(array);

console.log(weeklyPay);

//----Use this function when you are not given an array-------

// function sumNumbers (numbers) {
//     let result = 0;
//     for (const number of numbers){
//         result += number 
//         return result;
//     }
// }
// console.log (sumNumbers([1,2,3,5,10]));