
var modal = document.getElementById("ModalIDl");

// Get the buttons that open the modal
var artigos = document.getElementsByClassName("topicos__artigos");

// Get the <button> element that closes the modal
var btn = document.querySelector(".fechar");

// When the user clicks on an artigo, open the modal
for (var i = 0; i < artigos.length; i++) {
  artigos[i].onclick = function() {
    modal.style.display = "block";
  };
}

// When the user clicks on the button (x), close the modal
btn.onclick = function() {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function modalBlock() {
    document.getElementById("ModalIDl").style.display="block";
    setInterval(iniciarExercicio(), 100)
}

const contentPagesInfo = {
    ansiedade: ansiedadeData,
    depressao: depressaoData,
    tdah: tdahData,
}

function modalInfo(page) {
    modal = document.getElementById("ModalIDl");
    title = document.getElementById("title");
    conteudo = document.getElementById("txt");
    title.innerHTML = contentPagesInfo[page].info.title;
    conteudo.innerHTML = contentPagesInfo[page].info.text;
    modal.style.display = "block"
}

function modalArtic(page, artic) {
    
}