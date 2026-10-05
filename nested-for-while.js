// 1. Sum of Prime Numbers
// Find the sum of all prime numbers between 20 and 150

let sum = 0;

for (let i = 20; i <= 150; i++) {
    let count = 0;

    for (let j = 1; j <= i; j++) {
        if (i % j == 0) {
            count++;
        }
    }

    if (count == 2) {
        sum = sum + i;
    }
}

console.log("Sum of Prime Numbers =", sum);


// 2. Average of Perfect Numbers
// Find the average of all perfect numbers between 1 and 1000

let total = 0;
let countPerfect = 0;

for (let i = 1; i <= 1000; i++) {
    let sum = 0;

    for (let j = 1; j < i; j++) {
        if (i % j == 0) {
            sum = sum + j;
        }
    }

    if (sum == i) {
        total = total + i;
        countPerfect++;
    }
}

let average = total / countPerfect;

console.log("Average of Perfect Numbers =", average);


// 3. Leap Years in a Range
// Print all leap years between 1900 and 2026

for (let year = 1900; year <= 2026; year++) {

    if (year % 400 == 0 || (year % 4 == 0 && year % 100 != 0)) {
        console.log(year);
    }
}


// 4. Palindrome Numbers
// Print all palindrome numbers between 100 and 500

for (let i = 100; i <= 500; i++) {

    let n = i;
    let reverse = 0;

    while (n > 0) {
        let digit = n % 10;
        reverse = reverse * 10 + digit;
        n = Math.floor(n / 10);
    }

    if (i == reverse) {
        console.log(i);
    }
}


// 5. Digit Sum = 10
// Print numbers between 120 and 850 whose digit sum is exactly 10

for (let i = 120; i <= 850; i++) {

    let n = i;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit;
        n = Math.floor(n / 10);
    }

    if (sum == 10) {
        console.log(i);
    }
}


// 6. Pairs with Target Sum
// Print pairs between 1 and 50 whose sum is 30
// Each pair only once

for (let a = 1; a <= 50; a++) {

    for (let b = a + 1; b <= 50; b++) {

        if (a + b == 30) {
            console.log("(" + a + ", " + b + ")");
        }
    }
}


// 7. Exactly 3 Factors
// Print numbers between 10 and 300 that have exactly 3 factors

for (let i = 10; i <= 300; i++) {

    let count = 0;

    for (let j = 1; j <= i; j++) {

        if (i % j == 0) {
            count++;
        }
    }

    if (count == 3) {
        console.log(i);
    }
}


// 8. Prime Factors
// Print the prime factors of every number between 20 and 50

for (let i = 20; i <= 50; i++) {

    console.log("Number:", i);

    for (let j = 2; j <= i; j++) {

        if (i % j == 0) {

            let count = 0;

            for (let k = 1; k <= j; k++) {

                if (j % k == 0) {
                    count++;
                }
            }

            if (count == 2) {
                console.log(j);
            }
        }
    }
}


// 9. Armstrong Numbers
// Print all Armstrong numbers between 100 and 999

for (let i = 100; i <= 999; i++) {

    let n = i;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        sum = sum + digit * digit * digit;
        n = Math.floor(n / 10);
    }

    if (sum == i) {
        console.log(i);
    }
}


// 10. Maximum Factors
// Find the number between 50 and 150
// that has the maximum number of factors

// let maxFactors = 0;
// let maxNumber = 0;

// for (let i = 50; i <= 150; i++) {

//     let count = 0;

//     for (let j = 1; j <= i; j++) {

//         if (i % j == 0) {
//             count++;
//         }
//     }

//     if (count > maxFactors) {
//         maxFactors = count;
//         maxNumber = i;
//     }
// }

// console.log("Number with Maximum Factors =", maxNumber);
// console.log("Maximum Factors =", maxFactors);