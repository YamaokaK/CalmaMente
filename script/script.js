var animateButton = function(e) {

    e.preventDefault;
    //reset animation
    e.target.classList.remove('animate');
    
    e.target.classList.add('animate');
    setTimeout(function(){
      e.target.classList.remove('animate');
    },700);
  };
  
  var bubblyButtons = document.getElementsByClassName("bubbly-button");
  
  for (var i = 0; i < bubblyButtons.length; i++) {
    bubblyButtons[i].addEventListener('click', animateButton, false);
  }

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
    var circulo = container.querySelector('.circulo');
    var mensagem = document.querySelector('.mensagem');

    var contador = 0;
    var totalVoltas = 4;

    function animarRespiracao() {
      mensagem.textContent = 'Inspire...';
      circulo.classList.add('expandir');

      setTimeout(function() {
        mensagem.textContent = 'Segure';

        setTimeout(function() {
          mensagem.textContent = 'Expire..';
          circulo.classList.remove('expandir');
          circulo.classList.add('retrair');

          setTimeout(function() {
            mensagem.textContent = 'Inspire';
            circulo.classList.remove('retrair');
            circulo.classList.add('expandir');

            contador++;
            if (contador < totalVoltas) {
              setTimeout(animarRespiracao, 2000); // Tempo de transição entre expiração e inspiração
            }
          }, 5000); // Tempo de transição entre inspiração e retenção
        }, 2000); // Tempo de retenção da respiração
      }, 6000); // Tempo de transição entre inspiração e retenção
    }

    animarRespiracao();
  }
  

