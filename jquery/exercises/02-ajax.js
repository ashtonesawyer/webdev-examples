const url = "https://anapioficeandfire.com/api/books/";

// const app = document.querySelector("#books");
// app.style.paddingLeft = 0;
// const loading = document.querySelector("#loading");

const addBookToDOM = (item) => {
  // console.log(item);
  $("#books").append(
    $("<div>")
      .css({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
      })
      .append($("<h3>").text(item.name))
      .append($("<p>").text(item.authors[0]))
      .append($("<p>").text(item.released.substr(0, 4)))
      .append($("<p>").text(`${item.numberOfPages} pages`))
  );
};

const fetchData = (url) => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((item) => {
        addBookToDOM(item);
      });
    })
    .catch((error) => {
      console.log(error);

      $("#books").append("li").text("An error has occurced. Please try again.");
    })
    .finally(() => {
      $("#loading").remove();
    });
};

fetchData(url);
