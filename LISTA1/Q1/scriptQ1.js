// // alert("jj")

// document.getElementById("buttonAction").addEventListener(
//   ("click",
//   (e) => {
//     //const valor = document.getElementById("inputq1")
//     alert('valor')
//   })
// );

// const q1 = ()=>{
//     alert("jjj")
//     document.getElementById("inputq1").value
// }

let x = parseInt(prompt("Digite um valor. Para encerrar, digite 0"));

while (x !== 0) {
  document.write(x * x);
  document.write("<br>");
  x = parseInt(prompt("Digite um valor. Para encerrar, digite 0"));

}
