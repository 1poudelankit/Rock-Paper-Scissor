let userscore = 0;
let comscore = 0;
let imgs = document.querySelectorAll("img");
let msg = document.querySelector("#msg");
let uScoreBoard = document.querySelector("#user-score");
let comScoreBoard = document.querySelector("#comp-score");

const genCom = () => {
  let option = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);
  return option[num];
};

const winner = (uWin, comChoice, imgType) => {
  if (uWin) {
    userscore++;
    uScoreBoard.innerText = userscore;
    msg.innerText = `You win! Your ${imgType} beats ${comChoice}`;
    msg.style.color = "green";
  } else {
    comscore++;
    comScoreBoard.innerText = comscore;
    msg.innerText = `You Loose!Computer ${comChoice} beats ${imgType}`;
    msg.style.color = "red";
  }
};

const playGame = (imgType) => { 
  const comChoice = genCom();
  if (imgType === comChoice) {
    msg.innerText = "OOPs! Game Was Draw";
    msg.style.color = "#9354eb";
  } else {
    let uWin;
    if (imgType === "rock") {
      //comChoice will be paper or scissor
      if(comChoice === "paper"){
        uWin=false;
      }else if (comChoice === "scissor"){
        uWin=true;
      }
    } else if (imgType === "paper") {
      //comChoice will be rock or scissor
      if(comChoice === "rock"){
        uWin=true;
      }else if (comChoice === "scissor"){
        uWin=false;
      }
    } else {
      uWin = comChoice === "rock" ? false : true;
    }
    winner(uWin, comChoice, imgType);
  }
};

imgs.forEach((img) => {
  img.addEventListener("click", () => {
    const imgType = img.getAttribute("id");
    playGame(imgType);
  });
});
