const moviesDB = [
    {
        id: 1,
        title: "Pacific Rim",
        description: "Lorem Ipsum",
        year: 2012,
        director: "Guillermo del Toro"
    }

]

let movieId = 1

const findAllMovies = async () => {
    return moviesDB 
} 

const findMovieById = async (id) => {
    const movie = moviesDB.find(movieItem => movieItem.id === id)
    return movie
}

const createMovie = async (movieObj) => {
    const newMovie = {
            id: movieId++,
            title: movieObj.title || 'Untitled',
            description: movieId.description || null,
            year:movieObj.year || 'Not register',
            director: movieObj.director || 'Anonymous'
    }
    moviesDB.push(newMovie)
        return newMovie
}

module.exports = {
    findAllMovies,
    findMovieById,
    createMovie
}