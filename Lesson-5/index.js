// //Exercise 1
// function h1(a, b, c) {

//     console.log(a - b / c)
// }
// h1(12, 2, 3)
// //Exercise 2
// function h2(a) {

//     console.log(a ** 2, a ** 3)
// }
// h2(2)
// //Exercise 3
// function min(a, b) {
//     if (a < b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// }
// function max(a, b) {
//     if (a > b) {
//         console.log(a)
//     } else {
//         console.log(b)
//     }
// }
// min(2, 4)
// max(5, 9)
// //Exercise 4

// // function createarr (){
// //     let arr = [];
// //     let a =prompt('Введите первое число'),
// //     b = prompt ('Введите второе число'),
// //     n=0;
// //  for (let i=a; i<=b; i++){
// //     arr.push(i);
// //  }  
// // } 
// // console.log(arr)


// // createarr();



// //Exercise 5
// let n = 0;
// function isEven(a) {
//     let b = a % 2;

//     if (b == 0) {
//         console.log(true);
//         n = 1;
//     } else {
//         console.log(false);
//         n = 0;
//     }
// }

// // isEven(7)

// //Exercise 6
// let array = [2, 2, 3, 4, 5, 6, 7, 8, 9];


// function createArray() {
//     let a = 0;
//     let arr = [];
//     for (let i = 0; i < array.length; i++) {
//         a = array[i];
//         isEven(a);
//         if (n==1){
//             arr.push(a);
//         } else{
//             continue;
//         }
//     // СПОСОБ №2
//     // a = array[i];
//     // b = a % 2;
//     // if (b == 0) {
//     //   arr.push(a);
//     // } else {
//     //   continue;
//     // }
//     }
//     console.log(arr);
// }
// createArray();
//Exercise 7
// let height = +prompt('Введите высоту треугольника'),
//   j,
//   str = [];
// function pyramid() {
//   for (i = 0; i <= height; i++) {
//     for (j = 0; j < height + 1; j++) {
//       if (j <= height - i) {
//       } else {
//         str.push(i);
//       }
//     }
//     console.log(str.join(""));
//     str = [];
//   }
// }
// pyramid();
// let height = +prompt('Введите высоту'),
// j,
// str =[];
// function pyramid (){
//     for (i= 0; i <= height; i++){
//         for (j = 0; j < height + 1; j++){
//             if (j <= height - i){
//             } else{
//                 str.push(i);
//             }
//         }
//         console.log(str.join(""));
//         srt = [];
//     }
   
// }
// pyramid();

//Exercise 8
let height = +prompt(`Введите высоту треугольника`),
j,
str = [];
function triangle (){
for (i = 0; i <= height; i++) {

for (j = 0; j < height + i; j++) {

if (j <= height - i) {
str.push(' ');
} else {
str.push('*');
}
}
console.log(str.join(''));
str = [];
}
}
triangle();

// let height = +prompt(`Введите высоту треугольника`),
// j,
// str = [];
// function triangle (){
// for (i = 0; i <= height; i++) {

// for (j = 0; j < height - i; j++) {

// if (j <= height + i) {
//     str.push('*');

// } else {
//     str.push(' ');
// }
// }
// console.log(str.join(''));
// str = [];
// }
// }
// triangle();

//Exercise 9

//Exercise 10

//Exercise 11

//Exercise 12
//Exercise 13
