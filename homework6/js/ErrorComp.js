Vue.component('error', {
    data() {
        return {
            text: '' // пустая строка при проверках будет восприниматься как false, а нам это и надо (пока не делаем массив ошибок)
        }
    },
    methods: {
        setError(text){
            this.text = text;
        }
    },
    template: `<div class="error-block" v-if="text"> <!-- если текст существует как истинное значение, то он отображается, можно использовать и v-show -->
                    <p class="error-msg">
                        <button class="close-btn" @click="setError('')">&times;</button> <!-- по клику будем закрывать, отталкиваясь от того условия, которое у нас есть, т.е. по клику нужно спрятать компонент = присвоить ему значение false -->
                        {{text}}
                    </p>
               </div>`
});