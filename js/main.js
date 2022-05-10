var nome = "Ricardo Nogueira"; // JS FAZ TIPAGEM DINAMICA. VARIAVEL ENTRE ASPAS DEFINE UMA STRING
var num1 = 100; // DEFINE VARIAVEL TIPO INTEIRO
var num2 = 50;
var ano = "2022"; // DEFINE VARIAVEL ANO COMO STRING
var mensagem = "Hoje é quinta-feira.";

//alert("Bem vindo, "+ nome + "! Estamos no ano de " + ano + ".");
//alert(num1 + num2); // SOMA AS VARIAVEIS DO TIPO INTEIRO NUN1 E NUM2
//console.log(mensagem); // USADO PARA PRINTAR NO CONSOLE (F12 NO CHROME)
//console.log(mensagem.replace("quinta", "segunda")); // REPLACE SUBSTITUI QUINTA POR SEGUNDA
//console.log(mensagem.toUpperCase()); // CONVERTE TODA A VARIAVEL PARA CAIXA ALTA
//console.log(mensagem.toLowerCase());

// EXEMPLOS DE ARRAY 

var lista = ["Maçã", "Uva", "Laranja", "Goiaba"]; // CRIA UM ARRAY COM OS NOMES DAS FRUTAS
//console.log(lista[3]); // PRINTA APENAS A POSICAO TRES DO ARRAY, QUE É A GOIABA
//lista.pop("Maçã"); // RETIRA UMA UM ELEMENTO DO ARRAY
//lista.push("Figo"); // ACRESENTA UM ELEMENTO AO ARRAY
//console.log(lista.length); // CONTA A QUANTIDADE DE ELEMENTOS DO ARRAY
//console.log(lista.reverse()); // RETORA A ORDEM INVERSA DOS ELEMENTOS DO ARRAY
//console.log(lista.toString()); // CONVERTE O ARRAY PARA STRING
//console.log(lista.join(", ")); // JOIN USADO PARA CONCATENAR, NESTA CASO COM A VIRGULA


//EXEMPLO DE DICIONARIO
//var carros = {nome:"Uno", cor:"Branca"};
//console.log(carros.nome);
//alert(carros.nome);

// EXEMPLOS DE LISTA DE DICIONARIO

//var carros = [{nome:"Uno", cor:"Branco"}, {nome:"Chevete", cor:"azul"}, {nome:"Landal", cor:"Preto"}, {nome:"Maverik", cor:"Preto"}];
//console.log(carros[1].nome + "\n" + carros[1].cor);
//alert(carros[1].nome);

// CONDICIONAIS, LAÇOS DE REPETIÇÕES E DATAS

/*var idade = prompt("Qual a sua idade?"); // ABRE JANELA PARA INSERIR A IDADE

if (idade >= 18) {
    alert("Maior de 18 anos!");
    
} else {
    alert("Menor de 18 anos. PROIBIDO!");
}*/


/* var count = 0;
while (count <5 ) {
    console.log(count + 1);
    count = count +1; // OU count ++;
    alert(count);
}; */

// EXEMPLOS DE DATA/HORA

var data = new Date();
//alert(data.getFullYear()); // OBTEM O ANO CORRENTE
//alert(data.getMonth()+1); // OBTEM O MES CORRENTE
//alert(data.getDay()); // OBTEM O DIA DA SEMANA (0 = DOMINGO, 6 = SABADO)
//alert(data.getDate()); // OBTEM O DATA DO MES
//alert(data.getHours()); // OBTEM A HORA CORRENTE
//console.log(data.getMinutes()); // OBTEM OS MINUTOS CORRENTE
//console.log(data.getSeconds()); // OBTEM OS MINUTOS CORRENTE

