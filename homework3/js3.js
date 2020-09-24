'use strict';

function task1() {
    var currentNumber = 2;
    while(currentNumber <= 100) {
        if(isNatural(currentNumber)) console.log(currentNumber);
        currentNumber++;
    }

    function isNatural(number) {
        let j = 2;
        while (j <= number/2) {
            if (number % j == 0) {
                return false;
            }
            j++;
        }
        return true;
    }
}

task1();

function task2_3() {
    var basketPrice = 0;
    var arrBasket = [
        {name:'Redmi Note 7', price:15000},
        {name:'iPhone X', price:60000}
    ];
    arrBasket.push({name:'Huawei Honor 3X', price:5000});
    function countBasketPrice(arrBasket) {
        for (let i = 0; i < arrBasket.length; i++) {
            basketPrice += arrBasket[i].price;
            console.log(arrBasket[i].name + ': ' + arrBasket[i].price +' рублей');
        }
        return basketPrice;
    }
    console.log(`Стоимость корзины: ${countBasketPrice(arrBasket)}`);
}

task2_3();

function task4() {
    for (var i = 0; i < 10; console.log(i++)) {
    }
}

task4();

function task5() {
    let x = 'x';
    for (let i = 20; i--;) {
        console.log(x);
        x = x + 'x';
    }
}

task5();