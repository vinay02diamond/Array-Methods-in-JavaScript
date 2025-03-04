//Method is a function that is associated with an object//
const student =["Bhuvan","Venkat","Johan","Vikas"];
console.log(student.length);


var len =student.length
console.log(len);

//method 1 - pop//

// pop removes  last element of array by default
student.pop();
console.log(student);


//perform again pop it wont change the outcome//
student.pop();
console.log(student);

//method 2 - push//
//push adds last element by default at the end//
student.push("Vinay");
console.log(student);

//method 3 - slice//
//slice removes temporarily//
console.log(student);
const newStudent =student.slice(1);
console.log(newStudent);
console.log(student);

//method 4 - sort//
//sort is permanent//
console.log(student.sort());

//method 5 - reverse//
//reverse is permanent//
console.log(student.reverse());
console.log('student')

const number =[23,41,3,78,46,90,13];
console.log(number);
console.log(number.sort((a,b)=> a-b));
console.log(number);
console.log(number.reverse());
console.log(number);

// In array you can make changes to const //

const num =[52,96,25,3,9,99]
console.log(num);
num[0]=100;
console.log(num);