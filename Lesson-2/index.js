// Exercise 1
// let fname, age, city, phone, email, company;

// fname= prompt('Меня зовут', 'Имя');
// age =prompt('Введите Ваш возраст', 'Возраст');
// city =prompt('Введите город проживания', 'Город');
// phone = prompt('Введите Ваш телефон', 'Телефон');
// email =prompt('Введите email', 'Email');
// company = prompt('В какой организации Вы работаете?', 'Компания');
// document.write('Меня зовут ', fname,
// ' Мне ', age, ' лет ', 
//  ' Я проживаю в городе ', city, ' и работаю в компании ', company, 
//   ' Мои контактные данные: ', phone, email);
// // Exercise 2
// let year = 2022 - age;
// document.write (fname, ' родился(лась) в ', year, ' году ');

// Exercise 3
let str='145621'
if (str[0]+str[1]+str[2]==str[3]+str[4]+str[5]){
    console.log('Да');
}
else{
    console.log('Нет');
}
//Exercise 4
let a = 1;
if (a > 0) {
    document.write('Верно');

}
else {
    document.write('Неверно');
};

// Exercise 5
a = 10;
let b = 2;
console.log(a + b, a - b, a * b, a / b)
if ((a + b) > 1) {
    console.log((a + b) * (a + b))
}
// Exercise 6
if (a > 2 && a < 11 || b >= 6 && b < 14) {
    console.log('Верно');
}
else {
    console.log('Неверно');
}

// Exercise 7
let n = Math.random() * (59-0)+0;
if (n >= 0 && n <= 15) {
    console.log('Первая четверть часа')
}
if (n >= 16 && n <= 30) {
    console.log('Вторая четверть часа')
}
if (n >= 31 && n <= 45) {
    console.log('Третья четверть часа')
}
if (n >= 46 && n <= 60) {
    console.log('Четвертая четверть часа')
}

// Exercise 8
let day = Math.random() * (31-1)+1;
if (day >= 0 && day <= 10) {
    console.log('Первая декада месяца')
}
if (day >= 11 && day <= 20) {
    console.log('Вторая декада месяца')
}
if (day >= 21 && day <= 31) {
    console.log('Третья декада месяца')
}
// Exercise 9
let d = Math.random() * (365-1)+1;
let years = d/365;
let month = d/31;
let weeks = d / 7;
let hours = d * 24;
let minuts = hours * 60;
let seconds = minuts * 60;
if (d < 365) {
    console.log('Меньше года')
}
if (d < 31) {
    console.log('Меньше месяца')
}
if (d < 7) {
    console.log('Меньше недели')
}
console.log(d, years, month, weeks, hours, minuts, seconds);


// Exercise 10
switch (true) {
    case d >= 0 && d <= 59 || d >= 334:
        console.log('Зима');
        if (d > 0 && d <= 31)
            console.log('Январь');
        if (d >= 32 && d <= 60)
            console.log('Февраль');
        if (d >= 334 && d <= 365)
            console.log('Декабрь');
            break;
    case d >= 61 && d <= 153:
        console.log('Весна');
        if (d >= 61 && d <= 92)
            console.log('Март');
        if (d >= 93 && d <= 123)
            console.log('Апрель');
        if (d >= 123 && d <= 154)
            console.log('Май');
            break;
    case d >= 155 && d <= 249:
        console.log('Лето');
        if (d >= 155 && d <= 185)
            console.log('Июнь');
        if (d >= 186 && d <= 217)
            console.log('Июль');
        if (d >= 218 && d <= 249)
            console.log('Август');
            console.log('Август');
            break;
    case d >= 250 && d <= 342:
        console.log('Осень');
        if (d >= 250 && d <= 280)
            console.log('Сентябрь');
        if (d >= 281 && d <= 312)
            console.log('Октябрь');
        if (d >= 313 && d <= 343)
            console.log('Ноябрь');
            break;
}