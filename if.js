//Check whether a given number is a 3-digit number or not.
// let a  = 1243
// if(a>=100 && a<=1000){
//     console.log("given:", a, "is a three digit number");
// }
// else{
//     console.log("given:", a, "not a three digit number");
    
// }

//Check whether a given number is divisible by both 3 and 5 or not.

// let a = 30
// if(a%3==0 && a%5==0){
//     console.log(a, "is a divisible by 3 and 5");    
// }
// else{
//     console.log(a, "is a not divisible by 3 and 5");
    
// }

//Check whether a given triangle is a valid triangle or not.
// let angle1  = 40
// let angle2  =  50
// let angle3 = 60
// if(angle1)

//Check whether a given number is a multiple of 10 or not.

// let num = 20
// if(num%2==0){
//     console.log(num, "is multiple of 10");
// }
// else{
//     console.log(num, "is not multiple of 10");
    
// }

// if-elif-else
// Check the type of triangle based on its sides.
//         Equilateral, Isosceles, or Scalene.

// let a = 10
// let b = 10
// let c = 10
// if(a ==b && b==c){
//     console.log("equilateral triangle"); 
// }
// else if( a== b || b ==c || a == c){
//     console.log("Isoscels triangle");   
// }else{
//     console.log("scalene triangle");
    
// }

// Calculate the electricity bill based on units consumed.
//     0–100: ₹2/unit, 101–200: ₹3/unit, 201–300: ₹5/unit, above 300: ₹7/unit.

// let units = 200;
// let bill;

// if (units <= 100) {
//     bill = units * 2;
// }
// else if (units <= 200) {
//     bill = units * 3;
// }
// else if (units <= 300) {
//     bill = units * 5;
// }
// else {
//     bill = units * 7;
// }

// console.log("Electricity Bill = ₹" + bill);

// Display the age category.
    // Below 13 → Child, 13–19 → Teenager, 20–59 → Adult, 60 and above → Senior Citizen.

//     let age = 25;

// if (age < 13) {
//     console.log("Child");
// }
// else if (age <= 19) {
//     console.log("Teenager");
// }
// else if (age <= 59) {
//     console.log("Adult");
// }
// else {
//     console.log("Senior Citizen");
// }

//Calculate the discount based on shopping amount.
 //   Below ₹1,000 → No discount, ₹1,000–₹4,999 → 10%, ₹5,000–₹9,999 → 20%, ₹10,000 and above → 30%.

// let bill = 10100
// if(bill<1000){
//     console.log("NO discount",bill);
// }
// else if(bill< 4999){
//     console.log("discount 10%", bill);
// }
// else if(bill< 9999){
//     console.log("discount 20%", bill); 
// }
// else {
//     console.log("the above 10k discount is 30%", bill);   
// }
//Display the season based on the month number.
    // 3–5 → Spring, 6–8 → Summer, 9–11 → Autumn, 12/1/2 → Winter.

// let month = 4
// if(month>= 3 && month <= 5){
//     console.log("this month is Spring"); 
// }
// else if(month>= 6 && month <= 8){
//     console.log("this month hot summer"); 
// }
// else if(month>= 9 && month <=11){
//     console.log("this month is Autumn"); 
// }
// else{
//     console.log("this month is winter"); 
// }

// Check whether a given year is a Leap Year or not.
    // Condition 1: year % 400 == 0
    // Condition 2: year % 4 == 0 and year % 100 != 0

// let year = 2021;

// if (year % 400 == 0) {
//     console.log("This is a Leap Year");
// }
// else if (year % 4 == 0 && year % 100 != 0) {
//     console.log("This is a Leap Year");
// }
// else {
//     console.log("This is not a Leap Year");
// }




//nested if
// 1.Check whether a person is eligible to donate blood.
    // Age should be between 18 and 60. If eligible by age, weight should be above 50 kg.

// let age = 16;
// let weight = 55;

// if (age >= 18 && age <= 60) {
//     if (weight > 50) {
//         console.log("Eligible to donate blood");
//     }
//     else {
//         console.log("Not eligible - weight should be above 50 kg");
//     }
// }
// else {
//     console.log("Not eligible - age should be between 18 and 60");
// }





// Display the grade based on average only if the student has passed in all 4 subjects.
// let maths = 80;
// let physics = 70;
// let chemistry = 90;
// let computer = 85;

// let average = (maths + physics + chemistry + computer) / 4;

// if (average >= 90) {
//     console.log("Grade A", average);
// }
// else if (average >= 75) {
//     console.log("Grade B", average);
// }
// else if (average >= 60) {
//     console.log("Grade C", average);
// }
// else {
//     console.log("Grade D", average);
// }




// Check whether a student is eligible for a scholarship.
// Age should be above 18. If eligible by age, score should be above 86.

// let age = 20;
// let score = 90;
// if (age > 18) {
//     if (score > 86) {
//         console.log("Student is eligible for scholarship");
//     }
//     else {
//         console.log("Not eligible - score should be above 86");
//     }
// }
// else {
//     console.log("Not eligible - age should be above 18");
// }