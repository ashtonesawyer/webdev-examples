const url = "https://anapioficeandfire.com/api/books/";

const app = document.querySelector("#books");
const loading = document.querySelector("#loading");

const addBook = (book) => {
  console.log(book);
  let container = document.createElement("div");
  let title = document.createElement("h4");
  let author = document.createElement("p");
  let pubYear = document.createElement("p");
  let pgs = document.createElement("p");

  title.textContent = book.name;
  author.textContent = `By ${book.authors[0]}`;
  pubYear.textContent = book.released.substr(0, 4);
  pgs.textContent = `${book.numberOfPages} pages`;

  container.append(title);
  container.append(author);
  container.append(pubYear);
  container.append(pgs);
  app.append(container);
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      // check the format of the data
      // if data is in array format, we can use an array method such as forEach()
      data.forEach((item) => {
        addBook(item);
      });
    })
    .catch((error) => {
      console.log(error);
      let div = document.createElement("div");
      div.textContent = `An error occurred. Please try again.`;
      app.append(div);
    })
    .finally(() => {
      app.removeChild(loading);
    });
};

fetchData(url);
