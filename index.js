"use strict";

const playButton = document.querySelector(".play__button");
const playTime = document.querySelector(".play__time--content");
const playScore = document.querySelector(".play__score--content");

const mainSection = document.querySelector(".section-main");
const mainRect = mainSection.getBoundingClientRect();

let time = 9;
let score = 10;

const CARROT_SIZE = 80;

const initGame = () => {
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
};

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const addItem = (classname, number, imgpath) => {
  const x1 = 0;
  const y1 = 0;
  const x2 = mainRect.width - CARROT_SIZE;
  const y2 = mainRect.height - CARROT_SIZE;

  for (let i = 0; i < number; i++) {
    const img = document.createElement("img");
    img.setAttribute("class", classname);
    img.setAttribute("src", imgpath);
    img.style.position = "absolute";
    const x = randomNum(x1, x2);
    const y = randomNum(y1, y2);
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;
    mainSection.appendChild(img);
    console.log(x);
  }
};

window.addEventListener("load", () => {
  const startTimer = setInterval(() => {
    playTime.innerText = `00:${time--}`;
    if (time < 0) {
      clearInterval(startTimer);
    }
  }, 1000);

  initGame();

  playScore.innerText = score;
});

console.log(mainSection);
