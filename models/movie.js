// Global Object
var imdb = imdb || {};

// Creating Movie constructor function
function Movie(title, length, rating, country) {
    this._id = ++Movie.id;        // Auto-generated id
    this.title = title;
    this.length = length;
    this.rating = rating;
    this.country = country;
    this._actors = [];
    this._reviews = [];

    this.addActor = function(actorObject) {
        this._actors.unshift(actorObject);
    };
    this.getActors = function(){
        return this._actors;
    };
    this.addReview = function(reviewObject) {
        this._reviews.unshift(reviewObject);
    };
    this.deleteReview = function(reviewObject) {
        this._reviews.pop(reviewObject);
    };
    this.deleteReviewById = function(id) {
        var review_to_remove;
        this._reviews.forEach(function (review) {
            if (review._id == id) {
                review_to_remove = review;
            }
        }, this);
        if (review_to_remove) {
            this._reviews.pop(review_to_remove);
        }
    };
    this.getReviews = function() {
        return this._reviews;
    };
}
Movie.id = 0;           // Setting Movie id

// Setting getMovie property to imdb object
imdb.getMovie = function(title, length, rating, country) {
    return new Movie(title, length, rating, country);
};