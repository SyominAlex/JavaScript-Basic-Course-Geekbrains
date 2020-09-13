//1.
// var a = 1, b = 1, c, d;
// c = ++a; console.log(c); // 2
// d = b++; console.log(d); // 1
// c = (2+ ++a); console.log(c); // 5
// d = (2+ b++); console.log(d); // 4
// console.log(a); // 3
// console.log(b); // 3


//2.
// var a = 2;
// var x = 1 + (a *= 2);
// console.log(a);
// console.log(x);


//3.
'use strict';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

let a = getRandomInt(-15, 15);
let b = getRandomInt(-15, 15);
console.log(a);
console.log(b);

switch (true) {
    case a>0 && b>0: //### 1. если a и b положительные, вывести их разность
        console.log((a - b));
        break;
    case a<0 && b<0: //### 2. если а и b отрицательные, вывести их произведение
        console.log((a * b));
        break;
    case (a>=0 ? 1 : -1) * (b>=0 ? 1 : -1) < 0: //### 3. если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом
        console.log((a + b));
        break;
    default:
        console.log("Случайные числа не удовлетворяют ни одному условию");
}

//### 4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15
a = getRandomInt(0, 15);
switch (a) {
    case 0:
        console.log(a++);
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a);
        break;
}

// ### 5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать
// оператор return.
function summ(operand1, operand2) {
    if (verifyNaN(operand1, operand2) !== 'error') return operand1 + operand2;
}

function minus(operand1, operand2) {
    if (verifyNaN(operand1, operand2) !== 'error') return operand1 - operand2;
}

function mult(operand1, operand2) {
    if (verifyNaN(operand1, operand2) !== 'error') return operand1 * operand2;
}

function devide(operand1, operand2) {
    if (verifyNaN(operand1, operand2) !== 'error') return operand1 / operand2;
}

function verifyNaN(operand1, operand2) {
    if (isNaN(operand1) || isNaN(operand2))
        return 'error';
    else return false;
}

// ### 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 –
//         значения аргументов, operation – строка с названием операции.<br>
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из
// пункта 3) и вернуть полученное значение
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "summ":
            return summ(arg1, arg2);
        case "minus":
            return minus(arg1, arg2);
        case "devide":
            return devide(arg1, arg2);
        case "mult":
            return mult(arg1, arg2);
    }
}

//     ### 7. *Сравнить null и 0. Попробуйте объяснить результат
console.log(null == 0); // false
console.log(null > 0); // false
console.log(null < 0); // false
console.log(null >= 0); // true
console.log(null <= 0); // true
console.log(null != 0); // true
console.log(null === 0); // false
console.log(null !== 0); // true

//     ### 8. *С помощью рекурсии организовать функцию возведения числа в степень. Формат: function power(val, pow), где val – заданное число, pow – степень
console.log(power(10, 3));

function power( val, pow ) {
    if ( pow === 0 ) {
        return 1;
    }
    else {
        return val * power( val, pow - 1);
    }
}