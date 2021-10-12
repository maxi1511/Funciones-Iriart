let cuenta = 0;
let vino = 0;
let cantidadVino = 0;
let propina = 0;

function comprarVino() {
    while (isNaN(vino) || vino == 0 || vino > 3) {
       vino = parseInt(prompt("¿Qué vino le gustaría comprar? Introduce el numero:\n 1:Malbec($700), 2:Cabernet($800), 3:Blend($850)"));
    }
    while (isNaN(cantidadVino) || cantidadVino == 0) {
        cantidadVino = parseInt(prompt("Introduce la cantidad deseada. (Solo números)"));
        
    }

    switch (vino) {
        case 1 :
            vino = "Malbec ($700)";
            cuenta += (700 * cantidadVino);
            break;
        case 2 :
            vino = "Cabernet ($800)";
            cuenta += (800 * cantidadVino);
            break;
        case 3 :
            vino = "Blend ($850)";
            cuenta += (850 * cantidadVino);
            break;
        
    }
}

function darPropina() {
    propina = confirm("¿Te Gustaría dejar un 10% de propina?");

    if(propina) {
        propina = cuenta * 0.10;
        cuenta += propina;
    } else {
        propina = 0;
    }
}

alert("Bienvenido a Wine Mendoza!");

comprarVino();
darPropina();

alert(`
    Detalle de la cuenta:

    - ${cantidadVino} x ${vino}
    - Propina: $${propina}

    Total = $${cuenta}
`);