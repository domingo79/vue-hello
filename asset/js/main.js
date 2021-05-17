// Descrizione: Stampare a schermo un messaggio all’interno di un h1,
// utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue({
    el: '#app',
    data: {
        message: 'Il framework di VueJS ti da il benvenuto!',
        image: './asset/img/1.jpeg'
    },
    methods: {
        getImage() {

            if (this.image === './asset/img/1.jpeg') {
                this.image = './asset/img/2.jpeg'
            } else if (this.image === './asset/img/2.jpeg') {
                this.image = './asset/img/3.jpeg'
            } else {
                this.image = './asset/img/1.jpeg'

            }

        }
    }
})