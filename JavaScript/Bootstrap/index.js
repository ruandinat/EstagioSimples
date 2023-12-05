document.getElementById("botaoIncluir").addEventListener("click", getValuesForm);
  

function getValuesForm() {
    
    var nome = document.getElementById('nome').value;
    var sobrenome = document.getElementById('sobrenome').value;
    var dataNascimento = document.getElementById('dataNascimento').value;
    var logradouro = document.getElementById('logradouro').value;
    var numero = document.getElementById('numero').value;
    var cep = document.getElementById('cep').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.querySelector("[name='estado']").value;
    var pais = document.getElementById('pais').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;

    console.log(nome);
    console.log(sobrenome);
    console.log(dataNascimento);
    console.log(generoValor);
    console.log(logradouro);
    console.log(numero);
    console.log(cep);
    console.log(cidade);
    console.log(estado);
    console.log(pais);
    console.log(email);
    console.log(telefone);
}
