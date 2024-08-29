/*
Task-2
Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.
*/ 


let studentMarks = [75.25, 65, 80, 35.45, 99.50];
let sum =0;

for(let i=0; i < studentMarks.length; i++){

    sum += studentMarks[i];
}
console.log("Total mark",sum);
let avg = sum/studentMarks.length;
console.log("Average mark",avg.toFixed(2));