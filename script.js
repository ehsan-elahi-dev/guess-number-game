"use strict";

// console.log(document.querySelector(".message"));
// console.log(document.querySelector(".message").textContent);
// console.log(
//   (document.querySelector(".message").textContent = "Correct Number!"),
//   document.querySelector(".message").textContent,
// );

// console.log((document.querySelector(".number").textContent = 3));
// console.log((document.querySelector(".score").textContent = 18));
//????? console.log(document.querySelector(".guess").value);
//??? console.log(document.querySelector(".guess").textContent);
// console.log((document.querySelector(".guess").value = 10));

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector("#message").textContent = message;
};

document.querySelector("#check").addEventListener("click", function () {
  console.log(document.querySelector("#guess").value);
  const guess = Number(document.querySelector("#guess").value);

  //   score ===0
  if (!score) return;

  if (!guess) {
    displayMessage("No Number!");
  } else if (guess === secretNumber) {
    displayMessage("CorrectNumber!");
    document.querySelector("#number").textContent = secretNumber;

    // document.querySelector("body").style.backgroundColor = "#65a30d";
    // document.querySelector("#number").style.width = "320px";

    document.querySelector("body").classList.remove("bg-neutral-800");
    document.querySelector("body").classList.add("bg-lime-600");
    document.querySelector("#number").classList.remove("w-40");
    document.querySelector("#number").classList.add("w-80");
  }

  //   negha kon if v else ? :
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "too high!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#message").textContent = "You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector("#message").textContent = "too low!";
      score--;
      document.querySelector("#score").textContent = score;
    } else {
      document.querySelector("#message").textContent = "You lost the game!";
      document.querySelector("#score").textContent = 0;
    }
  }
});

document.querySelector("#again").addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  displayMessage("Start guessing...");

  document.querySelector("#number").textContent = "?";
  document.querySelector("#guess").value = "";
  document.querySelector("#score").textContent = score;
  document.querySelector("body").classList.remove("bg-lime-600");
  document.querySelector("body").classList.add("bg-neutral-800");
  document.querySelector("#number").classList.remove("w-80");
  document.querySelector("#number").classList.add("w-40");
});
