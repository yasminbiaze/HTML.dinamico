// Criando a função de flecha com frases aleatórias*//
const falar = () => {
    //Criando o vetor de frases
    const frases = [
        "Hoje está um dia bonito!",
        "Falta muito pra sexta-feira?",
        "Qual o cardápio de hoje no almoço?",
        "Vish, hoje tem prova de matemática!!!!",
    ]

    //Criando uma variavel para armazenar a DIV com id "tagarela"
let tagarela = document.getElementById("tagarela");

//Criando variavel controle para frases exibida
let indice = 0

//Criando variavel para número aleatório entre 0 e 1 
// (lembrando que o 1 não entra na conta)
let numero = Math.random()

//Configurando o número para a frase selecionada
if(numero > 0.75)
    indice = 3;
else if(numero > 0.50)
    indice = 2;
else if(numero > 0.25)
    indice =1;  

//Escrevendo a frase para o usuário
tagarela.innerHTML = frases[indice];
};

