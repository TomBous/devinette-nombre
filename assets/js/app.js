var number;
const try1 = document.querySelectorAll('#try1 span');
const try2 = document.querySelectorAll('#try2 span');
const try3 = document.querySelectorAll('#try3 span');
const try2bloc = document.getElementById('try2');

console.log(try1[0].innerHTML);

const generateNumber = function () {
    number = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
}
generateNumber();
console.log(number);

for (let i = 0; i < try1.length; i++) {
    try1[i].onclick = function () {
        if (try1[i].innerHTML == number) {
            try1[i].classList.add("correct");

        } else {
            try1[i].classList.add("false");
            try2bloc.classList.add("visible");




        }
    }
}

