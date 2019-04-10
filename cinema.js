class Cinema{

  constructor(films) {
    this.films = films;
}
  getFilmTitles(){
    return this.films.map( function(film){
      return film.title
    });
  }

  getFilmByTitle(chosenTitle){
    return this.films.filter(function(film){
      return film.title === chosenTitle;
    });
  }

getFilmByGenre(chosenGenre){
  return this.films.filter(function(film){
    return film.genre === chosenGenre;
    });
  }
  getFilmsFromYear(chosenYear){
    return this.films.some(function(film){
      return film.year === chosenYear;
      });
    }

    getFilmsByLength(chosenLength){
      return this.films.every(function(film){
        return film.length > chosenLength;
        });
      }

    totalTime(){
      return this.films.reduce(function(total, film){
        return total += film.length
    },0)
  }

}
module.exports = Cinema;
