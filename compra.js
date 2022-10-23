let btnResumen = document.getElementById("resumen");


let enviar = evento => {
    evento.preventDefault();
    let precio = 200;
    let aPagar = document.getElementById("saldo");
    var dtoCat = document.getElementById("categoriaInput").value;
    var cant = parseInt(document.getElementById("cantidadInput").value);
    var total;

    if (isNaN(cant)){
        aPagar.innerHTML ="Ingrese una cantidad válida";
    }else{
            switch (dtoCat) {

                case '1':
                    total = cant * precio * ((100 - 80) / 100);
                    aPagar.innerHTML = `Total a Pagar: $${total}`;
                    break;
                case '2':
                    total = cant * precio * ((100 - 50) / 100);
                    aPagar.innerHTML = `Total a Pagar: $${total}`;
                    break;
                case '3':
                    total = cant * precio * ((100 - 15) / 100);
                    aPagar.innerHTML = `Total a Pagar: $${total}`;
                    break;
            }
        }
    
    // switch (dtoCat) {

    //     case '1':
    //         total = cant * precio * ((100 - 80) / 100);
    //         aPagar.innerHTML += ` ${total}`;
    //         break;
    //     case '2':
    //         total = cant * precio * ((100 - 50) / 100);
    //         aPagar.innerHTML += ` ${total}`;
    //         break;
    //     case '3':
    //         total = cant * precio * ((100 - 15) / 100);
    //         aPagar.innerHTML += ` ${total}`;
    //         break;
    // }

}


btnResumen.addEventListener("click", enviar);