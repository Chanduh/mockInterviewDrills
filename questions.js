///// ROUND 1 Questions /// SIMPLE STACKED STUFF

const A1 = `
* Declare a variable myNumbers and assign it to an array containing the numbers 8, 3, and 14.
<br><br>

* Create a function 'cubeNum' that takes in a number as an argument and returns the number cubed.
For example, if we pass the number 6 to 'cubeNum' it will return 27 because 6 * 6 * 6 = 216
<br><br>
* Create a function 'sumOfCubes' that takes in an array of numbers as and argument and uses your 'cubeNum' function.

'sumOfCubes' should return the sum of the array's elements cubed.
For example, if we pass the array [1,5,9] to the function 'sumOfCubes' it should return 855 because 1^3 + 5^3 + 9^3 = 855
<br><br>

`

const B1 = `* Declare a variable 'programmingLanguages' and assign it to the value of an array that contains the strings 'C++', 'Java', 'Python', Javascript', and 'Swift'.
<br><br>
* Create a function 'containsJ' that takes a string as an argument and returns a boolean value based off of whether or not the string being passed to it contains the letter 'j' or 'J.
<br><br>

* Create a function 'screen' that takes  an array and a callback as parameters. When 'screen' is called it will apply the callback function on every element in the array. It will return an array with only the arguments with truthy results.
<br><br>

* Check that your 'screen' function is working correctly by passing it your 'programmingLanguages' array and your 'containsJ' function`


const C1 = `* Create an array with the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy"
<br><br>
* Create a function "countChars" that takes argument (a string), and returns the number of characters in the string. You should not count whitespace as characters or use the native .length method.
<br><br>
* Create a function "doToEachElement" that takes two arguments (an array and a callback function) and returns a new array containing the returned values from running the callback function on each element in the array.
<br><br>
* Check that your "doToEachElement" function is working properly by calling it with the array containing the strings "hello world", "I love programming", and "Twin Snakes are my favorite candy" and your "countChars" function.`


const D1 =`* Create a function "divBy100" that checks to see if the number passed to it is divisible by 100. It  accepts one argument, a number,  and returns a boolean value. 
<br><br>
* Create a function "negativeOrEven" that checks to see if the number passed to it is a negative or even number. It  accepts one argument, a number,  and returns a boolean value. 
<br><br>

* Create a function "passAllTests" that accepts an array of functions that all return boolean values and another value as arguments. passAllTests will return a true boolean value if all functions returned truthy.
<br><br>
* Create an array and populate it with divBy100, negativeOrEven
<br><br>
* Make sure it’s working by calling your passAllTests function passing in your array and different values. 
`

const E1 = `* Declare a variable 'number' and set it to the value 10.
<br><br>

* Create a function 'addNumbers' that takes a number as an argument. 'addNumbers' should add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
<br><br>
* Check that your 'addNumbers' function is working correctly by passing your variable 'number' to the 'addNumbers' function
<br><br>
* Create a countdown that starts at your variable number and prints each iteration to the console. Instead of logging the number 2, have it log the string “Twin snakes!” 
<br><br>
* Create an object ’addedNumbers’
<br><br>
* Create a function that adds the value passed to ‘addNumbers’ as the Key, and the result of invoking the function as the assigned value. Test it a few times and then log the object to the console.

`

const question1 = () => {
    let rando = Math.floor(Math.random() * 5);
    if (rando === 1) return A1;
    if (rando === 2) return B1;
    if (rando === 3) return C1;
    if (rando === 4) return D1;
    if (rando === 0) return E1;
  

    
}

// ///// ROUND 2 QUESTIONS /// CALLBACKS, BASICS
const A2 = `* There are two types of potions:<br>
Growing potion: "A"<br>
Shrinking potion: "B"<br>
If "A" immediately follows a digit, add 1 to the digit <br>
If "B" immediately follows a digit, subtract 1 from the digit<br><br>

* Create a function "usePotions" that returns a string according to these rules, removing the potions once they've been consumed.<br><br>

// Example:<br>
// usePotions("3A78B51") ➞ "47751"<br>
//   3 grows to 4, 8 shrinks to 7<br>
// usePotions("9999B") ➞ "9998"<br>
// usePotions("9A123") ➞ "10123"<br>
// usePotions("567") ➞ "567"
`
const B2 = `* Create a function 'minAndMax' that takes an array of numbers and returns both the smallest and largest number in an array, in that order.<br><br>
NOTE: do not use the native Math.min or Math.max methods. 
`
const C2 = `* Create an object named "example" with a key "sentence" that has a value of the string "TODAY IS AN AWESOME DAY FOR CODING!"
`;
const D2 = `* Write a function "memoryMaker" that accepts no parameters, and returns a function. Have the returned function accept a value, and every time the returned function is called, return an array of all the previously passed values.`
const E2 = `* Define a function "isPalindrome" that takes a string, and returns a boolean value indicating whether the string is a palindrome<br><br>
(a palindrome is any string that has the same value when reversed - for example, "LEVEL" or "RACECAR")
`
const F2 = `* Write a function "getLength" that returns the length of a string. Accomplish this without using any loops, native JS methods, or the length property.
`


const question2 = () => {
    rando = Math.floor(Math.random() * 5);
    if (rando === 1) return A2;
    if (rando === 2) return B2;
    if (rando === 3) return C2;
    if (rando === 4) return D2;
    if (rando === 5) return E2;
    if (rando === 0) return F2;

}

// //// ROUND 3 QUESTIONS /// CLOSURE

const A3 = `Create a function createFunctionPrinter that accepts one input and returns a function. When that created function is called, it should print out the input that was used when the function was created.`
const B3 = `Write a function once that accepts a callback as input and returns a function. When the returned function is called the first time, it should call the callback and return that output. If it is called any additional times, instead of calling the callback again it will simply return the output value from the first time it was called.`;
const C3 = `Write a function after that takes the number of times the callback needs to be called before being executed as the first parameter and the callback as the second parameter.`;
const D3 = `Write a function delay that accepts a callback as the first parameter and the wait in milliseconds before allowing the callback to be invoked as the second parameter. Any additional arguments after wait are provided to func when it is invoked. HINT: research setTimeout();`;
const E3 = `
const roll = ['david', 'jasmine', 'beverly', 'atreyu', 'samir', 'kaye']<br><br>
Write a function rollCall that accepts an array of names and returns a function. The first time the returned function is invoked, it should log the first name to the console. The second time it is invoked, it should log the second name to the console, and so on, until all names have been called. Once all names have been called, it should log 'Everyone accounted for'.`;
const F3 = `Create a function saveOutput that accepts a function (that will accept one argument), and a string (that will act as a password). saveOutput will then return a function that behaves exactly like the passed-in function, except for when the password string is passed in as an argument. When this happens, the returned function will return an object with all previously passed-in arguments as keys, and the corresponding outputs as values.`;
const G3 = `Create a function cycleIterator that accepts an array, and returns a function. The returned function will accept zero arguments. When first invoked, the returned function will return the first element of the array. When invoked a second time, the returned function will return the second element of the array, and so forth. After returning the last element of the array, the next invocation will return the first element of the array again, and continue on with the second after that, and so forth.`;
const H3 = `Create a function dateStamp that accepts a function and returns a function. The returned function will accept however many arguments the passed-in function accepts, and return an object with a date key that contains a timestamp with the time of invocation, and an output key that contains the result from invoking the passed-in function. HINT: You may need to research how to access information on Date objects.`;
const I3 = `Create a function censor that accepts no arguments. censor will return a function that will accept either two strings, or one string. When two strings are given, the returned function will hold onto the two strings as a pair, for future use. When one string is given, the returned function will return the same string, except all instances of first strings (of saved pairs) will be replaced with their corresponding second strings (of those saved pairs).`
const J3 = `There's no such thing as private properties on a JavaScript object! But, maybe there are? Implement a function createSecretHolder(secret) which accepts any value as secret and returns an object with ONLY two methods. getSecret() which returns the secret setSecret() which sets the secret`
const K3 = `Write a function, callTimes, that returns a new function. The new function should return the number of times it’s been called.`
const L3 = `Create a function roulette that accepts a number (let us call it n), and returns a function. The returned function will take no arguments, and will return the string 'spin' the first n - 1 number of times it is invoked. On the very next invocation (the nth invocation), the returned function will return the string 'win'. On every invocation after that, the returned function returns the string 'pick a number to play again'.`
const M3 = `Create a function average that accepts no arguments, and returns a function (that will accept either a number as its lone argument, or no arguments at all). <BR><BR>
When the returned function is invoked with a number, the output should be average of all the numbers that have ever been passed into that function (including duplicates). <BR><BR>
When the returned function is invoked with no arguments, the current average is outputted. <BR>
If the returned function is invoked with no arguments before any numbers are passed in, then it should return 0.`

const N3 = `Create a function makeFuncTester that accepts an array (of two-element sub-arrays), and returns a function (that will accept a callback). The returned function should return true if the first elements (of each sub-array) being passed into the callback all yield the corresponding second elements (of the same sub-array). Otherwise, the returned function should return false.`
const O3 = `Create a function makeHistory that accepts a number (which will serve as a limit), and returns a function (that will accept a string). The returned function will save a history of the most recent "limit" number of strings passed into the returned function (one per invocation only). Every time a string is passed into the function, the function should return that same string with the word 'done' after it (separated by a space). However, if the string 'undo' is passed into the function, then the function should delete the last action saved in the history, and return that deleted string with the word 'undone' after (separated by a space). If 'undo' is passed into the function and the function's history is empty, then the function should return the string 'nothing to undo'.`


const question3= () => {
    rando = Math.floor(Math.random() * 15);
    if (rando === 1) return A3
    if (rando === 2) return B3
    if (rando === 3) return C3
    if (rando === 4) return D3
    if (rando === 5) return E3
    if (rando === 6) return F3
    if (rando === 7) return G3
    if (rando === 8) return H3
    if (rando === 9) return I3
    if (rando === 10) return J3
    if (rando === 11) return K3
    if (rando === 12) return L3
    if (rando === 13) return M3
    if (rando === 14) return N3
    if (rando === 0) return O3
}

// //// ROUND 4 QUESTIONS //// RECURSION

const A4 = `Write a recursive function countdown that accepts a positive integer n as an input and logs every number from n (inclusive) to 0 (exclusive) to the console.`;
const B4 = `Write a recursive function sum that calculates the sum of an array of integers.`;
const C4 = `Write a recursive function palindrome that accepts a string and returns true if that string is a palindrome (the string is the same forward and backwards). 
`;
const D4 = `Write a recursive function isPrime that determines if a number is prime and returns true if it is.`;
const E4 = `Write a recursive function flattenRecursively that flattens a nested array. Your function should be able to handle varying levels of nesting.`;
const F4 = `Write a recursive function findInOrderedSet that determines if a number is in an ordered array. Assume the array is sorted. BONUS: Write the function in such a way that fully iterating through the array to check isn't necessary.`;
const G4 = `There are n stairs. A person standing at the bottom wants to reach the top. The person can climb either 1 or 2 stairs at a time. Write a function countWaysToReachNthStair to count the number of ways the person can reach the top (order does matter). See test cases for examples.`;
const H4 = `Write a function getRangeBetween that returns an array of all integers between values x and y, not including x and y.`
const I4 = `Given a collection of distinct integers, write a function getPermutations to return all possible permutations.<br><br>
Input:[1, 2, 3]<br>
Output:[<br>
  [1,2,3],<br>
  [1,3,2],<br>
  [2,1,3],<br>
  [2,3,1],<br>
  [3,1,2],<br>
  [3,2,1]<br>
]
`;

const question4 = () => {
    rando = Math.floor(Math.random() * 9);
    if (rando === 1) return A4
    if (rando === 2) return B4
    if (rando === 3) return C4
    if (rando === 4) return D4
    if (rando === 5) return E4
    if (rando === 6) return F4
    if (rando === 7) return G4
    if (rando === 8) return H4
    if (rando === 0) return I4
}

// //// ROUND 5 QUESTIONS //// OOP

const A5 = `Create a function that has two parameters (name and age) and returns an object. Let's call this function makePerson. This function will:
* Create an empty object<br>
* Add a name property to the newly created object with its value being the 'name' argument passed into the function
<br>* Add an age property to the newly created object with its value being the 'age' argument passed into the function
<br>* Return the object`;
const B5 = `Create a function PersonConstructor that uses the this keyword to save a single property onto its scope called greet. greet should be a function that logs the string 'hello'.`;
const C5 = `Create a function personFromConstructor that takes as input a name and an age. When called, the function will create person objects using the new keyword instead of the Object.create method.`;
const D5 = `Create a class PersonClass. PersonClass should have a constructor that is passed an input of name and saves it to a property by the same name. PersonClass should also have a method called greet that logs the string 'hello'.`;


const question5 = () => {
     rando = Math.floor(Math.random() * 4);
    if (rando === 1) return A5
    if (rando === 2) return B5
    if (rando === 3) return C5
    if (rando === 0) return D5

}

// //// ROUND 6 QUESTIONS / MISC / CALLBACKS

const A6 = `Create a function called map that accepts two parameters, an array of numbers  and a callback .
<BR><BR>Have map return a new array filled with  the results of invoking the callback function with each element of the input array.`;
const B6 = `Create a function called forEach that takes an array and a callback, and runs the callback on each element of the array. forEach does not return anything.`;
const C6= `Construct a function intersection that takes in an array of arrays, compares the inner arrays, and returns a new array with elements found in all of them.`;
const D6 = `Construct a function union that takes in an array of arrays, compares the inner arrays, and returns a new array that contains all elements. If there are duplicate elements, only add it once to the new array. Preserve the order of the elements starting from the first element of the first array. BONUS: Use reduce!`;
const E6 = `Construct a function objOfMatches that accepts two arrays and a callback. objOfMatches will build an object and return it. To build the object, objOfMatches will test each element of the first array using the callback to see if the output matches the corresponding element (by index) of the second array. If there is a match, the element from the first array becomes a key in an object, and the element from the second array becomes the corresponding value.`;
const F6 = `Given an array of integers, check to see if the array is already sorted (return true or false)`;
const G6 = `Given an array of numbers and a target number, return true if there are two numbers in the array that sum up to the target value; return false otherwise
<br><br>
BONUS: Get twoSum to work without using nested loops`;
const H6 = `The function reverseNumber should take one parameter, a number, it should reverse the number and return it.
<br>
EX: 
<br>
<br>
923 --> 329`;
const I6 = `Given an array of numbers, determine if the mode and mean of the array are equivalent
<br><br>
 Caveats:<br><br>
-  Math.floor the mean<br>
-  If there are multiple modes, use the max of the modes<br>
-  Return true or false`

const question6 = () => {
     rando = Math.floor(Math.random() * 9);
    if (rando === 1) return A6;
    if (rando === 2) return B6;
    if (rando === 3) return C6;
    if (rando === 4) return D6;
    if (rando === 5) return E6;
    if (rando === 6) return F6;
    if (rando === 7) return G6;
    if (rando === 8) return H6;
    if (rando === 0) return I6;
}


// //// ROUND 7 QUESTIONS /// BRAINBUSTERS


const A7 = `You did it! Try a bonus question or spend some time reviewing verbal questions!<br><br>

You are given an array of integers. Every number in the array appears twice, except for one. Find that single one.<br><br>

Challenge: solve this with linear time complexity<br><br>

Ex: <br><br>

Input: [2, 2, 1]<br>
Output: 1<br><br>

Input: [4, 1, 2, 1, 2]<br>
Output: 4<br><br>

Input: [1]<br>
Output: 1`;

const B7 = `You did it! Try a bonus question or spend some time reviewing verbal questions!<br><br>

Given two arrays of integers sorted in ascending order, merge both into a single sorted array. Return the new array.
<br><br>
The new array should contain all elements from the input arrays, including duplicates.
<br><br>
Ex: <br><br>
let array1 = [1, 2, 5, 7, 9];<br>
let array2  = [0, 1, 3, 4, 6, 7, 9];<br>
mergeSortedArrays(array1, array2) -> [0, 1, 1, 2, 3, 4, 5, 6, 7, 7, 9, 9];
const C = Given an array of numbers, return an array of sums where the value at each index of the output array is the sum of the the values at all other indices of the
input array<br><br>
Ex: <br><br>
[1, 3, 4, 2] -> [9, 7, 6, 8], since 9 = 3 + 4 + 2, 7 = 1 + 4 + 2, 6 = 1 + 3 + 2, and 8 = 1 + 3 + 4<br></br>`;



const question7 = () => {
    rando = Math.floor(Math.random() * 2);
   if (rando === 1) return A7;
   if (rando === 0) return B7;
}


// //// ROUND 8 QUESTIONS

// const A = ``;
// const B = ``;
// const C = ``;
// const D = ``;
// const E = ``;
// const F = ``;
// const G = ``;
// const H = ``;

// const question2 = () => {
//     let rando = Math.floor(Math.random() * 8);
//     if (rando === 1) return A
//     if (rando === 2) return B
//     if (rando === 3) return C
//     if (rando === 4) return D
//     if (rando === 5) return E
//     if (rando === 6) return F
//     if (rando === 7) return G
//     if (rando === 0) return H
// }

// //// ROUND 9 QUESTIONS

// const A = ``;
// const B = ``;
// const C = ``;
// const D = ``;
// const E = ``;
// const F = ``;
// const G = ``;
// const H = ``;

// const question2 = () => {
//     let rando = Math.floor(Math.random() * 8);
//     if (rando === 1) return A
//     if (rando === 2) return B
//     if (rando === 3) return C
//     if (rando === 4) return D
//     if (rando === 5) return E
//     if (rando === 6) return F
//     if (rando === 7) return G
//     if (rando === 0) return H
// }

// //// ROUND 10 QUESTIONS

// const A = ``;
// const B = ``;
// const C = ``;
// const D = ``;
// const E = ``;
// const F = ``;
// const G = ``;
// const H = ``;

// const question2 = () => {
//     let rando = Math.floor(Math.random() * 8);
//     if (rando === 1) return A
//     if (rando === 2) return B
//     if (rando === 3) return C
//     if (rando === 4) return D
//     if (rando === 5) return E
//     if (rando === 6) return F
//     if (rando === 7) return G
//     if (rando === 0) return H
// }