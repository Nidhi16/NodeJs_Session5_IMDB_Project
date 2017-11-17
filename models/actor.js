// Global Object
var imdb = imdb || {};

// Creating Actor constructor
function Actor(name, bio, born) {
    this._id = ++Actor.id;
    this.name = name;
    this.bio = bio;
    this.born = born;
}
Actor.id = 0;            // Setting Actor id

// setting getActor property to imdb object
imdb.getActor = function(name, bio, born) {
    var actor = new Actor(name, bio, born);
    return actor;
};