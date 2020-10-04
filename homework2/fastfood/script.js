'use strict';

// class Hamburger {
//
//     constructor() {
//         this.price = 0;
//         this.calories = 0;
//
//         this.small = {
//             price: 50,
//             calories: 20,
//         };
//
//         this.large = {
//             price: 100,
//             calories: 40,
//         };
//
//         this.cheese = {
//             price: 10,
//             calories: 20,
//         };
//
//         this.salad = {
//             price: 20,
//             calories: 5,
//         };
//
//         this.potato = {
//             price: 15,
//             calories: 10,
//         };
//
//         this.spicies = {
//             price: 15,
//             calories: 0,
//         };
//
//         this.mayo = {
//             price: 20,
//             calories: 5,
//         };
//     }
//
//     calc(size) {
//         this.price += Hamburger[size].price;
//         this.calories += Hamburger[size].calories;
//
//         const checkedBoxes = document.querySelectorAll('input[name=add]:checked');
//         for (let i = 0; i < checkedBoxes.length; i++) {
//             const add = checkedBoxes[i].id;
//             this.price += Hamburger[add].price;
//             this.calories += Hamburger[add].calories;
//         }
//
//         Hamburger.result(this.price, this.calories);
//     }
//
//     result(price, calories) {
//         document.getElementById('price').innerHTML = price;
//         document.getElementById('calories').innerHTML = calories;
//     }
//
//     resetData() {
//         this.price = 0;
//         this.calories = 0;
//         Hamburger.result(this.price, this.calories);
//     }
// }
//
// document.getElementById('form').addEventListener('submit', function (e) {
//     Hamburger.resetData();
//     Hamburger.calc(document.querySelector('input[name="size"]:checked').value);
//     e.preventDefault();
// });


const Hamburger = {

    price: 0,
    calories: 0,

    small: {
        price: 50,
        calories: 20
    },

    large: {
        price: 100,
        calories: 40
    },

    cheese: {
        price: 10,
        calories: 20
    },

    salad: {
        price: 20,
        calories: 5
    },

    potato: {
        price: 15,
        calories: 10
    },

    spicies: {
        price: 15,
        calories: 0
    },

    mayo: {
        price: 20,
        calories: 5
    },

    calc: function (size) {
        this.price += Hamburger[size].price;
        this.calories += Hamburger[size].calories;

        const checkedBoxes = document.querySelectorAll('input[name=add]:checked');
        for (let i = 0; i < checkedBoxes.length; i++) {
            let add = checkedBoxes[i].id;
            this.price += Hamburger[add].price;
            this.calories += Hamburger[add].calories;
        }

        Hamburger.result(this.price, this.calories);
    },

    result: function (price, calories) {
        document.getElementById('price').innerHTML = price;
        document.getElementById('calories').innerHTML = calories;
    },

    resetData: function () {
        this.price = 0;
        this.calories = 0;
        Hamburger.result(this.price, this.calories);
    }
};

document.getElementById('form').addEventListener('submit', function (e) {
    Hamburger.resetData();
    Hamburger.calc(document.querySelector('input[name="size"]:checked').value);
    e.preventDefault();
});