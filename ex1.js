// test 1 | Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua height, em metros, e weight, em quilogramas, que serão recebidos como parâmetro.



// imc = weight/height**2

let title = document.querySelector( 'h1' );
title.innerHTML = 'What is your IMG?';

let paragraph = document.querySelector( 'p' );
paragraph.innerHTML = `
BMI Classification: <br>
-Below 18.5 → Underweight <br>
-18.5 to 24.9 → Normal weight <br>
-25 to 29.9 → Overweight <br>
-30 to 34.9 → Obesity grade I <br>
-35 to 39.9 → Obesity grade II <br>
-40 or more → Obesity grade III <br>
`
function personIMC() {
    let weight = Number(prompt( `What is your weight(kg)?` )) ;
    let height = Number(prompt( `What is your height(cm)?` ));

    height = height / 100

    let imc = weight / ( height ** 2 );

paragraph.innerHTML += `<br><br>Weight: ${weight.toFixed(2)} kg`;
paragraph.innerHTML += `<br><br>Height: ${height.toFixed(2)} cm`;
paragraph.innerHTML += `<br><br>Your IMC is: ${imc.toFixed(2)}`;

    console.log( `Your IMC is: ${ imc.toFixed( 2 ) }` );

    console.log(`

    Your IMC is: ${imc.toFixed(2)}

        Classificação do IMC
    Abaixo de 18,5 → Abaixo do peso
    18,5 a 24,9 → Peso normal
    25 a 29,9 → Sobrepeso
    30 a 34,9 → Obesidade grau I
    35 a 39,9 → Obesidade grau II
    40 ou mais → Obesidade grau III
    
    `);
}

personIMC();
