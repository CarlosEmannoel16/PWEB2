let numero1 = parseInt(prompt("Digite o Primeiro número"));
let numero2 = parseInt(prompt("Digite o Segundo número"));
let numero3 = parseInt(prompt("Digite o Terceiro número"));
let numeros = [numero1, numero2, numero3];
let index = 0;
let x = 1;
let casas = numeros.length;
while (index !== casas) {
  if (numeros[index] > numeros[x]) {
    const numeroMenor = numeros[x];
    numeros[x] = numeros[index];
    numeros[index] = numeroMenor;
  }
  if (x < casas) x++;
  if (x === casas) {index++; x = index+1};
}
for (numero of numeros) {
  document.write(numero + " ");
}



