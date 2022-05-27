import "./styles.css";

let nro1: number | null = Number(
  prompt(
    "Ingrese un número entero para calcular la cantidad de divisores que tiene.",
    "Por ejemplo: 16."
  )
);

function esMultiplo(nro1: number, nro2: number): boolean {
  if (nro1 % nro2 === 0) {
    return true;
  } else {
    return false;
  }
}

function cantidadDeDivisores(nro1: number) {
  let cantidadDiv: number = 0;

  for (let nro2 = 1; nro2 <= nro1; nro2++) {
    if (esMultiplo(nro1, nro2) === true) {
      cantidadDiv = cantidadDiv + 1;
    }
  }
  return cantidadDiv;
}
alert(nro1 + " tiene " + cantidadDeDivisores(nro1) + " divisores.");
