// Chap no 21 to 40
// Q no 01

// let firstName = prompt(" Enter your first name   :");
// let lastName = prompt("  Enter your last name  :");


// let fullName = firstName + " " + lastName;

// console.log("Hi" + fullName + "!");

// // Q no 02
//     var mobile = prompt("Apna favorite mobile model likho:");

//     var length = mobile.length;

//     console.log("My favorite Phone is: " + mobile );
//     console.log("Iski length hai: " + length);

    // Q no 03
//      var word = "Pakistani";

//     
//     var index = word.indexOf("n");

//     
//    console.log("Word hai: " + word );
//     console.log("'n' ka index hai: " + index);

// Q no 04
//   var word = "Hello World";

//     
//     var lastIndex = word.lastIndexOf("r");

//     console.log("Word hai: " + word );
//    console.log("'l' ka last index hai: " + lastIndex);

// Q no 05

// var word = "Pakistani";

    
//     var char = word.charAt(5);

   
//    console.log("Word hai: " + word );
//     console.log("3rd index ka character hai: " + char);

// Q no 06

// var firstName="Mubashir"
// let lastName="Khan"

// console.log(firstName.concat( " ",lastName))

// Q no 08

// var city = "Hyderabad";
//     var result = city.replace("Hyder", "Islam");

//    console.log("Before Replacement: " + city );
//     console.log("After Replacement: " + result);

// Q no 09

// var message = "Ali and Sami are best friends. They play cricket and football together.";

    // var result = message.replace(/and/g, "&");

    // console.log("Before Replacement: " + message );
    // console.log("After Replacement: " + result);

// Q no 10

    // var str = "472";       
    // var num = Number(str);  

    // console.log( num);

// Q no 11


    // var userInput = prompt("Enter any text:");

    // var result = userInput.toUpperCase();
    // console.log("Uppercase: " + result);

// Q no 12

//  var num = 35.36;

//     var str = num.toString();
//     var result = str.replace(".", "");

//     console.log("Before Removing Dot: " + num);

//     console.log("After Removing Dot: " + result);

// Q no 13

//  var username = prompt("Enter your username:");

//     // special characters check
//     var isValid = true;

//     for (var i = 0; i < username.length; i++) {
//         var code = username.charCodeAt(i);

//         if (code === 64 || code === 46 || code === 44 || code === 33) {
//             isValid = false;
//             break;
//         }
//     }

//     if (isValid) {
//         console.log("Valid Username:", username);
//     } else {
//         console.log("Invalid Username! Please enter without @ . , !");
//     }

// Q no 14

//    var university = "University of Karachi";

 
//     var arr = university.split("");

    
//     for (var i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
    // }


// Q no 15

// var text = "The quick brown fox jumps over the lazy  dog";

    
//     var lowerText = text.toLowerCase();

//     var words = lowerText.split(" ");

//     var count = words.filter(word => word === "the").length;
//     console.log(count)

// Chap 26 to 30

// Q no 1
 
    // var number = +prompt("Enter a positive number:");

  
    // console.log("Number: " + number );
    // console.log("Round off value: " + Math.round(number) );
    // console.log("Floor value: " + Math.floor(number) );
    // console.log("Ceil value: " + Math.ceil(number));

    // Q no 2
    // var number = -prompt("Enter a nagative number:");

  
    // console.log("Number: " + number );
    // console.log("Round off value: " + Math.round(number) );
    // console.log("Floor value: " + Math.floor(number) );
    // console.log("Ceil value: " + Math.ceil(number));

    // Q no 3
    // let absValue= prompt("enter a number")
    // console.log(Math.abs(absValue))

    // Q no 4
    // let random = parseInt(Math.random()*6)+1
    // console.log(random)

    // Q no 5
    // let randomCoin = parseInt(Math.random()*2)+1
    // console.log(randomCoin)

    // Q no 6
    //   let randomCoin = parseInt(Math.random()*100)+1
    // console.log(randomCoin)

    // Q no 7
    // let userWeight =prompt("Enter your weight")

    // console.log("The weight of user is :",parseFloat(userWeight),"kgs")

    // Q no 8
// let secretNum = Math.floor(Math.random() * 10) + 1;
// let userGuess = parseInt(prompt("Enter a number between 1 and 10"));

// if(userGuess === secretNum){
//     console.log(" Congratulations! You guessed it!");
// }else{
//     console.log(" Try again! The secret number was " + secretNum);
// }


// Chap 31 to 34
// Q no 1
// let currentTime = new Date()
// console.log(currentTime)

// Q no 2


// let months = ["January", "February", "March", "December"];


// let monthIndex = new Date().getMonth(); 


// console.log("Current Month:", months[3]);

// Q no 3


// let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];


// let today = new Date();
// let dayIndex = today.getDay(); 


// console.log("Today is: " + days[dayIndex]);

// Q no 4

// let today = new Date();
// let day = today.getDay();

// // Check if Saturday or Sunday
// if(day === 2 || day === 6){
//     console.log(" It's Fun day!");
// }else{
//     console.log("It's a normal day.");
// }

// Q no 5

// let today = new Date();
// let date = today.getDate(); 


// if(date < 31){
//     console.log(" First fifteen days of the month");
// }else{
//     console.log(" Last days of the month");
// }

// 35 to 38
// Function

// Password Generator
let paragraph = document.getElementById("showPass")


let passCharcter = "!@#$%^&*()_ncds585+95+KLDf234~@#E$ghvJTYUTY56498451"

function randompass (){
    let pass=""
for (let i = 0; i < 8; i++){
    let randoNum = Math.floor(Math.random() * passCharcter.length)


pass += passCharcter[randoNum]
paragraph.innerHTML=pass
}
}
randompass()

// Q no 1
// function date (){
//     let currentTime=new Date()
//     console.log(currentTime)
// }
// date()

// Q no 2
// function greet (userName){
//   console.log("Hi :" + userName)
// }
// greet("Mubashir Khan")

// Q no 3
// function sum (){
// let num1 =    + prompt("Enter 1st Number")
// let num2 =    +prompt("Enter 2nd Number")
// console.log(num1 + num2)
// }
// sum()

// Q no 4
// let num1 = Number(prompt("Enter first number:"));
// let operator = prompt("Enter operator (+, -, *, /):");
// let num2 = Number(prompt("Enter second number:"));



// function calculate(num1, num2, operator) {
//     let result;

//     if (operator === "+") {
//         result = num1 + num2;
//     } 
//     else if (operator === "-") {
//         result = num1 - num2;
//     } 
//     else if (operator === "*") {
//         result = num1 * num2;
//     } 
//     else if (operator === "/") {
//         result = num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
//     } 
//     else {
//         result = "Invalid operator";
//     }

//     return result;
    
// }
// let answer = calculate(num1, num2, operator);


// console.log("Result: " + answer);


// Q no 5
// function square(num) {
//     return num * num;
// }

// // User se input lena
// let number = Number(prompt("Enter a number:"));

// let result = square(number);
// console.log("Square is: " + result);



// let dayOfWk =prompt("enter a day")
//  if (dayOfWk ==="Saturday" || dayOfWk === "Sunday") {
//  alert("Whoopee!");
//  }
//  else if (dayOfWk === "Friday") {
//  alert("TGIF!");
//  }
//  else {
//  alert("Shoot me now!");
//  }

//  switch(dayOfWk) {
// case "Saturday" :
// alert("Whoopee");
// break;
// case "Sunday" :
// alert("Whoopee");
// break;
// case "Friday" :
// alert("TGIF!");
//  break;
//  default :
//  alert("Shoot me now!");
//  }

// 39 to 44 Chapters
// Q no 1
// function power(a, b) {
//     let result = 1;

//     for (let i = 0; i < b; i++) {
//         result = result * a;
//     }

//     return result;
// }
// console.log(power(2, 3)); 

// Q no 2
// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//         return "Leap Year";
//     } else {
//         return "Not a Leap Year";
//     }
// }

// console.log(isLeapYear(2020)); 

// Q no 3
// function triangleArea(a, b, c) {
//     let S = (a + b + c) / 2;
//     let area = Math.sqrt(S * (S - a) * (S - b) * (S - c));
//     return area;
// }

// // Example
// console.log(triangleArea(3, 4, 5)); 

// Q no 4
// function calculateS(a, b, c) {
//     return (a + b + c) / 2;
// }
// function calculateArea(a, b, c) {
//     let S = calculateS(a, b, c);
//     return Math.sqrt(S * (S - a) * (S - b) * (S - c));
// }
// console.log(calculateArea(3, 4, 5)); 

// Q no 5