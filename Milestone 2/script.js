console.log('Milestone 2');

const app = new Vue ({
    el: '#app',
    data: {
        albums: [],
    },

    methods: {
        fetchData() {
            axios.get('./server.php').then (res => {
                console.log(res.data);

                this.albums = res.data;
                console.log(this.albums);
            })
        }
    },

    mounted() {
        this.fetchData(); //invoco la funzione fetchData quando il file è tutto montato
    }
});