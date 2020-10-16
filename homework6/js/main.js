const API = `https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses`;

const app = new Vue({
    el: '#app',
    // data: {                  // перетащили в компонент поиска FilterComp
    //     searchLine: '',
    // },
    methods: {
        getJson(url){
            return fetch(url)
                .then(result => result.json())
                .catch(error => this.$refs.error.setError(error)); //.catch(error => console.log(error)); // было, вместо вывода в консоль будем выводить в компонент ошибки
                /* this - ссылка на текущий глобальный Vue, внутри него определяем все ссылки refs,
                далее компонент с ошибкой error и его метод setError,
                в качестве текста будем передавать ошибку, которая на данный момент есть */
        },
    },
});