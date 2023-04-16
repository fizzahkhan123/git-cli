// 3-april-2023

// alert("hello world");
// document.write("<h1>hello</h1>");

// console.log(123);


// var name = "ali";
// var age = 24;
// console.log(name);


// alert("hello " +name + age);


// let data = "Fizzah";
// let data2 = " khan";

// let data3 = data + data2;
// console.log(data3);

// let data = 5;
// let data2 = 5;

// let data3 = data + data2; // addition
// console.log(data3);


// let userName = prompt("what is your name?")
// // console.log(userName);
// document.write("Welcome to my website "+userName)

//  Task no 2
// Q:  The Fitrah Amount//
//var familyMembers = parseInt(prompt("Please enter the total number of family members:"));
// var method = prompt("Please choose a fitrah amount method: \n 1. 250Rs per family member \n 2. 450Rs per family member \n 3. 2100Rs per family member \n 4. 2800Rs per family");
// var price;

// if (method === "1") {
//   price = 40;
// }
//  else if (method === "2") {
//   price = 50;
// }
//  else if (method === "3") {
//     price = 80
//  }
//  else if (method === "4") {
//     price = 100
//  }
// else {
//   price = parseFloat(prompt("Please enter the custom amount of per family member:"));
// }


// var fitrahAmount = price * familyMembers;
// alert("The calculated fitrah amount for " + familyMembers + " family members is Rs" + fitrahAmount.toFixed(2) + ".");

// Task no 3    
// Generate A random number between 1 and 10 and store it in a variable called "secretNumber"
// var secretNumber = 7
// console.log(secretNumber)
// var guess = parseInt(prompt("Guess the secret number (between 1 and 10):"));


// if (guess === secretNumber) {
//   alert("Congratulations! You guessed the secret number.");
// }

//  else {
//   if (guess > secretNumber) {
//     alert("Too close! Guess again.");
//   } else {
//     alert("Too low! Guess again.");
//   }
// }

//   Task no 4
// Q: Create a program that asks the user to enter a name, and then prints out the name
// with the first letter capitalized (Make your name in capitalized case).    

// var name = prompt("Please write your good name:");
// var capitalized = name.charAt(0).toUpperCase() + name.slice(1);
// console.log(capitalized);


//            Task no 5 
// Q: Two empty arrays "contactNumbers" and"contactNames"
// var contactNames =[];
// var contactNumbers =[];
// for( i=0;i<3;i++)
// {
// var x=prompt("Enter your Username");
// var y=prompt("Enter your Number");
// contactNames.push(x);
// contactNumbers.push(y);
// }

// for(j=0;j<3;j++)
// {
//   var name2=contactNames[j];
//   var number2=contactNumbers[j];
//   console.log(name2+number2);
// }

//              //   Task no 6             
//  * An array containing different Items
// var products = ["Burger", "Pizza", "Pasta", "Biryani", "Cake"];
// var position = parseInt(prompt("Enter the position of the item to be removed (0 to " + (products.length - 1) + "):"));
// var removedItem = products.splice(position, 1);
// console.log("Removed item: " + removedItem);
// console.log("Remaining items: " + products);
// console.log("Total number of items remaining: " + products.length);

//               Task no 7
// Q: a program that asks the user for their nationality, gender, and age using the prompt
// function.            
// var nationality = prompt("What is your nationality?");
// var gender = prompt("What is your gender? \n1.male\n2.female");
// var age = parseInt(prompt("What is your age?"));

// if (nationality == "Pakistani" || nationality == "Indian") {
//   if (gender == "male" && age > 18) {
//     alert("You are eligible to vote!");

//   } else if (gender == "female" && age > 18) {
//     var married = prompt("Are you married? \n1.Yes\n2.No").toLowerCase();
//     if (married == "yes") {
//       alert("You are eligible to vote!");
//     } else if (married == "no") {
//       alert("You are pagal eligible to vote.");
//     }
//   } 
//   else {
//     alert("No Entry");
//   }
// } 
// else {
//   alert("Ap vote denay k qabil hain!.");
// }


                 //  Task no 8
// Q:  Define the WorldCupSquad array
// const WorldCupSquad = ["Babar Azam", "Mohammad Rizwan", "Shoaib Malik", "Asif Ali", "Mohammad Hafeez", "Fakhar Zaman", "Imad Wasim", "Shadab Khan", "Hasan Ali", "Shaheen Afridi", "Haris Rauf", "Sarfraz Ahmed", "Faheem Ashraf", "Mohammad Hasnain", "Usman Qadir"];
// const FinalTeam = WorldCupSquad.slice(0, 11);
// console.log("Final team players:");
// for (let i = 0; i < FinalTeam.length; i++) {
//   console.log(FinalTeam[i]);
// }