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
            // Navigate to Gryf screen
            break;
        case "Hufflepuff":
            // Navigate to Huff screen
            break;
        case "Ravenclaw":
            // Navigate to Rave screen
            break;
        case "Slytherin":
            // Navigate to Slyt screen
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