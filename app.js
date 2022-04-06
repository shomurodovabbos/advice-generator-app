const btn = document.querySelector(".btn");
const quote = document.querySelector(".quote");
const adviceNum = document.querySelector(".advice-num");

window.addEventListener("DOMContentLoaded", getQuote);
btn.addEventListener("click", getQuoteDime);

function getQuote(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  //   const random = Math.floor(Math.random() * 200);
  xhr.open("GET", "https://api.adviceslip.com/advice", true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      quote.innerText = `${response.slip.advice}`;
      adviceNum.innerText = response.slip.id;
      console.log(response.slip.advice);
    }
  };
  xhr.send();
}
function getQuoteDime(e) {
  e.preventDefault();
  const xhr = new XMLHttpRequest();
  const random = Math.floor(Math.random() * 200);
  xhr.open("GET", `https://api.adviceslip.com/advice/${random}`, true);
  xhr.onload = function () {
    if (this.status === 200) {
      const response = JSON.parse(this.responseText);
      quote.innerText = `${response.slip.advice}`;
      adviceNum.innerText = response.slip.id;
      console.log(response.slip);
    }
  };
  xhr.send();
}
