function algoritmodenumeronegativoypositivo(){
    let numero=parseFloat(prompt("ingrese un numero"));

if (numero > 0){
    alert("el numero es positivo");
}else if(numero < 0){
    alert("el numero es negativo");
}else{
    alert("el numero es igual a cero");
}
}

function numeroparoimpar(){
let numero=parseFloat(prompt("ingrese un numero"));

if (numero % 2 ===0){
    alert("el numero es par");
}else{
    alert("el numero es impar");
    }
    }

    function mayordedosnumeros(){
        let numero1=parseFloat(prompt("ingrese un numero"));
        let numero2=parseFloat(prompt("ingrese el segundo numero"));
        if (numero1 > numero2){
            alert("el numero mayor es:"+numero1);
            }else if(numero2 > numero1){
                alert("el numero mayor es:+numero2");
    }else{
        alert("los dos numeros son iguales");
}
}

function descuentoporcompra(){
    let compra=parseFloat(prompt("ingrese el valor de la compra señor usuario"));
    let descuento=0;

    if(compra >=200000){
    }
    let total=compra-descuento;
    alert("descuentos $"+descuento+"/ntotal a pagar $"+total);
}
 
function temperaturadeunaciudad(){
    let temperatura=parseFloat(prompt("ingrese la temperatura"));
    if(temperatura>30){
        alert("la temperatura es alta");
    }else if(temperatura<30){
        alert("la tempeartura es baja");
    }
}

function mayordeedad(){
    let edad=parseFloat(prompt("ingrese su edad"));
    if(edad>18){
        alert("usted es mayor de edad");
    }else if(edad<18){
        alert("usted es menor de edad");
    }
}

function retirodebanco(){
    let saldodisponible
    let valorretirar

    saldodisponible=parseFloat(prompt("ingrese el saldo siponible de la cuenta"));
    valorretirar=parseFloat(prompt("inrese el valor qqur desea retirar"));

    if (valorretirar > 0&& valorretirar <= saldodisponible){
        alert("retiro realizado correctamente");
        saldodisponible=saldodisponible-valorretirar
        alert("su saldo restante es: $"+saldodisponible);
    }else{
        alert("retiro rechazado fondos insuficientes");
    }
}

function enviogratuito(){
    let valorcompra
    let costoenvio
    let totalpagar

    valorcompra=parseFloat(prompt("ingrese el valor de la compra:"));
    if (valorcompra >= 1500000){
        costoenvio=0;
        alert("su envio es gratuito");
    }else{
        costoenvio=12000;
        alert("debe pagar $12.000 por el envio gracias :)");
    }
    alert("valor de la compra: $"+ valorcompra);
    alert("costo de envio: $"+ costoenvio);
    alert("total a pagar: $"+totalpagar);
}

function numeromayoromenorqueelotro(){
    let numero1
    let numero2

    numero1=parseFloat(prompt("ingrese el primer numero"));
    numero2=parseFloat(prompt("ingrese el segundo numero"));

    if (numero1 > numero2){
        alert("el primer numero es mayor que el segundo");
    }else if(numero1 < numero2){
        alert("el primer numero es menor que el segundo");
    }else{
        alert("los dos numeros son iguales");
    }
}

function tarifaparqueadero(){
    let horas
    let valorpagar
    horas=parseFloat(prompt("ingrese la cantidad de horas de parqueadero"));

    if (horas <=0){
        alert("la cantidad de horas no es valida");
    }else if(horas <=1){
        valorpagar=5000;
        alert("el valor a pagar es: $"+valorpagar);
    }else if(horas <=3){
        valorpagar=10000;
        alert("el valor a pagar es: $"+valorpagar);
    }else if (horas <=6){
        valorpagar=18000;
        alert("el valor a pagar es: $"+valorpagar);
    }else{
        valorpagar=25000;
        alert("el valor a pagar es; $"+valorpagar);
    }
}

function tarifadetransporte(){
    let edad=parseFloat(prompt("ingrese la edad del pasajero"));
    let tarifa

    if(edad >=0 && edad <5){
        tarifa=0
        alert("el pasaje es gratis");
    }
    else if(edad >= 5 && edad <= 17){
        tarifa=2000
        alert("el valor del pasaje es $2.000");
    }else if(edad >=18 && edad <=59){
        tarifa=3500
        alert("el valor del pasaje es 3500");
    }
    else if(edad >= 60){
        tarifa=2500
        alert("el valor del pasaje es 2500");
    }
    else{
        alert("edad no valida")
    }
}

function clasificaciondevelocidad(){
    let velocidad=parseFloat(prompt("ingrese el valor de la velocidad del vehiculo en km/h"));

    if(velocidad <0){
        alert("la velocidad no puede ser negativa");
    }else if (velocidad <=30){
        alert("la velocidad es baja")
    }else if( velocidad <=60){
        alert("velocidad moderada");
    }else if (velocidad <=100){
        alert("velocidad alta");
    }else{
        alert("velocidad muy alta");
    }
    
}

function mesydias(){
     let mes=parseFloat(prompt("ingrese el numero del un mes (1 al 12):"));

     if(mes ===1|| mes ===3|| mes===5||mes===7||mes===8||mes===10||mes===12){
        alert("el mes ingresado tiene 31 dias");
     }else if (mes===4||mes===6||mes===9||mes===11){
        alert("el mes tiene 30 dias");
     }else if(mes ===2){
        alert("el mes tiene 28 dias");
     }else{
        alert("el numero es invalido in grese un numero del 1 al 12 ");
     }
}

function accesoaunaatracion(){
    let edad=parseFloat(prompt("ingrese por favor su edad"));
    let estatrura=parseFloat(prompt("ingrese su estatura en metros"));

    if(edad >=12 && estatrura >=1.40){
        alert("no puede ingresar a la atracion");
    }else{
        alert("no puede ingresar a la atracion");
    }
}

function descuentoseguncliente(){
    let tipocliente
    let compra
    let valorcompra
    let descuento
    let total

    tipocliente=parseFloat(prompt("ingrese el tipo de cliente normal o frecuente"));
    valorcompra=parseFloat(prompt("ingrese el valor de la compra"));
descuento=0

if (compra>=200000){
    if(tipocliente=="normal"){
        descuento=valorcompra*0.05;
    }else if(tipocliente=="frecuente"){
        descuento=valorcompra*0.10;
    }
}
total=valorcompra-descuento;
alert("el descuento es:$"+descuento);
alert("el total a pagar es :$"+total);
}

function cajeroautomatico(){
    let saldo=parseFloat(prompt("ingrese el saldo disponible en su cuenta"));
    let retiro=parseFloat(prompt("ingrese el valor de retiro"));
    if (retiro <=0){
        alert("el valor tiene que ser mayor a 0");
    }else if(retiro%10000 !=0){
        alert("el valor tiene que ser multiplo de 10000");
    }else if(retiro>saldo){
        alert("saldo insuficiente");
    }else{
        let nuevosaldo=saldo-retirar;
        alert("retiro exitosos.nuevo saldo"+nuevosaldo);
    }
}

function validarcontraseña(){
    let contraseña;
    let numero;
     
    contraseña=parseFloat(prompt("ingrese una contraseña"));

    if(contraseña.length<8){
        alert("la contraseeña debe de tener minimo 8 caracteres");
    }else if(contraseña=="12345678"){
        alert("la contraseña no puede ser 12345678");
    }else{
        numero=parseFloat(prompt("la contraseña debe de contar con al menso un numero.ingrese 1 si tiene un numero o 0 sino tiene"));
        if (numero==1){
            alert("contraseña valida");
        }else{
            alert("la contraseña debe de tener al menos un numero");
        }
    }
}

function añobiciesto(){
    let año=parseInt(prompt("ingrese un año"));

    if(año %400===0){
        alert("el año "+ año +"es biciesto.");
    }else if(año %100===0){
        alert("el año"+año+"no es bisciesto");
    }else if(año%4===0){
        alert("el año"+año+"es biciesto");
    }else{
        alert("el año"+año+"no es biciesto");
    }
}