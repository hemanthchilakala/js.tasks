// ------ while loop --- In js while loop repeatedly executes a block of code as long as condition is true ---------

// ------------- print the number from 1 to 10 ----------
// let i  = 3
// while(i<=12){
//     if(i%3==0)
//     console.log(i);
//     i++
// }


// -------- number in reverse ordr ---------
// let n =10;
// while(n>=5){
//     console.log(n);
//     n -= 1
// }


// --- 
// let k = 120

// while(k>=60){
//     console.log(k);
//     k -= 20
// }


// ------- even numbers -----
// let i = 1;
// while(i<=10){
//     if(i%2==0){
//         console.log(i);
//     }
//     i++
// }


// -------- odd numbers --------
// let i = 1;
// while(i<=10){
//     if(i%2!=0){
//         console.log(i);
//     }
//     i++
// }


// --------- print the each digit in the number -----------

// let n = 342

// while(n!=0){
//     let Id = n %10
//     console.log("Id = ",Id);

//     n = parseInt(n/10);
//     // console.log("n = ",n);
// }


// ---------- count the digits in number ------------
// let n = 345678
// count = 0
// while(n!=0){
//     let Id = n %10
//     count  += 1
//     n = parseInt(n/10);
//     // console.log("n = ",n);

    
// }
// console.log(count);



// -----------sum of the digits -------------
// let n = 345678
// sum  = 0
// while(n!=0){
//     let ld = n %10
//     sum += ld
//     n = parseInt(n/10);
//     // console.log("n = ",n);

    
// }
// console.log(sum);


// ------------- rev the number ------------
// let n = 567

// let rev  = 0;
// while(n!=0){
//     let ld = n%10;
//     rev = rev *10 + ld
//     n = parseInt(n/10)
// }
// console.log(rev);



// ------------- palindrome number -----------
// let n = 2002
// let original= n;
// let rev  = 0;

// while(n!=0){
//     let ld = n%10;
//     rev = rev *10 + ld
//     n = parseInt(n/10)
// }
// if(rev == original){
//     console.log("palindrome");
// }else{
//     console.log('Not palindrome');
// }



// ----------- display even digits in the number ----------
// let n = 256

// while(n!=0){
//     ld = n %10

//     if(ld%2==0){
//         console.log(ld);
//     }
//     n = parseInt(n/10)
// }


// ---------------- odd digits in the number --------------
// let n = 25671
// let count = 0

// while(n!=0){
//     ld = n %10

//     if(ld%2!=0){
//         count += 1
//     }
//     n = parseInt(n/10)
// }
// console.log("Count of Odd digits are :",count);



// ------------ largest digit in the number -----------
// let n = 3987
// let smallest = 10

// while(n!=0){
//     ld = n %10

//     if(ld < smallest){
//         smallest = ld
//     }
//     n = parseInt(n/10)
// }
// console.log(smallest);


//display the digits in given number in reverse order
// let n = 12345
// while(n!=0){
//     let id = n%10
//     console.log("id=", id);

//     n = parseInt(n/10)
    // console.log"(n=", n); 
    
// }
// count = 0
// let n = 12345
// while(n!=0){
//     let id = n%10
//     count = count + 1
//     n = parseInt(n/10)
// }
// console.log(count);


//reverse order
// let n = 54321
// let reverse = 0
// while(n!=0){
//     let ld = n % 10
//     reverse = reverse * 10 + ld
//     n = parseInt(n/10)
// }
// console.log("reverse of given number=", reverse);


// let n = 256
// while(n!=0){
//     let id = n % 10
//     if(id % 2==0){
//         console.log(id);
        
//     }
//     n = parseInt(n/10)
// }


// let n = 1234567890
// max = 0
// while(n!=0){
//     let ld = n % 10
//     if(ld>max){
//         max = ld
        
//     }
//     n = parseInt(n/10)
// }
// console.log(max);


// let n = 1234567890
// min = 9
// while(n!=0){
//     let ld = n % 10
//     if(ld<min){
//         min = ld
        
//     }
//     n = parseInt(n/10)
// }
// console.log(min);