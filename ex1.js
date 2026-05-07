// test 1 | Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua height, em metros, e weight, em quilogramas, que serão recebidos como parâmetro.

// imc = weight/height**2

function calculateIMC(height, weight) {
    let imc = weight / height ** 2

    return imc.toFixed(2)
}

let height = 1.75
let weight = 96

let resultado = calculateIMC( 1.75, 96 );

console.log( `
    - height ${ height }cm
    - weight ${ weight }kg
    - IMC: ${ resultado }` );
