/*
  
  Padronizações para o JS funcionar com seu código
    O "name" dos seus dados do form devem seguir o seguinte padrão:
      Id: id
      Nome: nome
      Sobrenome: sobrenome
      Data de Nascimento: dataNascimento
      Gênero: genero
      Logradouro: logradouro
      Número: numero
      CEP: cep
      Cidade: cidade
      Estado: estado
      País: pais
      Email: email
      Telefone: telefone

  Atribuir um id com o valor "dados-colaborador" dentro da tag "tbody" da tabela
  Atribuir um id com o valor "botaoIncluir" dentro do botão de submit do formulário de envio
  Atribuir um id com o valor "botaoAlterar" dentro do botão de submit do formulário de envio
  Atribuir um id com o valor "deletarColaborador" dentro do botão de exclusão de colaborador encontrado na modal de confimação da remoção
  Atribuir um id com o valor "excluirModal" na "div" principal (Primeira div) da modal de confirmação de exclusão de colaborador
  Atribuir um id com o valor "cadastroColaboradorModal" dentro da modal de cadastro

  Instruções para apresentação:

    Código Indentado;
    Utilização das Modais de Cadastro/Edição e de confirmação de exclusão
    Utilização de Responsividade no formulário
    Todos Inputs e Labels utilizando pelo menos uma classe do Bootstrap
   
  Opcionais:
    Utilização de no mínimo 1 Campo com Input Group
    Tabela Responsiva 
    Utilizar cards/accordion para a separação de blocos("Dados Pessoais", "Endereço", "Contato") 

  Campos da tabela
    Nome
    Data de Nascimento
    Cidade
    Email
    Alterar
    Excluir

  Importar JS 
  <script src="script.js"></script> 

*/


window.onload = function () {
  colaboradores();
}

function getColaborador(){
   return JSON.parse(localStorage.getItem('colaboradores'));
}

function setColaborador(c){
   localStorage.setItem('colaboradores', JSON.stringify(c));
}

function colaboradores(){

   var colaboradores = JSON.parse(localStorage.getItem('colaboradores'));
   let placeholder = document.querySelector("#dados-colaborador");
   let out = "";
   for(let col of colaboradores){
      out += `
         <tr>
            <td scope="row">${col.nome}</td>
            <td scope="row">${col.dataNascimento}</td>
            <td scope="row">${col.cidade}</td>
            <td scope="row">${col.email}</td>
            <td scope="row">
               <a href="#" class="d-flex justify-content-center"> 
                  <i class="fa fa-edit me-3" id="alterar" aria-hidden="true" data-bs-toggle="modal" data-bs-target="#cadastroColaboradorModal" onclick="modalAlterar(${col.id})"></i>
               </a>
            </td> 
            <td scope="row">
               <a href="#" class="d-flex justify-content-center"> 
                  <i class="fa fa-trash me-3" id="excluir" data-bs-toggle="modal" data-bs-target="#excluirModal" onclick="modalDelete(${col.id})" aria-hidden="true"></i>
               </a>
            </td> 
         </tr>
      `;
   }
 
   placeholder.innerHTML = out;
};

document.getElementById("botaoIncluir").addEventListener("click", cadastrarColaborador);
document.getElementById("botaoAlterar").addEventListener("click", alterarColaborador);
document.getElementById("deletarColaborador").addEventListener("click", deletarColaborador);
document.getElementById("cadastroModal").addEventListener("click", cadastroModal);

function cadastrarColaborador(){

      var arrayColaborador = getColaborador();
      var c = [];

      if(arrayColaborador == null || arrayColaborador.length == 0){
         var cod = 1;
      }else{
         var cod = parseInt(arrayColaborador.at(-1).id) + 1;
         c = arrayColaborador;
      }

      var colaborador = {
         id: cod,
         nome: document.querySelector("[name='nome']").value,
         sobrenome: document.querySelector("[name='sobrenome']").value,
         dataNascimento: document.querySelector("[name='dataNascimento']").value,
         cidade: document.querySelector("[name='cidade']").value,
         email: document.querySelector("[name='email']").value,   
         genero: document.querySelector("[name='genero']:checked").value,
         logradouro: document.querySelector("[name='logradouro']").value,
         numero: document.querySelector("[name='numero']").value,
         cep: document.querySelector("[name='cep']").value,
         estado: document.querySelector("[name='estado']").value,
         pais: document.querySelector("[name='pais']").value,
         telefone: document.querySelector("[name='telefone']").value,
      }

      c.push(colaborador)
      setColaborador(c);
      colaboradores();
      
};

function alterarColaborador(){

      var id = Number(document.getElementById('botaoAlterar').getAttribute('idcolaborador'));
      var arrayColaborador = getColaborador();

      var colaborador = {
         id: id,
         nome: document.querySelector("[name='nome']").value,
         sobrenome: document.querySelector("[name='sobrenome']").value,
         dataNascimento: document.querySelector("[name='dataNascimento']").value,
         cidade: document.querySelector("[name='cidade']").value,
         email: document.querySelector("[name='email']").value,   
         genero: document.querySelector("[name='genero']:checked").value,
         logradouro: document.querySelector("[name='logradouro']").value,
         numero: document.querySelector("[name='numero']").value,
         cep: document.querySelector("[name='cep']").value,
         estado: document.querySelector("[name='estado']").value,
         pais: document.querySelector("[name='pais']").value,
         telefone: document.querySelector("[name='telefone']").value,
      }

      for(let array in arrayColaborador){
          if(arrayColaborador[array].id == id){
              arrayColaborador[array] = colaborador;
              break;
          }
      }
      setColaborador(arrayColaborador);
      colaboradores();
      
};

function cadastroModal(){
  getLimparCampos();

  document.getElementById("botaoAlterar").style.display = "none";
  document.getElementById("botaoIncluir").style.display = "block";
}

function modalDelete(id){
   var botaoDeletar = document.getElementById('deletarColaborador');
   botaoDeletar.setAttribute("idColaborador", id);
}

function modalAlterar(id){
  getLimparCampos();

  document.getElementById("botaoIncluir").style.display = "none";
  document.getElementById("botaoAlterar").style.display = "block";

   var dados = getColaborador();
   var c = dados.find(data => 
        data.id === id
    );

   document.querySelector("[name='nome']").value = c.nome;
   document.querySelector("[name='sobrenome']").value = c.sobrenome;
   document.querySelector("[name='dataNascimento']").value = c.dataNascimento;
   document.querySelector('input[id="'+c.genero+'"]').checked = true;  
   document.querySelector("[name='logradouro']").value = c.logradouro;
   document.querySelector("[name='numero']").value = c.numero;
   document.querySelector("[name='cep']").value = c.cep;
   document.querySelector("[name='cidade']").value = c.cidade;
   document.querySelector("[name='estado']").value = c.estado;
   document.querySelector("[name='pais']").value = c.pais;
   document.querySelector("[name='email']").value = c.email;
   document.querySelector("[name='telefone']").value = c.telefone;

   var botaoAlterar = document.getElementById('botaoAlterar');
   botaoAlterar.setAttribute("idColaborador", id);
}

function deletarColaborador(){
      
      var id = Number(document.getElementById('deletarColaborador').getAttribute('idcolaborador'));

      var dados = getColaborador();

      var c = dados.find(data => 
          data.id === id
      );

      for(let array in dados){
          if(dados[array].id == c.id){
              dados.splice(array,1);
              break;
          }
      }
      setColaborador(dados);

      colaboradores();

}

function getLimparCampos(){

    document.querySelector("[name='id']").value = '',
    document.querySelector("[name='nome']").value = '',
    document.querySelector("[name='sobrenome']").value = '',
    document.querySelector("[name='dataNascimento']").value = '',
    document.querySelector("[name='cidade']").value = '',
    document.querySelector("[name='email']").value = '',   
    document.querySelector("[name='logradouro']").value = '',
    document.querySelector("[name='numero']").value = '',
    document.querySelector("[name='cep']").value = '',
    document.querySelector("[name='estado']").value = '',
    document.querySelector("[name='pais']").value = '',
    document.querySelector("[name='telefone']").value = ''

    var gen = document.getElementsByName("genero");
    for(var i=0;i<gen.length;i++)
        gen[i].checked = false;

}