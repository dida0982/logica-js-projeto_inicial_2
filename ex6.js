// 6 Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.

// multiplication table.

let title6 = document.querySelector( 'h1' );
title6.innerHTML = 'Multiplication Table.'

function multiplicationTable() {
    let multiplicador = 9;
    let fatores = 1;
    while (fatores<=10) {
        productors = fatores * multiplicador;
        console.log(`${fatores} * ${multiplicador} = ${productors}`);
        fatores++
    }
}
multiplicationTable();
