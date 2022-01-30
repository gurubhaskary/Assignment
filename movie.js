let arr = [];

class Movie {
    constructor(title, studio, rating = "A/U") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }


    getPG(movie) {
        if (this.rating === 'PG') return movie;
    }


}
let movie1 = new Movie("China Detective", "Shawn Entertainment", "A");

let movie2 = new Movie("Lord of the Rings", " New Line Cinema");

let movie3 = new Movie("Casino Royale", "Eon Productions", "U");

let movie4 = new Movie("Maanadu", "Venkat Prabu Productions")

console.log(movie1);
console.log(movie2);
console.log(movie3);
console.log(movie4)


let arrayMovie = [movie1, movie2, movie3, movie4];

arrayMovie.forEach((val) => {
    console.log(val);
    if (val.rating === "PG") arr.push(val.title);
});

console.log(arr);


