// ----------------------------------------------------------------------------------------------- Global variables
let house;
let sortPage = document.getElementById("js-sort-page");
let gryffindorPage = document.getElementById("js-gryffindor");
let hufflepuffPage = document.getElementById("js-hufflepuff");
let ravenclawPage = document.getElementById("js-ravenclaw");
let slytherinPage = document.getElementById("js-slytherin");
let music = "off";
const fireAudio = new Audio('assets/audio/fire-sound.mp3');

// ----------------------------------------------------------------------------------------------- Sorting hat sort function

function sortHouse() {
    let randomNumber = Math.floor(Math.random() * 4) + 1; // Gets a random number between 1 and 4
    switch (randomNumber) {
        case 1:
            sortPage.classList.add("hide");
            gryffindorPage.classList.remove("hide");
            break;
        case 2:
            sortPage.classList.add("hide");
            hufflepuffPage.classList.remove("hide");
            break;
        case 3:
            sortPage.classList.add("hide");
            ravenclawPage.classList.remove("hide");
            break;
        case 4:
            sortPage.classList.add("hide");
            slytherinPage.classList.remove("hide");
            break;
        default:
            alert("Hmm... I can't make up my mind... Let's try that again!");
            break;
    }
}

function navigateSort() {
    sortPage.classList.remove("hide");
    gryffindorPage.classList.add("hide");
    hufflepuffPage.classList.add("hide");
    ravenclawPage.classList.add("hide");
    slytherinPage.classList.add("hide");
}

// ----------------------------------------------------------------------------------------------- Audio functions

