function compareNumbers(num1, num2) {
  //your code
  if (num1 == num2) {
    console.log(`The number ${num1} is equal to ${num2}`);
  }
  else if (num1 > num2) {
    console.log(`The number ${num1} is bigger than ${num2}`);
  }
  else (num1 < num2) {
    console.log(`The number ${num1} is less than ${num2}`); 
}

}

compareNumbers(10, 20)


// Do not remove or change this line, or the tests won't work
export { compareNumbers };
