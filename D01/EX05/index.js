function moduloEx5() {
  //your code
  if (num1 > num2 && num1%num2 !== 0) {
    result = "Num1 is greater than Num2"
    result = "The modulo of ${num1} % ${num2} is ${num3}"
  }
  else if (num1 < num2) {
    result = "Num1 is less than Num2"
  } 
  if (num1 == num2) {
    result = "The numbers are equal"
  }
}

moduloEx5(35, 20)

// Do not remove or change this line, or the tests won't work
export { moduloEx5 };
