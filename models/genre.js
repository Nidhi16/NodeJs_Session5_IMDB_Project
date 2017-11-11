var imdb = imdb || {};

function Genre(name) {
    this._id = ++Genre.id;
    this.name = name;
    var movies = {};

    this.addMovie = function(movieObject) {
        movies[movieObject._id] = movieObject;
    };
    this.deleteMovie = function(movieObject) {
        delete movies[movieObject._id];
    };
    this.deleteMovieById = function(id) {
        delete movies[id];
    };
    this.getMovies = function() {
        var ids = Object.keys(movies);
        var result = [];
        ids.forEach(function(id) {
            result.unshift(movies[id]);
        }, this);
        return result;
    };
}
Genre.id = 0;

imdb.getGenre = function(name) {
    var genre = new Genre(name);
    return genre;
};