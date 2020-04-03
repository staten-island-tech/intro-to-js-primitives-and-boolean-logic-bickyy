// console.log("connected"); 
//use this to check each time

// let string = " I am a string ";
// let sentence = " Hello Angel " + " and Vicky";
// let combine = string + sentence
// console.log(combine)

// let student = "Sandra"
// let student2 = "Gia";
// let couseName= "AP CSP"
// let teacherName = "Whalen"
// let sentence = 
//     student + 
//     " and " + 
//     student2 + 
//     " are talking " + 
//     courseName " width " + 
//     teacherName;

// let betterSentence = ${student} and ${student2} are taking ${courseName} with ${teacherName} next year; 

// the ones on top doesnt work and how to format it

// let year = 2020;
// let nextYear = year-1; 
// let past = 2020 / 2;
// let future = year * 2; 

// BooLEANS
// let trueStatement = "false";

// //NULL AND UNDEFINED 
// let richard; 

//BooLean Logic or if/else 
//let age = 18;
//let baoSquared = "Bao Bao";
// console.log(baoSquared === "Bao Bao");
// console.log(age == "17" );
//triple = is what we use 
//lower and upper case are diff 


// let age = 20;
// if (age < 18) {
//     console.log("You are a child");
// } else if (age == 18){
//     console.log("happy birthday");
// } else{
//     console.log("Your are over 18");
// }

//red, green, yellow 

// let light = "red"; 
// if (light === "red") {
//     console.log("stop");
// } else if (light === "yellow") {
//     console.log("caution!");
// } else {
//     console.log("go");
// }

// let kristyIntolerant = true;
// let baoBaoIntolerant = false; 

// if (kristyIntolerant === true && baoBaoIntolerant === true){
//     console.log("only almond milk");
// }
// else if (kristyIntolerant === true || baoBaoIntolerant === true){
//     consolse.log("Get both Milks");
// }else{
//     console.log("just regular milk");
// }

// let temperature = 90; 
// if (temperature < 86) {
//     console.log("too cold");
// } else if (temperature <= 72 && temperature >= 68) {
//     console.log("perfect");
// } else if (temperature <= 76 && temperature > 72){
//     console.log("warm");
// } else {
//     console.log("too hot");
// }

// function test() {
//     console.log("I'm a function");
// }
// test(); 

// const add = function (x,y) {
//     return x + y; // return ends the function 
// };
// console.log(add(10,20));
// console.log(add(30,50));
// //let name = "Richard";
// const name = "alan" ; // cannot re-define const 


// const hello = function () {
//     console.log("hello");
// }
// const bye = function () {
//     console.log("bye");
// }
// const hiBye = function () {
//     hello();
//     bye();
//     hello();
//     bye();
// };
// hiBye();

// const name = "Thrushi"; // global variable or global space 

// function displayName() {
//     const name = "Kelly" ; // local of function scope 
//     alert(none);
//     function sun(){
//         const name2 = "Jacob";
//         console.log(name2); // inner function has access to outer function 
//     }
//     return sun();
// }
// displayName();

// //example 
// function displayName() {
//     const name = "Kelly" ; // local of function scope 
//     function sun(){
//         console.log(name); // inner function has access to outer function 
//     }
//     return sun;
// }
// const myFunc= displayName();
// myFunc();
// // example above is called a closure 


//arrays
// const names = ["aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];
// names.push("Karen");


// const names = ["aarthi", "Vicky", "Vincent", "Doyle", "Kelly"];
// names.forEach(name => console.log(name));

//spread operator 
// const numbers = [1,2,3];
// const add = function(x,y,z) {
//     return x + y + z;
// };
// console.log(add(...numbers));

// Challenge 1


// Using the above array filter out all students whose names contain
// less than 5 characters


// const newArr = students
// .push ()
// .forEach ()
// .map()
// let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
// "Richard"];
// const result = students.filter(student => student.length < 5);
// console.log(result);



// Challenge 2
// Using the above array check to see if the array “includes” “junshen”
// Write a seperate function to check if “Alan” or “Savva” were included
// in “some” of the array
// USE MDN to find the appropriate array methods


// let students = ["Riya", "Omor", "Alan", "Jaiyu", "Michael", "Lisa",
// "Richard"];
// console.log(students.includes("junshen"));
// console.log(students.includes("Alan", "Savva"));

//console.log(students.some(name => name == "Savva" || name == "ALan"));

const Homer = {
    name: "Homer",
    age: 32,
    family: {
        wife: {
            name: "Marge",
            age:32,
        },
        son: {
            name: "Bart",
            age: 10
        }
    }
};

Homer.family.daughter = {
    name: "Lisa",
    age: 8
}