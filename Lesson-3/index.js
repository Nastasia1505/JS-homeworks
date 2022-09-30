// Exercise 1
for (let i = 1; i <= 50; i++ ){
    console.log (i)
}
for (let j = 35; j >=8; j--){
    console.log (j)
}
// Exercise 2
let x = 90;
while (x>11){
    x--;
    console.log(x)
}
// Exercise 3
let sum = 0
for (let y = 0; y<=100; y++){
sum = sum+y;
}
console.log(sum)
// Exercise 4
let s = 0
for (let y = 0; y<=5; y++){
s = s+y;
}
console.log(s)
// Exercise 5
for (let h = 8; h <=56; h=h+2){
    console.log (h)
}
let h = 6;
 while (h<=54){
    h=h+2;
   console.log(h)
 }

// Exercise 6
let r = 0;
for (let m = 1; m < 10; m++) {
    for (let p = 1; p < 10; p++) {
        r = m * p;
        console.log(m + '*' + p + '=' +r)
    }
}


// Exercise 7
num = 0;
for (let n = 1000; n > 50; ) {
  num += 1;
  n /= 2;
  if (n < 50) {
    console.log(n);
    console.log(num);
  }
}

// Exercise 8
let e = 0,
    o = 0,
    ch;

while ((ch = prompt("Введите число", 0)) !== "0" && ch != null) {
   

    ++e;
    o += +ch; // Перед ch надо для числа ставить плюс
    // if (ch == " "){
    //     alert("Только числа")
        
    // }
   
}

alert("Чисел введено: " + e + "\n Сумма чисел: " + o
    + "\n Среднее арифметическое: " + (o / e));
    
// Exercise 9
let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57'
let cur='', min, max;
for (let i = 0; i < str.length; i++) {
  cur += str[i];
  if (+str[i] && !+str[i+1]) {
    if (typeof min !== 'number' || cur < +min) min = +cur;
    if (typeof max !== 'number' || cur > +max) max = +cur;
    cur = '';
  }
}
console.log('Min:', min, 'Max:', max)

// Exercise 10
let n = "12357821";
let array = n.split("");
console.log(array);
let z = 0;
for (let i = 0; i < n.length; i++) {
  z = +i + 1;
}
console.log(z);

function sum(array) {
  let s = 0;
  for (i = 0; i < array.length; i++) {
    s += array[i];
  }

  return s;
}
console.log(s);