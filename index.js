const num1 = Math.ceil(Math.random() * 20)
const num2 = Math.ceil(Math.random() * 10)

let questionEl = document.getElementById("question")
questionEl.innerText = `What is ${num1} - ${num2}`

let correctAns = num1 - num2
let formEl = document.getElementById("form")
let inputEl = document.getElementById("input")
let submitEl = document.getElementById("btn")

let score = JSON.parse(localStorage.getItem("score"))
let scoreEl = document.getElementById("score")
/* scoreEl.innerText = `score: ${score}` */
if (!score) {
    score: 0;
}
scoreEl.innerText = `score: ${score}`
formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value
    if (userAns === correctAns) {
        score++
        updateLocalStorage()
    } else {
        score--
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score))
}