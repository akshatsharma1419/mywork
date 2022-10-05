const API = "http://api.quotable.io/random";
const quoteP = document.querySelector("#quote");
const timer = document.querySelector("#timer");
const textInput = document.querySelector("#textInput");
let current = 0;

const handleInput = (e) => {
  if (e.target.value.charAt(current) === quoteP.children[current].textContent) {
    quoteP.children[current].classList.add("correct");
    current++;
  } else if (current > e.target.value.length) {
    current--;
    quoteP.children[current].classList.remove("correct");
    quoteP.children[current].classList.remove("wrong");
  } else if (
    e.target.value.charAt(current) !== quoteP.children[current].textContent
  ) {
    quoteP.children[current].classList.add("wrong");
    current++;
  }
};

function setQuote() {
  fetch(API)
    .then((res) => res.json())
    .then((data) => {
      const spanVal = data.content.split("");
      spanVal.forEach((ch) => {
        const span = document.createElement("span");
        span.textContent = ch;
        quoteP.append(span);
      });
    });
}

(() => {
  setQuote();
  textInput.addEventListener("input", handleInput);
})();
