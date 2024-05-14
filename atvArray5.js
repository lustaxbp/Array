// nome : Luís Otávio Bordin Pereira 
// 5- Faça um programa que dê entrada manual de 10 números
// armazene em um vetor e ordene esses 10 números crescente,
// fazer uso do laço de repetição for.
var teclado = require("prompt-sync")();
var numeros = new Array;
for (var x = 0; x < 10; x++) {
    numeros[x] = parseInt(teclado("Digite o ".concat(x + 1, "\u00BA n\u00FAmero: ")));
}
for (var y = 0; y < 10; y++) {
    for (var z = y + 1; z < 10; z++) {
        if (numeros[y] > numeros[z]) {
            var vazio = numeros[y];
            numeros[y] = numeros[z];
            numeros[z] = vazio;
        }
    }
}
console.log("Os n\u00FAmero ordenados s\u00E3o ".concat(numeros));
