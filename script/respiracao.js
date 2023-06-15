  //respiração aqui em baixo
  function openTab(event, tabName) {
    var i, contents, tabs;

    contents = document.getElementsByClassName('content');
    for (i = 0; i < contents.length; i++) {
      contents[i].style.display = 'none';
    }

    tabs = document.getElementsByClassName('tab');
    for (i = 0; i < tabs.length; i++) {
      tabs[i].classList.remove('active');
    }

    document.getElementById(tabName).style.display = 'block';
    event.currentTarget.classList.add('active');
  }

  function iniciarExercicio() {
    var container = document.querySelector('.container');
    var circulo = document.querySelector('.circulo');
    var mensagem = document.querySelector('.mensagem');

    var contador = 0;
    var totalVoltas = 4;

    function animarRespiracao() {
      mensagem.textContent = 'Inspire...';
      circulo.classList.add('expandir');

      setTimeout(function() {
        mensagem.textContent = 'Segure';

        setTimeout(function() {
          mensagem.textContent = 'Expire...';
          circulo.classList.remove('expandir');
          circulo.classList.add('retrair');

          setTimeout(function() {
            mensagem.textContent = 'Inspire';
            circulo.classList.remove('retrair');
            circulo.classList.add('expandir');

            contador++;
            if (contador < totalVoltas) {
              setTimeout(animarRespiracao, 3000); // Tempo de transição entre expiração e inspiração
            }
          }, 5000); // Tempo de transição entre inspiração e retenção
        }, 2000); // Tempo de retenção da respiração
      }, 6000); // Tempo de transição entre inspiração e retenção
    }

    animarRespiracao();
}
  
var modal = document.getElementById("ModalIDl");


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

function modalBlock() {
  document.getElementById("ModalIDl").style.display="block";
  setInterval(iniciarExercicio(), 100)
}