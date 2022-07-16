const movieObject = {
    adult: false,
    backdrop_path: "/jBFxXKCrViA88hhO59fDx0Av4P.jpg",
    belongs_to_collection: {
      id: 10,
      name: "Star Wars Collection",
      poster_path: "/bYbHqvRANCpuRTs0RAu10LhmVKU.jpg",
      backdrop_path: "/d8duYyyC9J5T825Hg7grmaabfxQ.jpg"
    },
    budget: 11000000,
    genres: [
      {
        id: 12,
        name: "Adventure"
      },
      {
        id: 28,
        name: "Action"
      },
      {
        id: 878,
        name: "Science Fiction"
      }

    ],
    homepage: "http://www.starwars.com/films/star-wars-episode-iv-a-new-hope",
    id: 11,
    imdb_id: "tt0076759",
    original_language: "en",
    original_title: "Star Wars",
    overview: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
    popularity: 109.854,
    poster_path: "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
    production_companies: [
      {
        id: 1,
        logo_path: "/o86DbpburjxrqAzEDhXZcyE8pDb.png",
        name: "Lucasfilm Ltd.",
        origin_country: "US"
      },
      {
        id: 25,
        logo_path: "/qZCc1lty5FzX30aOCVRBLzaVmcp.png",
        name: "20th Century Fox",
        origin_country: "US"
      }
    ],
    production_countries: [
      {
        iso_3166_1: "US",
        name: "United States of America"
      }
    ],
    release_date: "1977-05-25",
    revenue: 775398007,
    runtime: 121,
    spoken_languages: [
      {
        english_name: "English",
        iso_639_1: "en",
        name: "English"
      }
    ],
    status: "Released",
    tagline: "A long time ago in a galaxy far, far away...",
    title: "Star Wars",
    video: false,
    vote_average: 8.2,
    vote_count: 17382,

}

 

  let submit = document.querySelector('button');
  let input = document.querySelector('input');


submit.addEventListener('click', () => {
    console.log(input.value)
    movieObject.movieDirector = input.value;
    console.log(movieObject);
})

console.log(movieObject)

// SECTION 1 
// 1.
movieObject.budget = 0;
console.log(movieObject.budget)

// 2.
movieObject.mustSee = true;
console.log(movieObject.mustSee)

// 3. NEREZOLVAT cu .this================================== //
movieObject.getGenres = function () {
  const { genres } = movieObject;
  let genreNames = genres.map(genres => {
    return genres.name;
  })

  console.log(`Type of genres : ${genreNames}`)
 }
movieObject.getGenres();
// ======================================================== //

// 4.
movieObject.getProductionCompany = function () {
  const { production_companies } = movieObject;
  let productionCompanies = (production_companies);
  console.log(productionCompanies)
  return productionCompanies;
}

movieObject.getProductionCompany();

// 5. 
let textInput = document.getElementById("input")
let btnInput = document.getElementById("btnSubmit")

btnInput.addEventListener("click", () => {
  console.log(textInput.value)
  movieObject.movieDirector = textInput.value;
  console.log(movieObject)
}) 