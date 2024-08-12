// IF STATEMENT REVIEW
// Day of the Week: Prompt the user to enter a day of the week (e.g., "Monday") and say whether it's a weekday or the weekend.
let user = prompt("What's the day of the week?")

if(user === "Saturday" || user === "Sunday"){
  console.log("Its the weekend, lets gooo")
}else{
  console.log("Its a week day, school")
}

// Age Group Classifier: Prompt the user to enter their age and categorize them into different age groups (child, teen, adult, senior)
let age = prompt("What is your age?")
age = parseInt(age)

if(age <= 12){
  console.log("Your a child")
} else if(age <= 18){
  console.log("Your a teen")
} else if(age <= 21 ){
  console.log("Your a adult ")
} else if(age >= 65){
  console.log("Your a senior")
}


// WHILE LOOPS
// Print 1 to 5
let i = 0

while (i <= 5){
  console.log(i)
  i++
}

// Print from a certain number to 1
let usernum = prompt("Enter a number: ")
usernum = parseInt(usernum)

while(usernum > 0){
  console.log(usernum)
  usernum--  
}
// Summing up to 5
let  sum = 0
let counter = 1 

while(counter <= 5){
  sum = sum + counter
  counter++
}
console.log(sum)
// Using prompt
let mysteryS = "Osiris"
let user1 = prompt("Enter a student's name: ")

while(mysteryS !== user1){
  user1 = prompt("Try again, guess a different student")
}
console.log("Congrats!")