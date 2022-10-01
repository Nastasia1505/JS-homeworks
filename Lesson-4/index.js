// //Exercise 1
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i<arr.length; i++){
//    document.write (arr [i
//    ]+ "<br>");
// }

//  //Exercise 2

//  let arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

//  for (let i = 0; i<arr.length; i++){
//  if (arr [i] >-10 && arr [i] <-3){
// document.write(arr [i]);}
//  }

// // Exercise 3

// let arr = [];
// result = 0;
// for (let j = 23; j <=57; j++) {
//     arr.push(j);
//     result += j
// }

// // for (let i = 0; i <arr.length; i++){                   //сократили эту запись
// //         result += arr[i]
// //  }
// console.log(arr)
// console.log(result)

// // WHILE
// let arr2 = [];
// result2 = 0;
// let y = 23;
// while (y<=57){

//     arr2.push(y);
//     result2 += y
//     y++;

// }
// console.log(arr2)
// console.log(result2)

// // Exercise 4

// let arr = ['10', '20', '30', '50', '235', '3000']
// for (let i = 0; i < arr.length; i++) {
//     let num = arr[i];
//     let char = num[0];
//     if (char == 1 || char == 2 || char == 5) {
//       document.write(num+'<br>');
//     }
//   }

// //Exercise 5

// let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
// for (let i =0; i<arr.length; i++){
// if (arr [i] == 'Saturday' || arr [i] == 'Sunday'){
//     document.write(arr[i].bold()+'<br>')
// } else{
//     document.write(arr[i]+'<br>')
// }
// }

// //Exercise 6
// let arr = [1, 2, 3, 4, 5, 6];
// arr.push (95);
// console.log(arr);
// let i = arr.length;
// console.log(arr[i-1])

// //Exercise 7
// let arr = [];
// let z,
// n= 0;
// while ((z = prompt ('Введите число')) !== '' && z !== '0'){
//     n =+z;
// arr.push(n);
// }
// console.log(arr);
// arr.sort(function(a,b){
//     return a-b});
//     console.log(arr);


// //Exercise 8
// let arr = [12, false, 'Текст', 4, 2, -5, 0];

// console.log(arr.reverse());

// //Exercise 9
// let arr = [5, 9, 21, , , 9, 78, , , , 6];
// num = 0;
// for (let i = 0; i < arr.length; i++) {

//     if (arr[i] ==null) {
//         num++
//     }
// }
// console.log(num)

//Exercise 10

// let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
// let arr1 = [];
// let sum =0;
//     n = 0;

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] = 0 && n !==2 || sum !==0) {
//         n++
//         i++
//         sum += arr[i];
        
//     }
    
//     n = 0;
// }
// console.log(sum);


let arr = [1, 8, 0, 13, 76, 8, 7, 0, 22, 0, 2, 3, 2];
let sum = 0;
n = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] = 0){
    for ( let j=0;j>0 ;j++){
sum+=j

    }
  }
}
console.log(sum)


// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] = 0 && n !== 1 && sum !== 0) {
//     n++;
    
//     if (arr[i+1] !== 0) {
//       sum += arr[i+1];
//      i++
//     }
   
//   }
//   n = 0;
// }
// console.log(sum);