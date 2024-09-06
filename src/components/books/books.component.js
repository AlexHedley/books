function BooksController() {
    var ctrl = this;
}

angular.module("myApp").component("books", {
    templateUrl: "components/books/books.html",
    controller: BooksController,
    bindings: {
        books: "<",
    },
});
