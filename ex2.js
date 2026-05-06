// 2 Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.



function factorialNumber() {

    let number = 5;
    let result = 1;

    while ( number >= 1 )
    {
        console.log( `${number} * ${result} = ${result * number}` );

        result = result * number;
        number--;


    }
    console.log(`The factorial of 5 is ${result}.`);
}

factorialNumber();
