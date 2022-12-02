var salvar = document.querySelector('#btn_submit');
salvar.addEventListener("click",function(event){
    event.preventDefault();
   var formulario = document.querySelector('#formulario')
   console.log(formulario.nome.value);
   console.log(formulario.endereco.value);
   console.log(formulario.idade.value);
   console.log(formulario.filhos.value);
   console.log(formulario.salario.value);
   console.log(formulario.plano.value);

   var linhatrabalhador = document.createElement("tr")
   var colNome = document.createElement("td")
   var colEndereco = document.createElement("td")
   var colIdade = document.createElement("td")
   var colSalario = document.createElement("td")
   var colFilhos = document.createElement("td")
   var colPlano = document.createElement("td")


colNome.textContent =formulario.nome.value;
colEndereco.textContent =formulario.endereco.value;
colIdade.textContent =formulario.idade.value;
colFilhos.textContent =formulario.filhos.value;
colSalario.textContent =formulario.salario.value;
colPlano.textContent =formulario.plano.value;



    var tabela= document.querySelector("#table").querySelector("tbody")
    linhatrabalhador.appendChild(colNome)
    linhatrabalhador.appendChild(colEndereco)
    linhatrabalhador.appendChild(colIdade)
    linhatrabalhador.appendChild(colSalario)
    linhatrabalhador.appendChild(colFilhos)
    linhatrabalhador.appendChild(colPlano)
    tabela.appendChild(linhatrabalhador);
    var colAcoes = document.createElement("td");
    colAcoes.classList.add("td-acoes");
    var botaoExcluir = document.createElement("span");
    botaoExcluir.classList.add("btn_excluir");
    botaoExcluir.textContent ="Excluir"
    colAcoes.appendChild(botaoExcluir)
    linhatrabalhador.appendChild(colAcoes)
    formulario.reset();
})