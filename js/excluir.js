var table = document.querySelector('table');
table.addEventListener("click", function(event){
  var elementoClicado= event.target
  if(elementoClicado.classList.contains("btn_excluir")){
    var elementofilho = elementoClicado.parentNode
    var elementoPai = elementofilho.parentNode
    elementoPai.remove();
  }
  
})