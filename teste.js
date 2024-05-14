var teclado = require("prompt-sync")();
// Função para encontrar o maior número em um vetor
function encontrarMaiorNumero(vetor) {
    // Inicializa a variável para armazenar o maior número
    var maior = vetor[0];
    // Percorre o vetor para comparar cada elemento
    for (var i = 1; i < vetor.length; i++) {
        if (vetor[i] > maior) {
            maior = vetor[i];
        }
    }
    // Retorna o maior número encontrado
    return maior;
}
// Função principal
function encontrarEMostrarMaiorNumero() {
    // Cria um vetor para armazenar os números
    var numeros = [];
    // Loop para solicitar a entrada de 10 números
    for (var i = 0; i < 10; i++) {
        // Solicita a entrada do número e converte para tipo numérico
        var numero = parseInt(teclado("Digite o ".concat(i + 1, "\u00BA n\u00FAmero: ")));
        // Adiciona o número ao vetor
        numeros.push();
    }
    // Chama a função para encontrar o maior número no vetor
    var maiorNumero = encontrarMaiorNumero(numeros);
    // Mostra o maior número encontrado no console
    console.log("O maior n\u00FAmero digitado \u00E9: ".concat(maiorNumero));
}
// Chama a função principal para iniciar o programa
encontrarEMostrarMaiorNumero();
