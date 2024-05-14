// nome : Luís Otávio Bordin 
// 3- Faça um programa que dê entrada com 10 números
// armazene em um vetor, e verifique qual é o maior
// número e mostre no console.

let teclado = require(`prompt-sync`)();
let numeros: number[] = new Array();
let maior: number = 0;

for (let x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado(`Digite o ${x + 1}º número:`));
}

for (let x = 0; x < 10; x++) {
    if(numeros[x] > maior) {
        maior = numeros[x];
    }
}

console.log(`maior número é ${maior}`);

