/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //1- spade, 2-clubs,
  const shape = ["♠", "♣", "♥", "♦"];
  const number = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  let generatedShape = Math.floor(Math.random() * shape.length);
  let generatedNumebr = Math.floor(Math.random() * number.length);

  let cardIcon = document.querySelectorAll(".card-icon");

  let cardNumebr = document.querySelector(".card-number");
  cardNumebr.innerHTML = number[generatedNumebr];
  cardIcon[1].innerHTML = `<h1>${shape[generatedShape]}</h1>`;
  cardIcon[0].innerHTML = `<h1>${shape[generatedShape]}</h1>`;

  if (shape[generatedShape] === "♥" || shape[generatedShape] === "♦") {
    //cardIcon[1].style.color = "red";
    cardIcon[0].classList.add("text-danger");
    cardIcon[1].classList.add("text-danger");
    cardNumebr.classList.add("text-danger");
  } else {
    cardIcon[0].classList.add("text-dark");
    cardIcon[1].classList.add("text-dark");
    cardNumebr.classList.add("text-dark");
  }
};
