// Global Object
var imdb = imdb || {};

// Creating Review constructor
function Review(author, content, date) {
    this._id = ++Review.id;
    this.author = author;
    this.content = content;
    this.date = date;
}
Review.id = 0;           // setting Review id

// setting getReview property to imdb object
imdb.getReview = function(author, content, date) {
    var review = new Review(author, content, date);
    return review;
};