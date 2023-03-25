const formatearDinero = (cantidad) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(cantidad);
};

const calcularInteres = (cantidad, plazo) => {
  let interes = 0;

  if(cantidad < 5000){
    interes = cantidad * 1.5;
  }else if (cantidad >= 5000 && cantidad < 10000) {
    interes = cantidad * 1.4;
  }else if (cantidad >= 10000 && cantidad < 15000) {
    interes = cantidad * 1.3;
  }else{
    interes = cantidad * 1.2;
  }

  if(plazo === 6){
    interes *= 1.1;
  }else if(plazo === 12){
    interes *= 1.2;
  }else {
    interes *= 1.3;
  }

  return interes;
}
export{
  formatearDinero,
  calcularInteres
}
