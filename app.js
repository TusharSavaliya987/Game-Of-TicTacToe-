let boxes = document.querySelectorAll('.box');
let resetBtn = document.querySelector("#reset-btn");

let turnO = true; //player X , player O

const winPattern = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
    [0, 4, 8], [2, 4, 6] //diagonal
];

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {
        if (box.textContent === "") {
            box.textContent = turnO ? 'O' : 'X';
            turnO = !turnO;   
        }
        box.dissabled = true;

        checkWinner();
    });
});

const checkWinner = () => {
    winPattern.forEach((pattern) => {
        const [a, b, c] = pattern;
        if (boxes[a].textContent && boxes[a].textContent === boxes[b].textContent && boxes[a].textContent === boxes[c].textContent) {
            alert(`${boxes[a].textContent} wins!`);
            boxes.forEach((box) => {
                box.textContent = "";
            });
        }
    });
}