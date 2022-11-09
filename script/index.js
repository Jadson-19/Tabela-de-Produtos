// MOSTRAR E ESCONDER O TEXTO

function clickCheck(i) {

    let display = document.getElementById(i).style.display;

    if (display == "none") {

        document.getElementById(i).style.display = 'block'
    }

    else {

        document.getElementById(i).style.display = 'none'
    }

}

// CAMPO DE PESQUISA DO INPUT

const inputPesquisa = document.querySelector(".pesquisar");
const produtos = [...document.querySelectorAll('.itensTabela tbody tr')];

function removerAcentos(s) {
    return s.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
  
inputPesquisa.addEventListener('input', () => {

  const search = inputPesquisa.value.toLowerCase();

    produtos.forEach (busca => {

    const matches = removerAcentos(busca.textContent.toLowerCase()).includes(search);

    busca.style.display = matches ? 'block' : 'none';

  });

});


