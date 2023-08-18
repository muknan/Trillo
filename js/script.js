const userEl = document.querySelector(".user-nav__user");
const userListEl = document.querySelector(".user-nav__user-list");
const userMenuEl = document.querySelector(".user-nav__menu");

const searchInput = document.querySelector(".search__input");
const searchResults = document.querySelector(".search__results");

const searchData = [
  "Antigonish Evergreen Inn",
  "Microtel Inn & Suites by Wyndham Antigonish",
  "Maritime Inn Antigonish",
  "Hotel Victorian Inn",
  "Homeward Inns of Canada",
  "Oasis Motel And Campground",
  "Coastal Inn Antigonish",
  "The Cove Motel and Restaurant",
  "Chisholm's of Troy Coastal Cottages",
  "Sandstone Bed & Breakfast",
];

function filterResults(query) {
  return searchData.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase())
  );
}

function displayResults(results) {
  searchResults.innerHTML = "";
  results.forEach((result) => {
    let li = document.createElement("li");
    li.textContent = result;
    li.addEventListener("click", () => {
      searchInput.value = result;
      searchResults.innerHTML = "";
    });
    searchResults.appendChild(li);
  });
}

// event listener for search input
searchInput.addEventListener("input", () => {
  let query = searchInput.value;
  if (query === "") {
    searchResults.innerHTML = "";
    console.log("Hello");
  } else if (query.length > 1) {
    let results = filterResults(query);
    displayResults(results);
  }
});

// event listener to close search results when clicking outside the input and the results
document.addEventListener("click", (event) => {
  let isClickInsideInput = event.target === searchInput;
  let isClickInsideResults = searchResults.contains(event.target);
  if (!isClickInsideInput && !isClickInsideResults) {
    searchResults.innerHTML = "";
  }
});

userEl.addEventListener("click", function () {
  userListEl.classList.toggle("menu-toggle"), false;
});

userMenuEl.addEventListener(
  "click",
  function (ev) {
    ev.stopPropagation();
  },
  false
);

userListEl.addEventListener("mouseover", function () {
  userEl.style.cssText = `
  background-color: #fff;
`;
});

userListEl.addEventListener("mouseout", function () {
  userEl.style.backgroundColor = "";
});
