// BREAK

// 1.Find the first even digit from the left in 753914286.

// let n=753914286
// while(n>0){
//     let ld=n%10
//     if(ld%2==0){
//         console.log("First even digit:",ld);
//         break
//     }
//     n=parseInt(n/10)
// }


// 2.Find the first prime number between 50 and 100.


// for(let i=50;i<=100;i++){
//     let count=0
//     for(let j=1;j<=i;j++){
//         if(i%j==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log("First prime:",i)
//         break
//     }
// }


// 3.Find the first number whose digit sum is 10.
// for(let i=1;i<=100;i++){
//     let n=i
//     let sum =0
//     while(n>0){
//         let ld=n%10
//         sum=sum+ld
//         n=parseInt(n/10)
//     }
//     if(sum==10){
//         console.log("First number:",i)
//         break
//     }
// }

// 4.Find the first number with exactly 3 divisors between 1 and 100

// for(let n=1;n<=100;n++){
//     let count=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(count==3){
//         console.log("First number:",n)
//         break
//     }
// }


// 5.Stop when 3 consecutive odd numbers occur between 1 and 50.

// let count=0
// for(let i=1;i<=50;i++){
//     if(i%2!=0){
//         count++
//         console.log(i)
//     }
//     if(count==3){
//         console.log("Stopped at:",i)
//         break
//     }
// }


// 6.Find the first palindrome between 10 and 500.

// for(let i=10;i<=500;i++){
//     let n=i
//     let rev=0
//     while(n>0){
//         let ld=n%10
//         rev=rev*10+ld
//         n=parseInt(n/10)
//     }
//     if(rev==i){
//         console.log("the first palindrome is ",i)
//         break
//     }
// }


// 7.Find the first perfect number between 1 and 1000.

// for(let n=1;n<=1000;n++){
//     let sum=0
//     for(let i=1;i<n;i++){
//         if(n%i==0){
//             sum=sum+i
//         }
//     }
//     if(sum==n){
//         console.log("First perfect number:",n)
//         break
//     }
// }

// 8.Print the first 5 even numbers.
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%2==0){
//         console.log(i)
//         count++
//     }
//     if(count==5){
//         console.log("these are the first 5 even numbers")
//         break
//     }
// }


// 9.Print the first 5 prime numbers.
// let Prime=0
// for(let n=1;n<=100;n++){
//     let count=0
//     for(let i=1;i<=n;i++){
//         if(n%i==0){
//             count++
//         }
//     }
//     if(count==2){
//         console.log(n)
//         Prime++
//     }
//     if(Prime==5){
//         break
//     }
// }



// 10.Print the first 3 numbers divisible by 7.
// let count=0
// for(let i=1;i<=100;i++){
//     if(i%7==0){
//         console.log(i)
//         count++
//     }
//     if(count==3){
//         break
//     }
// }



// CONTINUE

// 1.Print 1–30, skipping even numbers.
// for(let i=1;i<=30;i++){
//     if(i%2==0){
//         continue
//     }
//     console.log(i)
// }


// 2.Print 1–40, skipping multiples of 4.

// for(let i=1;i<=40;i++){
//     if(i%4==0){
//         continue
//     }
//     console.log(i)
// }


// 3.Print 1–30, skipping numbers from 10–20.

// for(let i=1;i<=30;i++){
//      if(i>=10 && i<=20){
//         continue
//     }
//     console.log(i)
// }


// 4.Print 1–50, skipping multiples of 3.
// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue
//     }
//     console.log(i)
// }


// 5.Extract 502304, skipping digit 0.

// let n=502304
// while(n>0){
//     let ld=n%10
//     if(ld==0){
//         n=parseInt(n/10)
//         continue
//     }
//     console.log(ld)
//     n=parseInt(n/10)
// }

// 6.Extract 5832461, printing only even digits.

// let n=5832461
// while(n>0){
//     let ld=n%10
//     if(ld%2!=0){
//         n=parseInt(n/10)
//         continue
//     }
//     console.log(ld)
//     n=parseInt(n/10)
// }


// 7.Extract 1432578, skipping odd digits.
// let n=1432578
// while(n>0){
//     let ld=n%10
//     if(ld%2!=0){
//         n=parseInt(n/10)
//         continue
//     }
//     console.log(ld)
//     n=parseInt(n/10)
// }


// 8. Print 1–200, skipping multiples of 3 or 5

// for(let i=1;i<=200;i++){
//     if(i%3==0 || i%5==0){
//         continue
//     }
//     console.log(i)
// }

// 9.Print 1–500, skipping numbers with odd digit sum.
// for(let i=1;i<=500;i++){
//     let n=i
//     let sum=0
//     while(n>0){
//         let rem=n%10
//         sum=sum+rem
//         n=parseInt(n/10)
//     }
//     if(sum%2!=0){
//         continue
//     }
//     console.log(i)
// }

// 10.Print 1–500, skipping numbers containing digit 0.

// for(let i=1;i<=500;i++){
//     let n=i
//     let findzero=false
//     while(n>0){
//         let ld=n%10
//         if(ld==0){
//             findzero=true
//             break
//         }
//         n=parseInt(n/10)
//     }
//     if(findzero==true){
//         continue
//     }
//     console.log(i)
// }


// BREAK + CONTINUE

// 1.Print 1–50, skip multiples of 3, stop at 40.

// for(let i=1;i<=50;i++){
//     if(i%3==0){
//         continue
//     }
//     if(i==40){
//         break
//     }
//     console.log(i)
// }

// Print odd numbers, skip evens, stop at the first multiple of 7.
// for(let i=1;i<=50;i++){
//     if(i%7==0){
//         break
//     }
//     if(i%2==0){
//         continue
//     }
//     console.log(i)
// }


// 3.Extract 5830421, skip odd digits, stop at 0.

// let n=5830421
// while(n>0){
//     let rem=n%10
//     n=parseInt(n/10)
//     if(rem==0){
//         break
//     }
//     if(rem%2!=0){
//         continue
//     }
//     console.log(rem)
// }


// 4.Extract 8325147, print digits until 5.

// let n=8325147
// while(n>0){
//     let rem=n%10
//     n=parseInt(n/10)
//     if(rem==5){
//         break
//     }
//     console.log(rem)
// }

// 5.Search from 51, skip non-multiples of 9, stop at the first multiple of 9.

// let i=51
// while(i=>51){
//     if(i%9!=0){
//         i++
//         continue
//     }
//    if(i%9==0){
//     console.log(i)
//     break
//    }
//     i++
// }