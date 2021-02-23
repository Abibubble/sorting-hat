let house;

function sortHouse() {
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
    switch (house) {
        case "Gryffindor":
            // Show Gryffindor
            break;
        case "Hufflepuff":
            // Show Hufflepuff
            break;
        case "Ravenclaw":
            // Show Ravenclaw
            break;
        case "Slytherin":
            // Show Slytherin
            break;
        default:
            alert("Hmm... I can't make up my mind... Let's try that again!")
            break;
    }
}

// On click, sorting hat disappears, revealing houses. cycle around houses, greying out each one in order
// Alight on a house at random, pause, then display house name, crest, and info about house
// Restart button clears the house and goes back to the sorting hat.