//Exercise 1
function h1(a, b, c) {

    console.log(a - b / c)
}
h1(12, 2, 3)
//Exercise 2
function h2(a) {

    console.log(a**2 , a**3)
}
h2(2)
//Exercise 3
function min(a,b) {
   if (a<b){
    console.log(a)
   } else{ 
    console.log(b)
   }
}
function max(a,b) {
    if (a>b){
        console.log(a)
       } else{ 
        console.log(b)
       }
}
min(2,4)
max(5,9)
//Exercise 4
function createarr (){
    let arr = [];
    let a,
    b,
    n=0;
    while((a=prompt('Введите первое число')) !==''){
        
        n=+a;
        arr.push(n);
        b=prompt('Введите последнее число');
        if (a>b){
            break;
        }
       
    }
    console.log(arr)
    // for (let i = 0; i<=length; i++){
    //     arr.push(i);
    // }
    
    // 
}
// createarr(5);

    
//Exercise 5

function isEven (a){
    let b= a%2;

    if (b==0){
        console.log(true);
    } else {
        console.log(false);
    }
}

isEven(7)

//Exercise 6


//Exercise 7

//Exercise 8

//Exercise 9

//Exercise 10

//Exercise 11

//Exercise 12

//Exercise 13