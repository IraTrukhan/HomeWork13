// Write a function that adds from two invocations: 
// add(3)(4) // 7

function add(firstNumber){
    return function sum(secondNumber){
        return +firstNumber + +secondNumber;
    }
}
let fnum = prompt('Enter first number');
let snum = prompt('Enter first number');
console.log(add(fnum)(snum));