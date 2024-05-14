/* nome: luís Otávio Bordin Pereira n°16
1 – Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.*/
var soma = 0;
for (var cont = 0; cont <= 50; cont++) {
    soma = soma + cont;
}
console.log("A soma de todos os numeros naturais de 0 a 50 \u00E9 igual a ".concat(soma));
