/* nome: luís Otávio Bordin Pereira n°16
1 – Calcule a soma de todos os números de 0 ao 50, essa
soma deve fazer uso do laço de repetição for.*/
let soma : number = 0;

for (let cont = 0 ; cont <= 50; cont++ ){
    soma = soma + cont;
}

console.log(`A soma de todos os numeros naturais de 0 a 50 é igual a ${soma}`)