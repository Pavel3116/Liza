let numberOfFilms = prompt("Сколько фильмов вы уже поссмотрели?", 0);

let obg = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    privat : false,

}
let oldFilm = prompt("Один из последних просмотренных филтмов","");
let log = prompt("На сколько оцените фильм", 0);

obg.movies[oldFilm] = log;

console.log(obg);
