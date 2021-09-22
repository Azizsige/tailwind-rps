const contentPlay = document.getElementById("content-play");
const btnBack = document.getElementById("back");
const btnClose = document.getElementById("backBtn");
const selecteds = document.querySelectorAll(".selected");
const contentPlay_user = document.querySelector(".content-play__user");
const contentPlay_comp = document.querySelector(".content-play__comp img");
const contentPlay_userSelected = document.querySelector(
  ".content-play__user--selected"
);
const contentPlay_text = document.querySelector(".content-play__text");
const contentPlay_results = document.querySelector(".content-play__results");

btnBack.addEventListener("click", function () {
  location.href = "./../index.html";
});

function getUserSelect(selected) {
  let userSelected = selected.target.id;
  const deleteTag = contentPlay_user.remove();
  contentPlay_userSelected.innerHTML += `<img class="w-28" src="./../../assets/${userSelected}-user.png" alt="" srcset="">`;

  // console.log(userSelected);
  return userSelected;
}

function getCompSelected() {
  const comp = Math.random();
  if (comp > 0.34) {
    contentPlay_comp.src = "./../../assets/rock-comp.png";
    return "rock";
  }
  if (comp >= 0.34 && comp < 0.67) {
    contentPlay_comp.src = "./../../assets/paper-comp.png";
    return "paper";
  }
  contentPlay_comp.src = "./../../assets/scissors-comp.png";
  return "scissors";
}

function getResults(comp, user) {
  if (user == comp) return "Draw";
  if (user == "rock") return (comp == "scissors") ? "Win" : "Lose";
  if (user == "paper")
    return (comp == "scissors") ? "Lose" : "Win";
  if (user == "scissors")
    return (comp == "paper") ? "Win" : "Lose";
}

function playAgain(result) {
  const again = contentPlay_text.remove();
  contentPlay_results.innerHTML += `
  <div class="results-text flex">
              <p class="font-roboto font-bold text-4xl mr-2 uppercase">IT'S A ${result} </p><img src="./../../assets/${result}.svg" alt="" srcset="">
            </div>
           <button onclick="location.reload()" class="btn-again bg-primary w-44 h-12 text-white rounded-lg mt-3">PLAY AGAIN</button>`;

  return;
}

selecteds.forEach((selected) => {
  selected.addEventListener("click", (event) => {
    // getUserSelect(event)
    const userGame = getUserSelect(event);
    const computer = getCompSelected();
    const result = getResults(computer, userGame);

    playAgain(result)

   btnClose.src = "./../../assets/close.svg"

    console.log(`user : ${userGame}`);
    console.log(`comp : ${computer}`);
    console.log(`result : ${result}`);
  });
});
