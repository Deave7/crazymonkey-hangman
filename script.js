
//hämtar varje path från svg och deklarerar
const head = document.getElementById("head");
const body = document.getElementById("body");
const arms = document.getElementById("arms");
const legs = document.getElementById("legs");
const scaffold = document.getElementById("scaffold");

//array för alla delar av svg
const hangman = [scaffold, head, body, arms, legs];

//funktion som döljer alla element i array/gubben när spelet börjar
function startGame(){
    hangman.forEach(function(item){
        item.style.display = "none";
    }
    )
  

}

/* funktionen börjar på 0 och räknar uppåt för varje del av gubben som 
blir synlig med hjälp av Majas provknapp i html
counter är -1 för att börja på 0 för första index i array
kan med hjälp av counter veta när spelet är slut */

/* if(counter > 5){
    if (counter === 4){
        alert("GAME OVER");
    }
} 

första if innan funktionen hangmanPart och andra efter*/

function hangmansvg(counter) {
counter = counter -1;

let hangmanPart = hangman[counter];
hangmanPart.style.display = "block";
/* counter++;  TEST MED MAJAS PROVKNAPP*/
}