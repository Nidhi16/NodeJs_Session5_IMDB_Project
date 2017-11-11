var imdb = imdb || {};

function Actor(name, bio, born) {
    this._id = ++Actor.id;
    this.name = name;
    this.bio = bio;
    this.born = born;
}
Actor.id = 0;

imdb.getActor = function(name, bio, born) {
    var actor = new Actor(name, bio, born);
    return actor;
};