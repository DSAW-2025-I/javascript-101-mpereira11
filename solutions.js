// Sum of Two Numbers
function sum(a, b) {
  // Add your code here
  if (typeof a !== "number" || typeof b !== "number"){
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  else { 
    return a + b;
  }
}

// Factorial of a Number
function factorial(n) {
  // Add your code here
  if (!Number.isInteger(n) || n < 0) {
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  if (n === 0 || n === 1){
    return 1;
  }
  else{
    let factorial = 1;
    let i = 2;
    
    while (i <= n) {
        factorial *= i;
        i++;
    }
    return factorial;
  }
}

// Find the Largest Number
function findLargest(arr) {
  // Add your code here
  if (!Array.isArray(arr) || !arr.every(Number.isFinite)){
    console.log("Los datos de entrada no son adecuados");
    return;

  }
  else{
    let numGrande = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > numGrande) {
            numGrande = arr[i];
        }
    }
    return numGrande;
  }
}

// Count Vowels in a String
function countVowels(str) {
  // Add your code here
  if(typeof str !== "string" || str.length < 1){
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  else{
    const vocales = "AaEeIiOoUu";
    let contadorV = 0;

    for (let i = 0; i < str.length; i++) {
      if (vocales.includes(arr[i])) {
        contadorV++;
      }
    }
    return contadorV;
  }
}

// Check if a Number is Prime
function isPrime(n) {
  // Add your code here
  if (!Number.isInteger(n)){
    console.log("Los datos de entrada no son adecuados");
    return;
  }
  else {
    for (let i = 2; i < n; i++) {
      if (n % i === 0) {
        return false; 
      }
  }
  return true; 
 }
}

module.exports = {
  sum,
  factorial,
  findLargest,
  countVowels,
  isPrime,
};
