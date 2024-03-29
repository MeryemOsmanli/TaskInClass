// // function declaration
// function showInDetals(name,position=" employee") {
//     console.log( name + " bu vezifede isleyir:"+ position);
    
// }
// // parametr name position
// showInDetals("Mery"," Front Dev")
// // argument Mery Front Dev
// showInDetals("Esmer")


// // function expression 

// let  multiply= function(params) {
//     console.log(params*120);
// }
// multiply(20)
// multiply(40)

// // block scopp
// // arrow function 
// let  multiply100= (params)=> {
//     console.log(params*100);
// }
// multiply100(20)
// multiply100(40)


// // arrow function

// let  checkIsOddAndEven= (params)=> {
//    if (params%2==0) {
//    return true
    
//    }else{
//     return false
//    }

// }
// const result1= checkIsOddAndEven(22)
// console.log(result1);


// // function expression 
// let  checkIsOddAndEven2= function(params) {
//     if (params%2==0) {
//         return true
     
//     }else{
//         return false
//     }
//  }
//  const result2= checkIsOddAndEven2(33)
//  console.log(result2);


// // decleration function
// function  checkIsOddAndEven3(params) {
    
//     if (params%2==0) {
//         return true
     
//     }else{
//         return false
//     }
//  }

//   const result3 = checkIsOddAndEven3(78)
//   console.log(result3);

// //   ... functionda  rest  operatoru 
// function elements(num,...params) {
//     console.log("bu ilk elementdir " +num);
//     console.log(params);
    
// }
// elements(2,3,4,5,666,67,778899)
// // ... concatda ise spret 



// task1

// 1. Daxil edilən iki arrayi birləşdirən funksiya yazın.
// console.log(concatArray([1,2,3,4,5],[6,7,8,9]))
// Expected Output:
// [1,2,3,4,5,6,7,8,9]

// const arr1=[1,2,3,4,5]
// const arr2=[6,7,8,9]
// function conCat() {
//     return arr1.concat(arr2)
    
// }
// const concation=conCat()
// console.log(concation);


// TASK2
// 2. Bir funksiya yazın 2 parametr qəbul etsin. 2 ci parametr 1ci parametr qədər array-ə yazılsın.
// console.log(array_filled(6, 0));
// Expected Output:
// [0, 0, 0, 0, 0, 0]
// const myArr=[]
// function myFunc(num1,num2) {
    
//     // for (let i = 0; i < num1; i++) {
//     //     return myArr.push(myArr[i]*num2)
//     // }
//     return  myArr.push(num1)
//     // for (let i = 0; i <myArr.length; i++) {
       
        
//     //     myArr.push(num1)
//     // }
    
// }
//  const result= myFunc(6)
// console.log(result);


// task11

// function myFunc(sentence, word)
// {
//      // To break the sentence in words
//     let text = sentence.split(" ");
  
//     // To temporarily store each individual word
//     for ( let i=0;i<text.length;i++)
//     {
  
//         // Comparing the current word
//         // with the word to be searched
//         if (text[i] == (word) )
//         {
//             return true;
//         }
//     }
//     return false;
// }
 
// // Driver code
// let text = "Geeks for Geeks";
// let  word = "Geeks";
 
// if (myFunc(text, word))
//        console.log("yes");
//     else
//         console.log("No");


// let text =" hjgdja abkbgkcf kbcfkab cfka bfckahbcfkbakhb"
// function myFunc() {

//     for (let i = 0; i < text.length; i++) {
        
        
//     }
// }


// ____________________________________

// task9

// const text = "code salam hello code"

// const word=text.split(" ")

// for (let i = 0; i < word.length; i++) {

// word[i] = word[i][0].toUpperCase() + word[i].slice(1);


    
//  }
//  let nexttext=word.join(" ")
// console.log(nexttext);
// _________________________________________________
// const arr=[1, 2, 2, 3, 4, 4, 5]
function removeDuplicates(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
      if (!newArr.includes(arr[i])) {
        newArr.push(arr[i]);
      }
    }
    return newArr;
  }
  console.log(removeDuplicates([1, 2, 2,6, 3, 4, 4, 5,6,6]));
