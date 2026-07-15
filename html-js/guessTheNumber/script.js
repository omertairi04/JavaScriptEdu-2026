const secretNumber = Math.floor(Math.random() * 100) + 1;

function checkVlera() {
  const vlera = parseInt(document.getElementById("vlera").value);
  const paragraf = document.getElementById("mesazhi");

  if (vlera === secretNumber) {
    paragraf.textContent = "Te barabarta";
  } else if (vlera < secretNumber) {
    paragraf.textContent = "Vlera e userit me e vogel";
  } else {
    paragraf.textContent = "Vlera e userit me e madhe";
  }
}
