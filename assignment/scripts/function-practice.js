console.log('***** Function Practice *****')
console.log(`Hey Dev!\n Hope you're having a great day!`);


// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName( name ) {
  return`Hello ${name}`;
}
// Remember to call the function to test
console.log(helloName('Frank'))

// 3. Function to add two numbers together & return the result
function addNumbers( num1,num2 ) {
  // return firstNumber + secondNumber;
return num1+num2;
}console.log(addNumbers(15,10));

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1,num2,num3 ){
return num1*num2*num3;
}console.log(multiplyThree(2,2,2));


// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive( number ) {
  if ( number > 0 ){
    return true
  }else{
    return false
 }
}console.log(isPositive(-88));
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( 'isPositive - should say true', isPositive(3) );
console.log( 'isPositive - should say false', isPositive(0) );
console.log( 'isPositive - should say false', isPositive(-3) );


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.

let tester = ['Jackie','Brown','Tarantino']
function getLast( array ) {
return array[ array.length-1 ];
}
console.log(getLast(tester))

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
let jim = ['Me','Myself','Irene']
function find( value, array ){
  for(i=0; i<array.length;i++){
    if (array.some(j => j === value)){
      return true;
    }else{
      return false;
    }
  }
}console.log(find('Irene',jim));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  if (letter === string[0]){
  return true;
  }else{
    return false;
   }
  }
console.log( 'isFirstLetter - should say true', isFirstLetter('a', 'apple') );
console.log( 'isFirstLetter - should say false', isFirstLetter('z', 'apple') );

// 9. Function to return the sum of all numbers in an array
// TODO: loop to add items
let tArray = [2,4,6,8];
function sumAll(array) {
  let sum = 0
  for (let i in array) {
  sum += array[i];
 }
  return (sum);
}
console.log(sumAll(tArray));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
let t1 = [-1,-2,-3,-4,-5,-6,-7,-8,-9,0,1,2,3,4,5,6,7,8,9];
let t2 =[]
function posOnly(array1,array2){
  for(i=0; i<array1.length; i++){
    if (array1[i] > 0){
      array2.push(array1[i]);
     }
    } 
    return array2;
  }
  console.log(posOnly(t1,t2));
console.log(`I wasn't exactly sure if you meant an array created by the input of a user (like a prompt) or just an array that is the input for the function so I did both and put the first above and the second in comments below`)
// let t1 = [];
// let t2 = [];
// function onlyPos(array1,array2){
//      for (j=0; j < 5; j++ ) {
//      array1.push(prompt("Enter a number."));
// }
//          for(i=0; i < array1.length; i++){
//           if (array1[i] > 0 ){
//             array2.push(array1[i]);
//     }
// } 
// return array2;
// }

// console.log(onlyPos(t1,t2));






// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


  function adc(value) {
	let voltage = 5;
	let output = (voltage / 1023) * value;
	return +output.toFixed(2);
}

console.log(adc(0));
console.log(adc(1023));
console.log(adc(400));
console.log(adc(500));

//Here we use a mathimatical formula to create a virtual DAC
// otherwise known as a digital to analog converter commonly 
//found on music playback devices like mp3 players iphones and laptops etc.
//first we name the function and give it a parameter so that we can convert whatever value we put into the function
//into volts. first we create a variable voltage and set it to 5 so that we can use it in the next part of the argument.
//next we create a variable named output and we set its value to be voltage divided by 1023 which is our value range 
//and then multiplied by the actual value input.We fix the ouput to 2 places after the decimal with .tofixed(2)
//below that we try some values and check to see if they are correct and they are!
// this code couldve have been written easier by eliminating the concrete parts that never change. 
//example: how about instead of having 4 lines of code we just write 



 function adc(value) {
	return +(value / (1023 / 5  )).toFixed(2)
 }
 console.log(adc(0));
 console.log(adc(1023));
 console.log(adc(400));
 console.log(adc(500));


// It is alot easier to explain the long way but I prefer the shoter code as it yields
// the same results without the redundancy!

