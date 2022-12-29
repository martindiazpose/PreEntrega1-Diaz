function limpiar() {
    let opcion = confirm("Si confirma, se borrará el contenido de su carrito");

    if (opcion) {
        cantcel = 0;
        total = 0;
        console.clear();
        console.log("\n\n El carrito quedó vacio! Ya podés volves a empezar\n\n");
    } else {
        console.log("\n\n El carrito no se reinició, podes seguir con tu compra \n\n");
    }
}

function mostrar() {
    console.log(
        "\n\n Total Compras " +
        cantcel +
        " celulares. \n Tenes " +
        Iphone +
        " Iphone; " +
        Samsung +
        " Samsung," +
        Motorola +
        " Motorola.\n El total gastado hasta el momento es de USD$" +
        total + "\n\n");
}

let menu,
    menu2,
    total = 0,
    cantcel = 0,
    Iphone = 0,
    Samsung = 0,
    Motorola = 0;

do {
    menu = Number(prompt(
        "- Ingrese el numero, segun lo que desea hacer: \n \n \
            1) Comprar \n \
            2) Ver carrito \n \
            3) Vaciar carrito. \n \
            0) Salir de la compra"
    ));

    switch (menu) {
        case 1:
            do {
                menu2 = Number(
                    prompt(
                        "- Elija el Celular que quiere comprar:\n\n\
                    1) Iphone (USD$1500) \n \
                    2) Samsung (USD$850) \n \
                    3) Motorola (USD400) \n \
                    0) Nada mas por ahora"
                    )
                );
                switch (menu2) {
                    case 1:
                        total = total + 1500;
                        cantcel++;
                        Iphone++;
                        console.log("\n Añadiste un Iphone al carrito\n");
                        break;
                    case 2:
                        total = total + 850;
                        cantcel++;
                        Samsung++;
                        console.log("\n Añadiste un Samsung al carrito\n");
                        break;
                    case 3:
                        total = total + 400;
                        cantcel++;
                        Motorola++;
                        console.log("\n Añadiste un Motorola al carrito\n");
                        break;
                    case 0:
                        break;
                    default:
                        console.log("\n Por favor, ingresá un numero válido \n");
                        break;
                }
            } while (menu2 != 0);
            break;

        case 2:
            mostrar();
            break;
        case 3:
            limpiar();
            break;
        case 0:
            break;
        default:
            console.log("\n Por favor, ingresá un numero válido \n");
            break;
    }
} while (menu != 0);

console.log(
    "\n\n\n Gracias por tu compra! \n Tu carrito quedó con un total " +
    cantcel +
    " Celular: \n Vas a llevar " +
    Iphone +
    " Iphone " +
    Samsung +
    " Samsung " +
    Motorola +
    " Motorola\n El total gastado es de $" +
    total)
