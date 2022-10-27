//Dado o tamanho da base e da altura de um retângulo, calcular a sua área e o seu perímetro.

let altura = parseInt(prompt("Altura"));
let base = parseInt(prompt("Base"));

const area = altura * base
const perimetro = 2 * (base + altura)
document.write("Area => ", area)
document.write("Perimetro => ", perimetro)