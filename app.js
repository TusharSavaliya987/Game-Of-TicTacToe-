let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-Container");
let msg = document.querySelector("#msg");

let turnO = true; //player X , player O

const winPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], //horizontal
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], //vertical
  [0, 4, 8],
  [2, 4, 6], //diagonal
];

boxes.forEach((box, index) => {
  box.addEventListener("click", () => {
    console.log("Box clicked");
   
    if (turnO) {  //player O
      box.innerText = "O";
      turnO = false;
    }else{  //player X
      box.innerText = "X";
      turnO = true;
    }
    box.dissabled = true;

    checkWinner();
  });
}); 

const showWinner = (winner) => {
  msg.innerText = `Congratulations! Player  + ${winner} +  wins!`;
  msgContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        console.log("Winner", pos1Val);
        showWinner(pos1Val);
      }
    }
  }
};
