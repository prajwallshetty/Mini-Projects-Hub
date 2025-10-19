
var startGame = document.getElementById("start-game")
var usernamePopupPage = document.querySelector(".username-page")
var gamepage = document.querySelector(".game")

startGame.addEventListener('click',() => {
    console.log("clicked")
    window.location.href = "game.html";
})
