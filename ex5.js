// 5 Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu radius que será fornecido como parâmetro. Considere Pi = 3,14.

// perimeter, radius, pi= 3.14, area.
// area = 3.14 * radius**2
// perimeter = 2 * 3.14 * radius
function perimeterAndAreaOfCircle ( )
{
    let pi = 3.14;
    let radius = 5;
    let circleOfArea = pi * radius ** 2;
    let circleOfPerimeter = 2 * pi * radius;

    console.log( `
        Information:
        pi = ${pi}
        radius = ${radius}

        The area of circle is ${circleOfArea.toFixed(2)}cm²
        The area of perimeter is ${circleOfPerimeter.toFixed(2)}cm
        `);

}

perimeterAndAreaOfCircle();
