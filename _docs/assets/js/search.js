document.addEventListener("DOMContentLoaded", () => {
  const searchButton = document.getElementById("search-button");
  const searchWrapper = document.getElementById("search-wrapper");

  if (!searchButton || !searchWrapper) return;
  if (searchButton.dataset.searchInit === "true") return;

  searchButton.dataset.searchInit = "true";

  searchButton.addEventListener("click", () => {
    searchButton.classList.toggle("open");
    searchWrapper.classList.toggle("open");
  });
});
