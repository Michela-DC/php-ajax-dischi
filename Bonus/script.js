 console.log('Milestone 2');

const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
        genre: '',
    },

    watch: { //nel watch ci vado a mettere il nome della proprietà che sto guardando, quindi qui questa funzione è agganciata al data genre
        genre: function (oldVal, newVal) { // per monitorare i valori che cambiano posso passare due paramentri al watch e farne il console.log MA NON È OBBLIGATORIO PASSARGLIELI E USARLI
            
            this.fetchData(); // ogni volta che genre cambia viene lanciato fetchData, lo posso vedere se dall'ispeziona vado in rete -> fetch/XHR
            
            console.log(oldVal, newVal);
        }
    },

    methods: {
        fetchData() {
            axios.get('./db.php', {
                params: {
                    genre: this.genre,
                }
                
            }).then (res => {
                console.log(res.data);
                
                this.albums = res.data;
                console.log(this.albums);
            });
        },
    },

    mounted() {
        this.fetchData(); //invoco la funzione fetchData quando il file è tutto montato
    }
});