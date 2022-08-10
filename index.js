"use strict";

const playButton = document.querySelector(".play__button");
const playTime = document.querySelector(".play__time--content");
const playScore = document.querySelector(".play__score--content");
const playButton2 = document.querySelector(".play__button--stop");
const playButton1 = document.querySelector(".play__button--shpae");

const mainSection = document.querySelector(".section-main");
const mainRect = mainSection.getBoundingClientRect();

let time = 9;
let score = 5;
let startStatus = false;

const CARROT_SIZE = 80;

const initGame = () => {
  mainSection.innerHTML = "";
  addItem("carrot", 5, "img/carrot.png");
  addItem("bug", 5, "img/bug.png");
  startStatus = !startStatus;
};

const randomNum = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

const buttonViewToggle = () => {
  playButton2.classList.toggle("none");
  playButton1.classList.toggle("none");
};

const carrotSound = new Audio("./sound/carrot_pull.mp3");
const bugound = new Audio("./sound/bug_pull.mp3");
const bgm = new Audio("./sound/bg.mp3");

const playSound = (source) => {
  source.play();
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
  }
};

window.addEventListener("load", () => {
  playButton.addEventListener("click", () => {
    if (!startStatus) {
      playSound(bgm);
      buttonViewToggle();
      initGame();
      const startTimer = setInterval(() => {
        playTime.innerText = `00:${time--}`;
        if (time === 0 && score !== 0) {
          playSound(bugound);
          alert("패배");
          location.reload();
        } else if (time > 0 && score === 0) {
          alert("win");
          clearInterval(startTimer);
          location.reload();
        }
      }, 1000);
    } else {
      location.reload();
    }
  });

  mainSection.addEventListener("click", (e) => {
    const target = e.target;
    if (!startStatus) {
      return;
    }
    if (target.matches(".carrot")) {
      target.classList.toggle("none");
      --score;
      playScore.innerText = score;
      playSound(carrotSound);
    } else if (target.matches(".bug")) {
      playSound(bugound);
      alert("패배");
      location.reload();
    }
  });
});
