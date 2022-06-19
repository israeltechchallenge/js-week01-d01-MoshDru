function isBiggerThan(num) {
  //your code
if (num > 4) {
   console.log(`The number ${num} is bigger than 4`);
} 
if (num == 4) {
  console.log(`The number ${num} is equal to 4`);
}
if (num < 4) {
   console.log(`The number ${num} is less than 4`);
}
else {
  console.log(`${num} is less than 4`);
}

}

let num = 3;
isBiggerThan(3)
// Do not remove or change this line, or the tests won't work
export { isBiggerThan };
