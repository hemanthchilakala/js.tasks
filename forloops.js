// -------------- For loop ----- it is control flow statement used to execute a block of code repeatdely base on the specific condition -------------

// ---------- print numbers from 1 to 10----------
// for (let i = 1;i<=5;i++){
//     console.log(i);
// }


// ----------- print numbers from 10 to 1------------
// for (let i = 10;i>=1;i--){
//     console.log(i);
// }


// ------------------------ Even numbers --------------
// for(let i = 1;i<=10;i++){
//     if(i%2==0){
//         console.log(i);
//     }
// }

// ---- count ------
// count = 0
// for(let i =1;i<=5;i++){
//     if(i%2==0){
//         count+= 1
//     }
// }
// console.log(count);


// --- second approach ----
// for(let i = 2;i <=20;i += 2){
//     console.log(i);
    
// }


// -------------------- odd numbers -------------------
// for(let i = 1;i<=10;i++){
//     if(i%2!=0){
//         console.log(i);
//     }
// }

// --- second approach ---
// for(let i = 1;i <=20;i += 2){
//     console.log(i);
// }

// ----------count --------
// count = 0
// for(let i =1;i<=5;i++){
//     if(i%2!=0){
//         count+= 1
//     }
// }
// console.log(count);



// -------------- multiplication table --------------
// let n = 10
// for(let i = 1;i<=10;i++){
//     console.log(n+"x"+i+"="+(n * i))
// }


// --- second approach --- using template literals---
// let n = 5;

// for(let i =1;i<=10;i++){
//     console.log(`${n} X ${i} = ${n*i}`);
// }


// ----------------- Multiples of 10 -------------
// for(let i =1;i<=10;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }


// ----------------- sum of the numbers from 1 to 10 --------------
// sum = 0
// for(let i = 1;i<=10;i++){
//     sum += i
// }
// console.log(sum);


// ---------- sum of even numbers --------------
// sum = 0
// for(let i = 1;i<=10;i++){
//     if(i%2==0){
//         sum += i
//     }
// }
// console.log(sum);


// --------------- sum of odd numbers ----------------
// sum = 0
// for(let i = 1;i<=50;i++){
//     if(i%2!=0){
//         sum += i
//     }
// }
// console.log(sum);



// ------------------- count the numbers divisible by 5 --------------
// count = 0

// for(let i =1;i<=20;i++){
//     if(i%5==0){
//         count += 1
//     }
// }
// console.log(count);



// ------------------- count the numbers divisible by 3 and 5 --------------
// count = 0

// for(let i =1;i<=20;i++){
//     if(i%5==0 && i%3==0){
//         count += 1
//     }
// }
// console.log(count);


// -------------------------------- squares  ------------------
// for(let i =1;i<=5;i++){
//     console.log(i*i);
// }


// --- sum of squares --
// sum = 0
// for(let i=0;i<=5;i++){
//     sum += i*i
// }
// console.log(sum);


// ----- count the squares ----
// count = 0
// for(let i = 1;i<=5;i++){
//     count += 1
// }
// console.log(count);


// --------------------------------- cubes ---------------------------
// for(i=1;i<=10;i++){
//     console.log(i*i*i);
// }

// ------- count --------
// count = 0
// for(let i =1;i<=5;i++){
//     count+= 1
// }
// console.log(count);

// --------- sum --------
// sum = 0
// for(let i=1;i<=5;i++){
//     sum += i
// }
// console.log(sum);


// ---------------------------- factors of number -----------------
// n = 16
// for(let i = 1; i<=10;i++){
//     if(n%i==0){
//         console.log(i);
//     }
// }

// ---------- count ---------
// n = 16
// count = 0
// for(let i = 1; i<=n;i++){
//     if(n%i==0){
//         count ++
//     }
// }
// console.log("Count of Factors of 16 :",count);


// -------sum ----
// n = 16
// sum = 0
// for(let i = 1; i<=10;i++){
//     if(n%i==0){
//         sum += i
//     }
// }
// console.log("Sum of Factors of 16 :",sum);



// ---------------------------------- prime check ------------------
// let n = 89;
// let count = 0
// for(let i = 1;i<=n;i++){
//     if(n%i==0){
//         count += 1
//     }
// }
// if(count==2){
//     console.log(n ," is Prime number");
// }else{
//     console.log(n," is Not prime number");
// }


//  ----------- print primes ----------
// for(let i =1;i<=20;i++){
//     let count = 0

//     for(let j = 1;j<=i;j++){
//         if(i%j==0){
//             count ++;
//         }
//     }
//     if(count==2){
//         console.log(i);
        
//     }
// }



// ---------------- star pattern --------------
// for(let i = 1;i<=5;i++){
//     let row = " ";
//     for(let j =1;j<=i;j++){
//         row += "*"
//     }
//     console.log(row);
// }



// ----------------------- factorial of a number -------------------
// let n = 5
// let fact = 1
// for(let i =1;i<=n;i++){
//     fact = fact*i
// }
// console.log(fact);


// ----------- product of a number -----------
// let n = 10
// let product = 1
// for(let i =1;i<=n;i++){
//     product = product*i
// }
// console.log(product);



// -------- display odd number in range of 10 to 5 ---------
// for(let i =10;i>=5;i--){
//     if(i%2!=0){
//         console.log(i);
//     }
// }


// ---- ---- divisible by 5 -------
// for(let i = 10 ; i<=15;i++){
//     if(i%5==0){
//         console.log(i);
//     }
// }



// ----------------- perfect number -------
// let  n = 16
// sum = 0

// for(let i =1;i<=n;i++){
//     if(n%i==0){
//         sum += i
//     }
// }
// if(sum==n){
//     console.log(n,"is a  perfect number");
// }else{
//     console.log(n,"is a  perfect number");
// }