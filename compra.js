let btnResumen = document.getElementById("resumen");


let enviar = evento => {
    evento.preventDefault();
    let aPagar = document.getElementById("saldo");
    var dtoCat = document.getElementById("categoriaInput").value;
    var cant = parseInt(document.getElementById("cantidadInput").value);
    var total;

    switch (dtoCat) {

        case '1':
            total=0;
            total = cant * 200 * ((100 - 80) / 100);
            console.log(total);
            aPagar.innerHTML+= ` ${total}`;
           
            break;
        case '2':
            total = cant * 200 * ((100 - 50) / 100);
            console.log(total);
            aPagar.innerHTML+= ` ${total}`;
            break;
        case '3':
            total = cant * 200 * ((100 - 15) / 100);
            console.log(total);
            aPagar.innerHTML+= ` ${total}`;
            break;
    }

}


btnResumen.addEventListener("click", enviar);