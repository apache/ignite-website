document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchWrapper = document.getElementById("search-wrapper");
  const searchInput = document.querySelector(".pagefind-ui__search-input");

  searchButton.addEventListener("click", () => {
    searchButton.classList.toggle("open");
    searchWrapper.classList.toggle("open");
  });
});
