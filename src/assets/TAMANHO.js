
 document.getElementById("combohamburguer").addEventListener("click", clicar);
 document.getElementById("combohamburguer").addEventListener("change", clicar);
 document.getElementById("combohamburguer").addEventListener("mouseover", clicar);

function clicar() {

  alert("abrindo combo")

}

function fechar(){



alert("fechado")

}


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = x.length }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}








