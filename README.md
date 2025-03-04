# Array-Methods-in-JavaScript
This repository contains examples of various JavaScript array methods and their behavior. It demonstrates how to manipulate arrays using built-in methods such as pop(), push(), slice(), sort(), and reverse().

Methods Covered:

pop() - Removes the last element from an array.

push() - Adds a new element at the end of an array.

slice() - Creates a shallow copy of an array without modifying the original array.

sort() - Sorts the elements of an array permanently.

reverse() - Reverses the elements of an array permanently.

Example Code:
const student = ["Bhuvan", "Venkat", "Johan", "Vikas"];
console.log(student.length);

var len = student.length;
console.log(len);

// pop() method - removes last element
student.pop();
console.log(student);

// push() method - adds an element to the end
student.push("Vinay");
console.log(student);

// slice() method - returns a portion of the array
const newStudent = student.slice(1);
console.log(newStudent);
console.log(student);

// sort() method - sorts elements in ascending order
console.log(student.sort());

// reverse() method - reverses the order of elements
console.log(student.reverse());

const number = [23, 41, 3, 78, 46, 90, 13];
console.log(number.sort((a, b) => a - b));
console.log(number.reverse());

// Modifying an array declared with const
const num = [52, 96, 25, 3, 9, 99];
num[0] = 100;
console.log(num);

1.How to Use

Clone this repository:
git clone https://github.com/your-username/array-methods.git

2.Open the JavaScript file in a code editor.

3.Run the script in the browser console or using Node.js:
node filename.js

License

This project is open-source and available under the MIT License.


