
const books = [
	{
		id: 1,
		title: 'Septimus Heap Book One: Magyk',
		date: 'July 5, 2022',
		description:
			'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
		imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
		imgAlt: 'Book cover for Septimus Heap 1',
		ages: '10-14',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 2,
		title: 'Magnus Chase Book One: Sword of Summer',
		date: 'December 12, 2021',
		description:
			'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
		imgSrc:
			'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
		imgAlt: 'Book cover for Magnus Chase 1',
		ages: '12-16',
		genre: 'Fantasy',
		stars: '⭐⭐⭐⭐'
	},
	{
		id: 3,
		title: "Belgariad Book One: Pawn of Prophecy",
		date: "Feb 12, 2022",
		description:
		"A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
		imgSrc:
		"https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
		imgAlt: "Book cover for Pawn of Prophecy",
		ages: "12-16",
		genre: "Fantasy",
		stars: "⭐⭐⭐⭐⭐"
	}
];
         

const bookList = document.querySelector("#book-list");

books.forEach(book => {
  const article = document.createElement("article");
  article.classList.add("book-review");

  const title = document.createElement("h2");
  title.textContent = book.title;
  article.append(title);

  const poster = document.createElement("img");
  poster.src = book.imgSrc;
  poster.alt = book.imgAlt;
  article.append(poster);

  const details = document.createElement("div");
  details.classList.add("book-details");

  const bookDetails = [
    ["Release Date:", book.date],
    ["Recommended Age:", book.ages],
    ["Genre:", book.genre]
  ];

  bookDetails.forEach(([label, value]) => {
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
  stars.setAttribute("aria-label", `${Array.from(book.stars).length} out of 5 stars`);
  const visibleStars = document.createElement("span");
  visibleStars.setAttribute("aria-hidden", "true");
  visibleStars.textContent = book.stars;
  stars.append(visibleStars);
  rating.append(ratingLabel, " ", stars);
  details.append(rating);
  article.append(details);

  const description = document.createElement("p");
  description.classList.add("book-description");
  description.textContent = book.description;
  article.append(description);

  bookList.append(article);
});
          