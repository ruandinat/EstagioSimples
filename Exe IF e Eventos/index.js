document.getElementById("botaoCalcular").addEventListener("click", function(){ console.clear(),verificaInput(); });

function multiplicacao(valorInicial, valorFinal) {
    
    return valorInicial * valorFinal;
}

function soma(valorInicial, valorFinal) {
   
    return valorInicial + valorFinal;
}

function divisao(valorInicial, valorFinal) {
   
    return valorInicial / valorFinal;
}

function verificaMaior(valorInicial, valorFinal) {
   
    let a = multiplicacao(valorInicial, valorFinal)
    let b = soma(valorInicial, valorFinal)

    if (a > b) {
        return a;
    } else {
        return b;
    }
}

function verificaMenor(valorInicial, valorFinal) {
    
    let a = multiplicacao(valorInicial, valorFinal)
    let b = soma(valorInicial, valorFinal)

    if (a < b) {
        return a;
    } else {
        return b;
    }
}

function verificaOU(valorInicial, valorFinal) {
   
    let a = multiplicacao(valorInicial, valorFinal);
    let b = soma(valorInicial, valorFinal);
    let c = divisao(valorInicial, valorFinal);

    if (a > c || b > c) {

        return "Condição OU testada";

    } else {
        return "Não atendeu à Condição";
    }
  
}

function imprimeFuncoes(valorInicial, valorFinal) {
    console.log("Multiplicação:", multiplicacao(valorInicial, valorFinal));
    console.log("Soma:", soma(valorInicial, valorFinal));
    console.log("Divisão:", divisao(valorInicial, valorFinal));
    console.log("Maior entre multiplicação e soma:", verificaMaior(valorInicial, valorFinal));
    console.log("Menor entre multiplicação e soma:", verificaMenor(valorInicial, valorFinal));
    console.log(verificaOU(valorInicial, valorFinal));
}


function calcular(valorInicial, valorFinal) {
    var valorInicial = Number(document.getElementById("valorInicial").value);
    var valorFinal = Number(document.getElementById("valorFinal").value);

    imprimeFuncoes(valorInicial, valorFinal);
}

function verificaInput() {

    let valorInicial = (document.getElementById("valorInicial").value);
    let valorFinal = (document.getElementById("valorFinal").value);

    if (valorInicial !== "" && valorFinal !== "") {

        calcular(valorInicial, valorFinal);

    } else {

        alert("Preencha os campos!!");
    }
}