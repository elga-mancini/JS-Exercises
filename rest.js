/*function sum(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}*/
function sum(...params) {
    let sum = 0;

    for (let param of params) sum += param;
  
    return sum;
}

let params = [1,2,3,4,5];
console.log(sum(1, 2, 3, 4, 5));