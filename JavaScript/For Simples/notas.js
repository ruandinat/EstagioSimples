//Exe imprimi e calcula media nota por nota.
var notas = [10, 6.5, 8 ,9]; //array de notas

var soma = 0;//variavel iniciada para ser somada

var alunos = ['Ana','Bruno','Carla', 'Daniel','Eduardo','Fernanda', 'Gabriel',
'Helena','Igor','Julia','Kevin','Lara','Marcos','Natalia','Otavio',
'Paula','Rafael','Sara','Tiago','Vivian'];

for (var i = 0; i < notas.length; i++){

    
    soma += notas[i];//soma nota por nota a cada indice

    var media =soma/notas.length; //faz a media com o tamanho do array

    console.log(media);   
}

// exe imprimi  nomes a seguir
for (var j = 0; j < alunos.length; j++){
    console.log(alunos[j]);
}

