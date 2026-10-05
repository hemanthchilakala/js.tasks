// 20 Anonymous Function Questions //////////////////

// No Input + No Return
// Q1. Print the multiplication table of 7.
let table = function () {
  for (let i = 1; i <= 10; i++) {
    console.log(7 * i);
  }
};

table();
// Q2. Print numbers from 20 to 10 in reverse order.
let reverse = function () {
  for (let i = 20; i >= 10; i--) {
    console.log(i);
  }
};

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
let evenDigitCount = function (n) {
  let count = 0;

  while (n > 0) {
    let digit = n % 10;

    if (digit % 2 == 0) {
      count++;
    }

    n = parseInt(n / 10);
  }

  return count;
};

console.log(evenDigitCount(583924));

// Q20. Return the LCM of two numbers.
let lcm = function (a, b) {
  let greater = a;

  if (b > greater) {
    greater = b;
  }

  let result = greater;

  while (true) {
    if (result % a == 0 && result % b == 0) {
      return result;
    }

    result++;
  }
};

console.log(lcm(12, 18));

// Part B — 20 Arrow Function Questions
// 1. No Input + No Return
// Q21. Print the numbers from 5 to 50 with a gap of 5.
let numbers = () => {
  for (let i = 5; i <= 50; i = i + 5) {
    console.log(i);
  }
};

numbers();



// Q22. Print the cubes of numbers from 1 to 6.
let cubes = () => {

    for(let i = 1; i <= 6; i++) {
        console.log(i * i * i);
    }

};

cubes();
// Q23. Print numbers between 1 and 100 that end with digit 7.
let endingSeven = () => {

    for(let i = 1; i <= 100; i++) {

        if(i % 10 == 7) {
            console.log(i);
        }

    }

};

endingSeven();
// Q24. Print the first 8 powers of 2.
let powers = () => {

    let value = 1;

    for(let i = 1; i <= 8; i++) {
        value = value * 2;
        console.log(value);
    }

};

powers();
// Q25. Print numbers from 100 to 50 that are divisible by 6.
let divisibleBySix = () => {

    for(let i = 100; i >= 50; i--) {

        if(i % 6 == 0) {
            console.log(i);
        }

    }

};

divisibleBySix();
// 2. Input + No Return
// Q26. Print the digits of a number in reverse order.
let printDigits = (n) => {

    while(n > 0) {

        let digit = n % 10;
        console.log(digit);

        n = parseInt(n / 10);
    }

};

printDigits(86421);
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
let repeatedDigits = (n) => {

    for(let d = 0; d <= 9; d++) {

        let temp = n;
        let count = 0;

        while(temp > 0) {

            let digit = temp % 10;

            if(digit == d) {
                count++;
            }

            temp = parseInt(temp / 10);
        }

        if(count > 1) {
            console.log(d);
        }
    }
};

repeatedDigits(1223345);
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
// Q34. Return the number of digits greater than 5 in 9576281.
let count = () => {

    let n = 9576281;
    let count = 0;

    while(n > 0) {

        let digit = n % 10;

        if(digit > 5) {
            count++;
        }

        n = parseInt(n / 10);
    }

    return count;
};

console.log(count());
// Q35. Return the sum of the first five multiples of 8.
let multipleSum = () => {

    let sum = 0;

    for(let i = 1; i <= 5; i++) {
        sum = sum + (8 * i);
    }

    return sum;
};

console.log(multipleSum());
// 4. Input + Return
// Q36. Return the second digit from the right of a number.
let secondDigit = (n) => {

    n = parseInt(n / 10);

    return n % 10;
};

console.log(secondDigit(58392));
// Q37. Return the number of digits that are divisible by 3.
let countDivisibleDigits = (n) => {

    let count = 0;

    while(n > 0) {

        let digit = n % 10;

        if(digit % 3 == 0) {
            count++;
        }

        n = parseInt(n / 10);
    }

    return count;
};

console.log(countDivisibleDigits(9364218));
// Q38. Return the product of all non-zero digits.
let digitProduct = (n) => {

    let product = 1;

    while(n > 0) {

        let digit = n % 10;

        if(digit != 0) {
            product = product * digit;
        }

        n = parseInt(n / 10);
    }

    return product;
};

console.log(digitProduct(20304));