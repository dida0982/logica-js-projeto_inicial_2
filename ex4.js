// 4 Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando length e largura que serão dadas como parâmetro.

// Area of a rectangle = length * width
// Perimeter = (length*2) + (width*2)
function areaAndPerimeterOfRectangle() {
    let width = 4;
    let length = 3;

    let area = length * width;
    let perimeter = ( length * 2 ) + ( width * 2 );

    console.log(`The area of a rectangle of ${length}m of length and ${width}m of width is ${area}m² `);
    console.log(`The perimeter of a rectangle of ${length}m of length and ${width}m of width is ${perimeter}m `);

}

areaAndPerimeterOfRectangle();
