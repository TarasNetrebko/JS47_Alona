// Всім привіт!
// Find middle character of the word.
// User is going to input a word. Your task is to find the middle character of this word.
// If the word’s length is odd - return the middle character.If word’s length is even - return the middle 2 characters.
// You should validate for cancelled input, empty value and for value with spaces only, in that case show message: “Invalid value”.
// For user input use “prompt” function. For displaying result use “alert” function.

// Examples:
// 	For user input “test” should return “es”
// 	For user input “character” should return “a”
// 	For user input “B” should return “B”
// 	For user input “” should return “Invalid value”
// For user input “       “ should return “Invalid value”

// const word = prompt("Enter word");
// if (word === null || word.trim() === "") {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const char1 = word[word.length / 2 - 1];
//         const char2 = word[word.length / 2];
//         alert(`${char1}${char2}`);
//     } else {
//         const char = word[Math.floor(word.length / 2)];
//         alert(`${char}`);
//     }
// }

// const word = prompt("Enter word");
// if (word === null || word.trim() === "") {
//     alert("Invalid value");
// } else {
//     if (word.length % 2 === 0) {
//         const char = word.slice(word.length / 2 - 1, word.length / 2 + 1);
//         console.log(char);
//         alert(`${char}`);
//     } else {
//         const char = word.slice(Math.floor(word.length / 2), Math.floor(word.length / 2) + 1);
//         alert(`${char}`);
//     }
// }

// Write the code which verify user rights.
// Step 1. Check login
// 	Ask user for a login // use prompt()
// 	If the input is an empty line or Esc – show “Canceled.” // for showing - use alert()
// 	If the input length less than 4 symbols - show “I don't know any users having name length less than 4 symbols”.
// 	If it’s another string – then show “I don’t know you”.
// 	If the visitor enters "User" or "Admin", then prompt for a password.
// Step 2. Check password:
// 	For an empty string or cancelled input, show “Canceled.”
// 	For login “User” correct password is “UserPass”, for “Admin” correct password is  “RootPass”.
// In other case, show “Wrong password”.
// Step 3. Greets the user appropriately:
// 	If the current time in hours is more then 5.00 and less then 20: // current hours – new Date().getHours()
// 	For “User” show “Good day, dear User!”
// 	For “Admin” show “Good day, dear Admin!”
// 	In other way:
// 	For “User” show “Good evening, dear User!”
// 	For “Admin” show “Good evening, dear Admin!

// const login = prompt("Enter your Login");
// const time = new Date().getHours();
// if (login.trim() === "" || login === null) {
//     alert("Canceled");
// } else if (login.length < 4) {
//     alert("I don't know any users having name length less than 4 symbols");
// } else if (login !== "User" && login !== "Admin") {
//     alert("I don’t know you");
// } else {
//     const password = prompt("Enter password");
//     if (password.trim() === "" || password === null) {
//         alert("Canceled");
//     } else if (login === "User") {
//         if (password !== "UserPass") {
//             alert("Wrong password");
//         } else {
//             if (time > 5 && time < 20) {
//                 alert("Good day, dear User!");
//             } else {
//                 alert("Good evening, dear User!");
//             }
//         }
//     } else {
//         if (password !== "RootPass") {
//             alert("Wrong password");
//         } else {
//             if (time > 5 && time < 20) {
//                 alert("Good day, dear Admin!");
//             } else {
//                 alert("Good evening, dear Admin!");
//             }
//         }
//     }
// }