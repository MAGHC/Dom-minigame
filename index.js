const playButton = document.querySelector(".play__button");
const playTime = document.querySelector(".play__time--content");
const playScore = document.querySelector(".play__score--content");

let time = 9;
let score = 10;

window.addEventListener("load", () => {
  const startTime = setInterval(() => {
    playTime.innerText = `00:${time--}`;
    if (time < 0) {
      clearInterval(startTime);
    }
  }, 1000);

  playScore.innerText = score;
});
