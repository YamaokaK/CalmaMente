var btn = document.querySelector(".fechar");

btn.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function modalInfo() {
    modal = document.getElementById("ModalIDl");
    title = document.getElementById("title");
    conteudo = document.getElementById("txt");
    title.innerHTML = contentPageInfo.info.title;
    conteudo.innerHTML = contentPageInfo.info.text;
    modal.style.display = "block"
}

function modalArtic(articId) {
    modal = document.getElementById("ModalIDl");
    title = document.getElementById("title");
    conteudo = document.getElementById("txt");
    title.innerHTML = contentPageInfo.artics.find(item => item.id === articId).title;
    conteudo.innerHTML = contentPageInfo.artics.find(item => item.id === articId).text;
    modal.style.display = "block"
}