// ----------------------------------------------------------------------------------------------- Global variables
let house;
let sortPage = document.getElementById("js-sort-page");
let gryffindorPage = document.getElementById("js-gryffindor");
let hufflepuffPage = document.getElementById("js-hufflepuff");
let ravenclawPage = document.getElementById("js-ravenclaw");
let slytherinPage = document.getElementById("js-slytherin");

// ----------------------------------------------------------------------------------------------- Navigation

function navigate(house) {
    switch (house) {
        case "Gryffindor":
            sortPage.classList.add("hide");
            gryffindorPage.classList.remove("hide");
            break;
        case "Hufflepuff":
            sortPage.classList.add("hide");
            hufflepuffPage.classList.remove("hide");
            break;
        case "Ravenclaw":
            sortPage.classList.add("hide");
            ravenclawPage.classList.remove("hide");
            break;
        case "Slytherin":
            sortPage.classList.add("hide");
            slytherinPage.classList.remove("hide");
            break;
        default:
            alert("Hmm... I can't make up my mind... Let's try that again!");
            break;
    }
}

// ----------------------------------------------------------------------------------------------- Sorting hat sort function

function sortHouse() {
    house = "";
    let randomNumber = Math.floor(Math.random() * 4); // Gets a random number between 1 and 4
    switch (randomNumber) {
        case "1":
            house = "Gryffindor";
            break;
        case "2":
            house = "Hufflepuff";
            break;
        case "3":
            house = "Ravenclaw";
            break;
        case "4":
            house = "Slytherin";
            break;
        default:
            alert("Hmm... I can't make up my mind... Let's try that again!")
            break;
    }
    navigate();
}