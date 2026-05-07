// 3 Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

// R$4.80 dollars is $1.00 reais.
function moneyConverter() {
    let dollar = 4.80;
    let amountOfDollar = 100.00;

    let real = 1.00;
    let amountOfReal = 100.00;

    let dollarConverter = amountOfDollar * dollar;
    let realConverter =  amountOfReal / dollar;

    console.log(`If your have ${amountOfDollar} dollars, is it: ${dollarConverter.toFixed(2)} reais`);
    console.log(`If your have ${amountOfReal} reais, is it: ${realConverter.toFixed(2)} dollars`);

}

moneyConverter();
