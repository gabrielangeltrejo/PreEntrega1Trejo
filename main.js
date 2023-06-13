let numeroMagico = parseInt(prompt("Ingrese un número del 0 al 10 y proba si entendes la referencia"))
let numMagic = () => {
    switch (numeroMagico) {
        case 0:
          alert("Y si te lo pide Roman?");
          break;
        case 1:
          alert("Oportuncrisis!!");
          break;
        case 2:
          alert("Francia");
          break;
        case 3:
          alert("Va en contramano Rosalía");
          break;
        case 4:
          alert("Clarita la cuenta");
          break;
        case 5:
          alert("Usted se tiene que arrepentir de lo que dijo");
          break;
        case 6:
          alert("Miameeeee");
          break;
        case 7:
          alert("Cutucutillo");
          break;
        case 8:
          alert("Anda pa´ ya b#b@");
          break;
        case 9:
          alert("Messirve");
          break;
        case 10:
          alert("No me quemes");
          break;
        default:
          alert("Intenta otra vez");
      }
      
}
if (numeroMagico <= 10 && numeroMagico >= 0){
    numMagic ()
} else {
    alert ('No es por ahi rey')
}
