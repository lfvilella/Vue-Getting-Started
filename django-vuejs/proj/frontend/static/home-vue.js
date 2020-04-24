var app = new Vue({
    delimiters: ['[[', ']]'],
    el: '#app',
    data: {
        selectedBook: {},
        books: [],
    },
    methods: {
        selectBook: function (book) {
            axios
            .get(`/api/books/${book.id}.json`)
            .then(response => (this.selectedBook = response.data))
        },
    },
    mounted () {
        axios
            .get('/api/books.json')
            .then(response => (this.books = response.data))
    }
})
