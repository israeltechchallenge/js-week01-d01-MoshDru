function moduloEx6(number, comparer) {
  //your code
  if (number > comparer && number%comparer !== 0) {
    result = "Num1 is greater than Num2"
    result = "The modulo of ${num1} % ${num2} is ${num3}"
  }
  else if (number < comparer) {
    result = "Num1 is less than Num2"
  } 
  if (number == comparer) {
    result = "The numbers are equal"
  }
  document.getElementById("output").innerHTML = result;
}

moduloEx6(35, 20)

console.log(result)


