//Slumpfunktionen 

//tangentbords-input

//*knapp-input

//skriv ut resultat per gissning (använda bokstäver etc)

//Justerar bilden 

//vinst/förlust



//* Meny - tillåta lokal multiplayer 

//* hint? slumpa fram en bokstav ur rätt ord





/* document.getElementById("lettersGuessed").innerHTML += lettersGuessed;
document.getElementById("guessesLeft").innerHTML = guessesLeft;

  guessesLeft--;

  if (guessesLeft === -1) {
    alert("You Loose!");
  } */

// Om spelet är slut

let errorsLeft = 6

hangman.isFinished = function () {
  if (progressWord.indexOf('_') < 0 ){ 
    return "You win!"
  } else if (errorsLeft <= 0){
    return "Game over!"
  }
}

// Skapa en modal dialog som poppar upp när kriterierna för ett avslutat spel
// är = true
// Skapa HTML-klasser för dessa 

function showModal () {
  let modal = document.getElementById("myModal");
  modal.style.display = "block";
}

function closeModal () {
  let modal = document.getElementById("myModal");
  modal.style.display = "none";
}

let isGameOver = true;

if (isGameOver) {
  showModal();
}


// 
