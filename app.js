const btn = document.querySelector(".btn");
const h1 = document.querySelector("h1");
const output = document.querySelector(".output");
const inputVal = document.querySelector(".val");

// Object that we can group to different pages. Within this object, this can just be JSON and an object sitting with an object
const page = { json: {} };

// New URL
// const baseurl = "https://restcountries.com/v3.1/";
// Old URL
const baseurl = "https://restcountries.com/v2/";

https: btn.addEventListener("click", (e) => {
  console.log("ready");

  const para = "all";
  const url = baseurl + para;
  fetch(url)
    .then((rep) => rep.json())
    .then((data) => {
      page.json = data;
      loadPages(page.json);
    });
});

// Load pages and pass in the data object into pages and then within console will output
function loadPages(data) {
  console.log(data);
  data.forEach((el) => {
    console.log(el);
  });
}

// Output and create every country
function pageEl(data) {}
