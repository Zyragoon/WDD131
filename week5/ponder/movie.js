
const movies = [
      {
        title: "Spider-Man: Into the Spider-Verse",
        date: "Dec 14, 2018",
        description: "Miles Morales becomes the Spider-Man of his reality and crosses paths with others from the multiverse.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/spiderman.png",
        imgAlt: "Miles Morales swinging through the city",
        ages: "10+",
        genre: "Action/Adventure",
        stars: "⭐⭐⭐⭐⭐"
      },
      {
        title: "The Other Side of Heaven",
        date: "December 14, 2001",
        description: "Based on the true story of Elder John H. Groberg, a missionary in Tonga in the 1950s, this film tells a powerful story of faith, hardship, and miracles.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/heaven.png",
        imgAlt: "Poster for The Other Side of Heaven showing a missionary and tropical landscape",
        ages: "10+",
        genre: "Drama/Religious",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "Luca",
        date: "June 18, 2021",
        description: "Two sea monsters experience a life-changing summer on the Italian Riviera.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/luca.png",
        imgAlt: "Luca and Alberto standing on the beach",
        ages: "6+",
        genre: "Family/Fantasy",
        stars: "⭐⭐⭐⭐"
      },
      {
        title: "17 Miracles",
        date: "June 3, 2011",
        description: "A moving depiction of the Willie Handcart Company's journey west in 1856, focusing on the miraculous events that helped early pioneers survive one of the harshest migrations in history.",
        imgSrc: "https://wddbyui.github.io/wdd131/images/miracles.jpg",
        imgAlt: "Movie poster for 17 Miracles showing handcart pioneers walking through snow",
        ages: "12+",
        genre: "Historical/Religious",
        stars: "⭐⭐⭐⭐"
      }
    ];

const movieList = document.querySelector("#movie-list");

movies.forEach(movie => {
  const article = document.createElement("article");
  article.classList.add("movie");

  const title = document.createElement("h2");
  title.textContent = movie.title;
  article.append(title);

  const poster = document.createElement("img");
  poster.src = movie.imgSrc;
  poster.alt = movie.imgAlt;
  article.append(poster);

  const details = document.createElement("div");
  details.classList.add("movie-details");

  const movieDetails = [
    ["Release Date:", movie.date],
    ["Recommended Age:", movie.ages],
    ["Genre:", movie.genre]
  ];

  movieDetails.forEach(([label, value]) => {
    const paragraph = document.createElement("p");
    const strong = document.createElement("strong");
    strong.textContent = label;
    paragraph.append(strong, ` ${value}`);
    details.append(paragraph);
  });

  const rating = document.createElement("p");
  const ratingLabel = document.createElement("strong");
  ratingLabel.textContent = "Rating:";
  const stars = document.createElement("span");
  stars.setAttribute("aria-label", `${Array.from(movie.stars).length} out of 5 stars`);
  const visibleStars = document.createElement("span");
  visibleStars.setAttribute("aria-hidden", "true");
  visibleStars.textContent = movie.stars;
  stars.append(visibleStars);
  rating.append(ratingLabel, " ", stars);
  details.append(rating);
  article.append(details);

  const description = document.createElement("p");
  description.classList.add("movie-description");
  description.textContent = movie.description;
  article.append(description);

  movieList.append(article);
});
          