// Descrizione: Stampare a schermo un messaggio all’interno di un h1,
// utilizzando i data.
// Bonus: Aggiungere alla pagina un’immagine, presa anch’essa da un data.


const app = new Vue({
    el: '#app',
    data: {
        message: 'Il framework di VueJS ti da il benvenuto!',
        image: './asset/img/1.jpeg'
    }
})