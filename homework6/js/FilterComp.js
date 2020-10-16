Vue.component('filter-el', {
        data() {
            return {
                searchLine: ""
            }
        },
        template:
            `<form action="#" method="post" class="search-form" @submit.prevent="$root.$refs.products.FilterGoods(searchLine)">
                <input type="text" class="search-field" v-model="searchLine">
                <button class="btn-search" type="submit">
                    <i class="fas fa-search"></i>
                </button>
            </form>`
    }
);

/* Мы фильтруем каталог товаров. Это значит, что мы работаем с товарами каталога.
Мы ни в коем случае не должны выносить фильтрацию куда-то вне каталога: получать по ссылкам эти данные, как-то фильтровать их внутри нашего компонента фильтрации и получать назад - это все плохо.
Потому что это все неявное мутирование данных внутри их родного контекста. Мы себе такого позволять не должны.
Наша задача - по событию на @submit.prevent сказать компоненту Products: "выведи, пожалуйста, метод filter", и передать ему данные на вход - пользовательский ввод.
Т.е. вместо вызова метода filter мы сначала получим доступ к компоненту $root (это наш глобальный Vue-элемент) и в нем есть объект с ссылками $refs.
Мы уже создавали ссылку ref для компонента товаров, поэтому обратимся по этому ключу к нашему компоненту @submit.prevent="$root.$refs.products.filter(searchLine)". */