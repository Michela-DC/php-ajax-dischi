console.log('Milestone 2');

const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
        metal: [],
        rock: [],
        pop: [],
        jazz: [],
    },

    methods: {
        fetchData() {
            axios.get('./server.php').then (res => {
                console.log(res.data);

                this.albums = res.data;
                console.log(this.albums);
            });
        },

        filteredAlbums () {
            axios.get('./server.php').then (res => {

                this.getGenre(res.data, 'metal',this.metal);
                this.getGenre(res.data, 'rock',this.rock);
                this.getGenre(res.data, 'pop',this.pop);
                this.getGenre(res.data, 'jazz',this.jazz);
                
            }); 
        },

        getGenre (response, genre, array) { //funzione per filtrare la risposta dall'axios

            for(let i = 0; i < response.length; i++){

                if(response[i].genre.toLowerCase() === genre){

                    array.push(response[i]);
                }
            }

            console.log(array);
        }
    },

    mounted() {
        this.fetchData(); //invoco la funzione fetchData quando il file è tutto montato
        this.filteredAlbums();
    }
});