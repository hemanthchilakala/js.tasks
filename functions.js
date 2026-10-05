//TYpe A.Named Function Without Input & Without Return

//BASIC — 1 to 5
//1. Print name
// function displayName(){
//     let name="Krishna"
//     console.log("My name is",name)
// }
// displayName()

//2.Add three numbers

// function addThree(){
//     let n1=10
//     let n2=20
//     let n3=30
//     let sum=n1+n2+n3
//     console.log("Sum =",sum)
// }
// addThree()

//3.Check whether a number is even or odd

// function evenodd(){
//     let n=15
//     if(n%2==0){
//         console.log(n,"is even")
//     }
//     else{
//         console.log(n,"is odd")
//     }
// }
// evenodd()

//4. Check whether a number is positive, negative or zero

// function checkNumber(){
//     let n=-10
//     if(n>0){
//         console.log(n,"is positive")
//     }
//     else if(n<0){
//         console.log(n,"is negative")
//     }
//     else{
//         console.log(n,"is zero")
//     }
// }
// checkNumber()

//5. Find the largest of two numbers

// function largest(){
//     let n1=25
//     let n2=40
//     if(n1>n2){
//         console.log(n1,"is largest")
//     }
//     else{
//         console.log(n2,"is largest")
//     }
// }
// largest()

// INTERMEDIATE 6 to 10

//6. Print numbers from 1 to 20

// function primeNumbers(){
//     for(let i=1;i<=20;i++){
//         let count=0
//         for(let j=1;j<=i;j++){
//             if(i%j==0){
//                 count++
//             }
//         }
//         if(count==2){
//             console.log(i)
//         }
//     }
// }
// primeNumbers()

//7. Print even numbers from 1 to 50

// function evenNumbers(){
//     for(let i=1;i<=50;i++){

//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// evenNumbers()

//8. Find the factorial of 5

// function factorial(){
//     let fact=1
//     let n=5
//     for(let i=1;i<=n;i++){
//         fact=fact*i
//     }
//     console.log(fact)
// }
// factorial()

//9.Print Fibonacci series of 10 num

// function fibonacci(){
//     let  a=0
//     let b=1
//     let n=10
//     for(let i=1;i<=n;i++){
//         console.log(a)
//         c=a+b
//         a=b
//         b=c
//     }
// }
// fibonacci()

//10. Find the sum of digits

// function sumDigits(){
//     let n=12345
//     let sum=0
//     while(n>0){
//         let rem=n%10
//         sum=sum+rem
//         n=parseInt(n/10)
//     }
//     console.log("Sum of digits =",sum)
// }
// sumDigits()

//ADVANCED  11 to 15

//11. Check whether a number is prime

// function prime(){
//     let n=13
//     let count=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log(n,"is prime")
//     }
//     else{
//         console.log(n,"is not prime")
//     }
// }
// prime()

//12. Check whether a number is Armstrong
// function armstrong(){
//     let n=153
//     let temp = n
//     let sum=0
//     while(n>0){
//         let ld=n%10
//         sum = sum+ ld**3
//         n=parseInt(n/10)
//     }
//     if(sum==temp){
//         console.log("number ",temp,"is armstrong")
//     }
//     else{
//         console.log("not an armstrong")
//     }
// }
// armstrong()

//13. Check whether a number is perfect

// function perfect(){
//     let n=6
//     let sum=0
//     for(let i=1;i<n;i++){
//         if(n%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==n){
//         console.log("number ",n," is perfect")
//     }
//     else{
//         console.log("not perfect")
//     }
// }
// perfect()

//14. Print prime numbers in a range

// function primeRange(){
//     for(let n=1;n<=50;n++){
//         let count=0
//         for(let i=1;i<=n;i++){
//             if(n%i==0){
//                 count++
//             }
//         }
//         if(count==2){
//             console.log(n)
//         }
//     }
// }
// primeRange()

//15. Print a star pattern

// function pattern(){
//     for(let i=1;i<=5;i++){
//         let str=""
//         for(let j=1;j<=i;j++){
//             str=str+"*"
//         }
//         console.log(str)
//     }
// }
// pattern()

//TYPE B .Named Function With Input & Without Return

//Basic 1 to 5

//1. Display a name
// function displayName(fname){
//     console.log("My name is",fname)
// }
// displayName("Krishna")

//2. Add two numbers

// function add(a,b){
//     let sum=a+b
//     console.log("Sum =",sum)
// }
// add(10,20)

//3.. Find the average of three numbers

// function average(a,b,c){
//     let avg=(a+b+c)/3
//     console.log("Average =",avg)
// }
// average(10,20,30)

//4. Check even or odd

// function evenodd(n){
//     if(n%2==0){
//         console.log(n,"is even")
//     }
//     else{
//         console.log(n,"is odd")
//     }
// }
// evenodd(15)

//5. Find the largest of three numbers
// function largest(a,b,c){
//     if(a>b && a>c){
//         console.log(a,"is largest")
//     }
//     else if(b>a && b>c){
//         console.log(b,"is largest")
//     }
//     else{
//         console.log(c,"is largest")
//     }
// }
// largest(10,30,20)

//INTERMEDIATE  6 to 10

//6. Print numbers from 1 to n

// function printNumbers(n){
//     let i=1
//     while(i<=n){
//         console.log(i)
//         i++
//     }
// }
// printNumbers(10)

//7. Print multiplication table

// function table(n){
//     for(let i=1;i<=10;i++){
//         console.log(n,"x",i,"=",n*i)
//     }
// }
// table(7)

//8. Find factorial of a number

// function factorial(n){
//     let fact=1
//     let i=1
//     while(i<=n){
//         fact=fact*i
//         i++
//     }
//     console.log("Factorial =",fact)
// }
// factorial(5)

//9. Print Fibonacci series

// function fibonacci(n){
//     let n1=0
//     let n2=1
//     for(let i=1;i<=n;i++){
//         console.log(n1)
//         let n3=n1+n2
//         n1=n2
//         n2=n3
//     }
// }
// fibonacci(10)

//10. Find the sum of digits

// function sumDigits(n){
//     let sum=0
//     while(n>0){
//         let rem=n%10
//         sum=sum+rem
//         n=parseInt(n/10)
//     }
//     console.log("Sum of digits =",sum)
// }
// sumDigits(12345)

//ADVANCED 11 to 15

//11. Check whether a number is prime

// function primeORnot(n){
//     let i=1
//     let count=0
//     while(i<=n){
//         if(n%i==0){
//            count++
//         }
//         i++
//     }
//     if(count==2){
//         console.log(n,"is prime")
//     }
//     else{
//         console.log(n,"is not a prime")
//     }
// }
// primeORnot(13)
// primeORnot(20)
// primeORnot(19)
// primeORnot(33)

//12. Check Armstrong number

// function armstrong(n){
//     let original=n
//     let sum=0
//     while(n>0){
//         let rem=n%10
//         sum=sum+(rem*rem*rem)
//         n=parseInt(n/10)
//     }
//     if(sum==original){
//         console.log(original,"is Armstrong")
//     }
//     else{
//         console.log(original,"is not Armstrong")
//     }
// }
// armstrong(153)
// armstrong(123)

//13. Check perfect number

// function perfect(n){
//     let sum=0
//     for(let i=1;i<n;i++){
//         if(n%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==n){
//         console.log(n,"is perfect number")
//     }
//     else{
//         console.log(n,"is not a perfect number")
//     }
// }
// perfect(6)
// perfect(10)

//14. Print Armstrong numbers in a range

// function armstrongRange(start,end){
//     for(let n=start;n<=end;n++){
//         let temp=n
//         let sum=0
//         while(temp>0){
//             let rem=temp%10
//             sum=sum+(rem**3)
//             temp=parseInt(temp/10)
//         }
//         if(sum==n){
//             console.log(n)
//         }
//     }
// }
// armstrongRange(1,500)

//15. Print a right align pattern

// function rightPattern(n){
//     for(let j=1;j<=n;j++){
//     let output=""
//             for(let k=1;k<j;k++){
//                 output+=" "
//             }
//             for(let i=j;i<=n;i++){
//                output+=i
//             }
//             console.log(output)
//         }
// }
// rightPattern(5)

//TYPE C.Named Function — WITHOUT Input & WITH Return

//BASIC 1 to 5

//1. Return the largest of three numbers

// function largest(){
//     let a=10
//     let b=30
//     let c=20

//     if(a>b && a>c){
//         return a
//     }
//     else if(b>a && b>c){
//         return b
//     }
//     else{
//         return c
//     }
// }
// console.log(largest())

//2. Return the smallest of three numbers

// function smallest(){
//     let a=10
//     let b=5
//     let c=20
//     if(a<b && a<c){
//         return a
//     }
//     else if(b<a && b<c){
//         return b
//     }
//     else{
//         return c
//     }
// }
// console.log(smallest())

//3. Return the square of a number
// function square(){
//     let n=5
//     return n*n
// }
// console.log(square())

//4. Return the cube of a number

// function cube(){
//     let n=4
//     return n*n*n
// }
// console.log(cube())

//5. Return whether a number is divisible by 5

// function divisible(){
//     let n=25
//     if(n%5==0){
//         return "Divisible by 5"
//     }
//     else{
//         return "Not divisible by 5"
//     }
// }
// console.log(divisible())

//INTERMEDIATE 6 to 10

//6. Return the sum of odd numbers from 1 to 20

// function oddSum(){
//     let sum=0
//     for(let i=1;i<=20;i++){
//         if(i%2!=0){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(oddSum())

//7. Return the sum of even numbers from 1 to 50
// function evenSum(){
//     let sum=0
//     for(let i=1;i<=50;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(evenSum())

// //8. Return the count of even numbers from 1 to 50

// function evenCount(){
//     let count=0
//     for(let i=1;i<=50;i++){
//         if(i%2==0){
//             count++
//         }
//     }
//     return count
// }
// console.log(evenCount())

//9. Return the count of odd numbers from 1 to 50

// function oddCount(){
//     let count=0
//     for(let i=1;i<=50;i++){
//         if(i%2!=0){
//             count++
//         }
//     }
//     return count
// }
// console.log(oddCount())

//10. Return the largest digit in a number
// function largestDigit(){
//     let n=58324
//     let largest=0
//     while(n>0){
//         let rem=n%10
//         if(rem>largest){
//             largest=rem
//         }
//         n=parseInt(n/10)
//     }
//     return largest
// }
// console.log(largestDigit())

//ADVANCED  11 to 15

//11. Return the smallest digit in a number

// function smallestDigit(){
//     let n=58324
//     let smallest=9
//     while(n>0){
//         let rem=n%10
//         if(rem<smallest){
//             smallest=rem
//         }
//         n=parseInt(n/10)
//     }
//     return smallest
// }
// console.log(smallestDigit())

//12. Return the reverse of a number

// function reverseNumber(){
//     let n=12345
//     let rev=0
//     while(n>0){
//         let rem=n%10
//         rev=rev*10+rem
//         n=parseInt(n/10)
//     }
//     return rev
// }
// console.log(reverseNumber())

//13. Return the product of digits
// function productDigits(){
//     let n=1234
//     let product=1
//     while(n>0){
//         let rem=n%10
//         product=product*rem
//         n=parseInt(n/10)
//     }
//     return product
// }
// console.log(productDigits())

//14. Return the number of digits

// function countDigits(){
//     let n=12345
//     let count=0
//     while(n>0){
//         n=parseInt(n/10)
//         count++
//     }
//     return count
// }
// console.log(countDigits())

//15. Return whether a number is palindrome or not
// function palindrome(){
//     let n=121
//     let original=n
//     let rev=0
//     while(n>0){
//         let rem=n%10
//         rev=rev*10+rem
//         n=parseInt(n/10)
//     }
//     if(original==rev){
//         return "Palindrome"
//     }
//     else{
//         return "Not Palindrome"
//     }
// }
// console.log(palindrome())

//TYPE D.Named Function — WITH Input & WITH Return

//BASIC 1 to 5

//1. Find the square of a number
// function square(n){
//     return n*n
// }
// console.log(square(5))

//2. Find the cube of a number
// function cube(n){
//     return n*n*n
// }
// console.log(cube(4))

//3. Find the remainder of two numbers
// function remainder(a,b){
//     return a%b
// }
// console.log(remainder(17,5))

//4. Find the largest among four numbers
// function largest(a,b,c,d){
//     let large=a
//     if(b>large){
//         large=b
//     }
//     if(c>large){
//         large=c
//     }
//     if(d>large){
//         large=d
//     }
//     return large
// }
// console.log(largest(10,45,25,30))

//5. Check whether a number is divisible by both 3 and 5
// function divisible(n){
//     if(n%3==0 && n%5==0){
//         return "Divisible by both 3 and 5"
//     }
//     else{
//         return "Not divisible by both 3 and 5"
//     }
// }
// console.log(divisible(30))

//INTERMEDIATE 6 to 10

//6. Find the sum of odd numbers in a range

// function oddSum(start,end){
//     let sum=0
//     for(let i=start;i<=end;i++){
//         if(i%2!=0){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(oddSum(1,20))

//7. Find the sum of even numbers in a range
// function evenSum(start,end){
//     let sum=0
//     for(let i=start;i<=end;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     return sum
// }
// console.log(evenSum(1,20))

//8. Count numbers divisible by 3 in a range
// function countDivisible(start,end){
//     let count=0
//     for(let i=start;i<=end;i++){
//         if(i%3==0){
//             count++
//         }
//     }
//     return count
// }
// console.log(countDivisible(1,30))

//9. Find the largest digit of a number

// function largestDigit(n){
//     let largest=0
//     while(n>0){
//         let rem=n%10
//         if(rem>largest){
//             largest=rem
//         }
//         n=parseInt(n/10)
//     }
//     return largest
// }
// console.log(largestDigit(58324))

//10. Find the smallest digit of a number
// function smallestDigit(n){
//     let smallest=9
//     while(n>0){
//         let rem=n%10
//         if(rem<smallest){
//             smallest=rem
//         }
//         n=parseInt(n/10)
//     }
//     return smallest
// }
// console.log(smallestDigit(58324))

//ADVANCED 11 to 15

//11. Reverse a number
// function reverseNumber(n){
//     let rev=0
//     while(n>0){
//         let rem=n%10
//         rev=rev*10+rem
//         n=parseInt(n/10)
//     }
//     return rev
// }
// console.log(reverseNumber(12345))

//12. Find the product of digits

// function productDigits(n){
//     let product=1
//     while(n>0){
//         let rem=n%10
//         product=product*rem
//         n=parseInt(n/10)
//     }
//     return product
// }
// console.log(productDigits(1234))

//13. Count frequency of a given digit
// function frequency(n,digit){
//     let count=0
//     while(n>0){
//         let rem=n%10
//         if(rem==digit){
//             count++
//         }
//         n=parseInt(n/10)
//     }
//     return count
// }
// console.log(frequency(122333,3))

//14. Find the sum of prime numbers in a range

// function primeSum(start,end){
//     let sum=0
//     for(let n=start;n<=end;n++){
//         let count=0
//         for(let i=1;i<=n;i++){
//             if(n%i==0){
//                 count++
//             }
//         }
//         if(count==2){
//             sum=sum+n
//         }
//     }
//     return sum
// }
// console.log(primeSum(1,20))

//15. Count the number of prime numbers in a range

// function primeCount(start,end){
//     let countPrime=0
//     for(let n=start;n<=end;n++){
//         let count=0
//         for(let i=1;i<=n;i++){
//             if(n%i==0){
//                 count++
//             }
//         }
//         if(count==2){
//             countPrime++
//         }
//     }
//     return countPrime
// }
// console.log(primeCount(1,50))

// 20 Anonymous Function Questions //////////////////

// No Input + No Return
// Q1. Print the multiplication table of 7.
// let table = function () {
//   for (let i = 1; i <= 10; i++) {
//     console.log(7 * i);
//   }
// };

table();
// Q2. Print numbers from 20 to 10 in reverse order.
// let reverse = function () {
//   for (let i = 20; i >= 10; i--) {
//     console.log(i);
//   }
// };

reverse();
// Q3. Print the first 10 multiples of 6.
let multiples = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(6 * i);
  }
};

multiples();
// Q4. Print all numbers between 1 and 50 that are divisible by 4.
let divisible = function () {
  for (let i = 1; i <= 50; i++) {
    if (i % 4 == 0) {
      console.log(i);
    }
  }
};

divisible();
// Q5. Print the squares of numbers from 1 to 10.
let squares = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(i * i);
  }
};

squares();
// 2. Input + No Return
// Q6. Print the digits of a number one by one.
let digits = function (n) {
  while (n > 0) {
    let digit = n % 10;
    console.log(digit);
    n = parseInt(n / 10);
  }
};

digits(58392);

// Q7. Print the factors of a given number.
let factors = function (n) {
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      console.log(i);
    }
  }
};

factors(24);

// Q8. Print the first and last digit of a number.
let firstLast = function (n) {
  let last = n % 10;

  while (n >= 10) {
    n = parseInt(n / 10);
  }

  let first = n;

  console.log("First digit:", first);
  console.log("Last digit:", last);
};

firstLast(58392);

// Q9. Print all digits greater than 5 in a number.
let greaterDigits = function (n) {
  while (n > 0) {
    let digit = n % 10;

    if (digit > 5) {
      console.log(digit);
    }

    n = parseInt(n / 10);
  }
};

greaterDigits(75391628);

// Q10. Print the common factors of two numbers.

let commonFactors = function (a, b) {
  let small = a;

  if (b < small) {
    small = b;
  }

  for (let i = 1; i <= small; i++) {
    if (a % i == 0 && b % i == 0) {
      console.log(i);
    }
  }
};

commonFactors(24, 36);

// 3. No Input + Return
// Q11. Return the number of digits in 987654.
let countDigits = function () {
  let n = 987654;
  let count = 0;

  while (n > 0) {
    count++;
    n = parseInt(n / 10);
  }

  return count;
};

console.log(countDigits());

// Q12. Return the reverse of 2468.
let reverseNumber = function () {
  let n = 2468;
  let reverse = 0;

  while (n > 0) {
    let digit = n % 10;
    reverse = reverse * 10 + digit;
    n = parseInt(n / 10);
  }

  return reverse;
};

console.log(reverseNumber());

// Q13. Return the product of numbers from 1 to 5.
let product = function () {
  let result = 1;

  for (let i = 1; i <= 5; i++) {
    result = result * i;
  }

  return result;
};

console.log(product());

// Q14. Return the middle digit of a three-digit number 583.
let middleDigit = function () {
  let n = 583;

  n = parseInt(n / 10);
  let middle = n % 10;

  return middle;
};

console.log(middleDigit());

// Q15. Return the number of zeros in 10203040.
let zeroCount = function () {
  let n = 10203040;
  let count = 0;

  while (n > 0) {
    let digit = n % 10;

    if (digit == 0) {
      count++;
    }

    n = parseInt(n / 10);
  }

  return count;
};

console.log(zeroCount());

// 4. Input + Return
// Q16. Return the difference between the first and last digit.
let difference = function (n) {
  let last = n % 10;

  while (n >= 10) {
    n = parseInt(n / 10);
  }

  let first = n;

  return first - last;
};

console.log(difference(58392));

// Q17. Return the number formed by removing the last digit.
let removeLast = function (n) {
  return parseInt(n / 10);
};

console.log(removeLast(58392));

// Q18. Return the sum of the first and last digit.
let firstLastSum = function (n) {
  let last = n % 10;

  while (n >= 10) {
    n = parseInt(n / 10);
  }

  let first = n;

  return first + last;
};

console.log(firstLastSum(58392));

// Q19. Return the number of even digits in a number.
// let evenDigitCount = function (n) {
//   let count = 0;
//   while (n > 0) {
//     let digit = n % 10;
//     if (digit % 2 == 0) {
//       count++;
//     }
//     n = parseInt(n / 10);
//   }
//   return count;
// };
// console.log(evenDigitCount(583924));



// Q20. Return the LCM of two numbers.
// let lcm = function (a, b) {
//   let greater = a;
//   if (b > greater) {
//     greater = b;
//   }
//   let result = greater;
//   while (true) {
//     if (result % a == 0 && result % b == 0) {
//       return result;
//     }
//     result++;
//   }
// };

// console.log(lcm(12, 18));

// Part B — 20 Arrow Function Questions
// 1. No Input + No Return
// Q21. Print the numbers from 5 to 50 with a gap of 5.
// let numbers = () => {
//   for (let i = 5; i <= 50; i = i + 5) {
//     console.log(i);
//   }
// };

// numbers();



// Q22. Print the cubes of numbers from 1 to 6.
// let cubes = () => {
//     for(let i = 1; i <= 6; i++) {
//         console.log(i * i * i);
//     }
// };
// cubes();

// Q23. Print numbers between 1 and 100 that end with digit 7.
// let endingSeven = () => {
//     for(let i = 1; i <= 100; i++) {
//         if(i % 10 == 7) {
//             console.log(i);
//         }
//     }
// };
// endingSeven();

// Q24. Print the first 8 powers of 2.
// let powers = () => {
//     let value = 1;
//     for(let i = 1; i <= 8; i++) {
//         value = value * 2;
//         console.log(value);
//     }
// };
// powers();


// Q25. Print numbers from 100 to 50 that are divisible by 6.
// let divisibleBySix = () => {
//     for(let i = 100; i >= 50; i--) {
//         if(i % 6 == 0) {
//             console.log(i);
//         }
//     }
// };
// divisibleBySix();

// 2. Input + No Return
// Q26. Print the digits of a number in reverse order.
// let printDigits = (n) => {
//     while(n > 0) {
//         let digit = n % 10;
//         console.log(digit);
//         n = parseInt(n / 10);
//     }
// };

// printDigits(86421);
// Q27. Print all numbers between 1 and n that are divisible by both 3 and 5.
// let divisible = (n) => {
//     for(let i = 1; i <= n; i++) {
//         if(i % 3 == 0 && i % 5 == 0) {
//             console.log(i);
//         }
//     }
// };

// divisible(100);
// Q28. Print the digits of a number that occur more than once.
// let repeatedDigits = (n) => {
//     for(let d = 0; d <= 9; d++) {
//         let temp = n;
//         let count = 0;
//         while(temp > 0) {
//             let digit = temp % 10;
//             if(digit == d) {
//                 count++;
//             }
//             temp = parseInt(temp / 10);
//         }
//         if(count > 1) {
//             console.log(d);
//         }
//     }
// };

// repeatedDigits(1223345);
// Q29. Print the multiplication table of any given number.
// let table = (n) => {
//     for(let i = 1; i <= 10; i++) {
//         console.log(n + " x " + i + " = " + n * i);
//     }
// };

// table(8);
// Q30. Print all two-digit numbers whose digits are equal.
// let sameDigits = (n) => {
//     for(let i = 10; i <= n; i++) {
//         let last = i % 10;
//         let first = parseInt(i / 10);
//         if(first == last) {
//             console.log(i);
//         }
//     }

// };

// sameDigits(99);
// // 3. No Input + Return
// // Q31. Return the number of multiples of 7 between 1 and 100.
// let countMultiples = () => {
//     let count = 0;
//     for(let i = 1; i <= 100; i++) {
//         if(i % 7 == 0) {
//             count++;
//         }
//     }
//     return count;
// };

// console.log(countMultiples());
// // Q32. Return the sum of numbers from 1 to 20 that are divisible by 3.
// let divisibleSum = () => {
//     let sum = 0;
//     for(let i = 1; i <= 20; i++) {
//         if(i % 3 == 0) {
//             sum = sum + i;
//         }
//     }
//     return sum;
// };

// console.log(divisibleSum());
// // Q33. Return the reverse of 98765.
// let reverse = () => {
//     let n = 98765;
//     let rev = 0;
//     while(n > 0) {
//         let digit = n % 10;
//         rev = rev * 10 + digit;
//         n = parseInt(n / 10);
//     }
//     return rev;
// };

// console.log(reverse());