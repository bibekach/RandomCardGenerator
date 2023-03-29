/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //1- spade, 2-clubs,
  const shape = [1, 2, 3, 4];
  const number = ["Ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "Jack", "Queen", "King"];
  let generatedShape = Math.floor(Math.random() * shape.length);
  let generatedNumebr = Math.floor(Math.random() * number.length);

  let cardIcon = document.querySelectorAll(".card-icon");
  cardIcon[1].innerHTML = shape[generatedShape];
  cardIcon[0].innerHTML = shape[generatedShape];

  if (shape[generatedShape] === 1) {
    cardIcon[1].style.color = "red";
    cardIcon[0].classList.add("text-danger");
  }

  let cardNumebr = document.querySelector(".card-number");
  cardNumebr.innerHTML = shape[generatedNumebr];
};
