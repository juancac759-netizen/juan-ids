function sumar(){
    let n1,n2,suma;

    alert("este algoritmo suma los dos numeros ingresados por el usuario");
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));

    suma=n1+ n2
    alert("el resultrado de la suma es "+suma);
}
    
function operacionesBasicas(){
    let n1,n2,suma,resta,multiplicacion,division;
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));

    suma=n1+n2
    alert("el resultrado de la suma es "+suma);
    resta=n1-n2
    alert("el resultado de la resta es "+resta);
    multiplicacion=n1*n2
    alert("el resultado de la multiplicacion es "+multiplicacion);
    division=n1/n2
    alert("el resultado de la division es "+division)

}

function conversorDeunidades(){
    let m,cm,km;
    m=parseFloat(prompt("ingrese un valor en metros"));

    cm=m/100
    alert("el resultado covertido a centimetros es"+m);
    km=m*1000
    alert("el resultado de la conversion a km es "+km);
}

function conversorDeunidadesdeTemperatura(){
    let c,f,k;
    c=parseFloat(prompt("ingrese un valor en grados celsius"));

    f=(c/1.8)+32
    alert("el resultado de convertir celsius a farenheit es"+f);
    k=c+273.15
    alert("el resultado de convertir de celsius a kelvin"+k)
}

function Areayperimetrodeunrectangulo(){
    let b,a,area,perimetro;
    b=parseFloat(prompt("ingresela base del rectangulo"));
    a=parseFloat(prompt("ingrese la altura del rectangulo"));
area=b/a
alert("el resultado del area de un rectangulo es"+area);
perimetro=2/b+a
alert("el resultado del perimetro de un rectangulo es"+perimetro);
}


function SumaypromediodetresNumeros(){
    let n1,n2,n3,suma,promedio;
    n1=parseFloat(prompt("ingrese el primer numero"));
    n2=parseFloat(prompt("ingrese el segundo numero"));
    n3=parseFloat(prompt("ingrese el tercer numero"));
    suma=n1+n2+n3
    alert("el resultado de la suma es"+suma);
promedio=suma/3
alert("el resultado del promedio es "+promedio);

}

function conversordetiempo(){
    let seg;
    let min;
    let hor;

    seg=parseFloat(prompt("ingrese un valor en segundos"));

    min=seg/60
    alert("el resultado de la conversion a minutos es "+min)
    hor=seg/3600
    alert("el resultado de la conversion a horas es"+hor)
    

}


function conversionPeso(){
    let kilogramos;
    let gramos;
    let libras;
    let toneladas;
alert("algoritmo que convierta de kilogramos a gramos , libras,tonerladas");
kilogramos=parseFloat(prompt("ingrese el peso en kilogramos"));
    gramos=kilogramos*1000;
    libras=kilogramos*2.204462;
    toneladas=kilogramos/1000;

    alert(
        kilogramos+"kg equivalen a:/n"+
        gramos+"gramos/n"+
        libras+"libras/n"+
        toneladas+"toneladas"
    );
}

function pesoenlunayplanetasdelsistemasolar(){
let Pt
let Luna
let mercurio
let venus
let Marte
let jupiter
let saturno
let urano
let neptuno

alert("algoritmo de peso en luna y  planetas del sistemasolar");
    Pt=parseFloat(prompt("ingrese su peso en la tierra"));
    Luna=Pt*0.166
alert("el resultado de la conversion peso en la tierra al de la luna es "+Luna);
mercurio=Pt*0.38
alert("el resultado de la conversion de peso en tierra al de mercurio es "+mercurio);
venus=Pt*0.91
alert("el resultado de la conversion de peso en tierra al de venus es"+venus);
    Marte=pt*0.38
alert("el resultado de conversion de peso en tierra al de marte es"+marte);
jupiter=pt*2.34
alert("el resultado de convertir peso en tierra al de jupiter es"+jupiter);
saturno=pt*1.06
alert("el resulatdon de convertir peso en tierra al de saturno es "+ saturno);
urano=pt*0.92
alert("el resultado de convertir peso en tierra al de urano es "+ urano);
neptuno=pt*1.19
alert("el resultado de la conversion de peso en tierra al de neptuno es" + neptuno);

}

function compradetresproductossubotalytotal(){
    let p1,p2,p3
    let c1,c2,c3
    let sub1,sub2,sub3
    let total 

    alert("algoritmo de compra de tres productos");
    p1=parseFloat(prompt("ingrese el precio del primer producto"));
    c1=parseFloat(prompt("ingrese la cantidad del primer producto"));
    sub1=p1*c1
    p2=parseFloat(prompt("ingrese el precio del segundo producto "));
    c2=parseFloat(prompt("ingrese la cantidad del segundo producto"));
    sub2=p2*c2
    p3=parseFloat(prompt("ingrese el precio del tercer producto"));
    c3=parseFloat(prompt("ingrese la cantidad del tercer producto"));
    sub3=p3*c3
    total=sub1+sub2+sub3
    alert("el resultado del promedio de los productos es "+total);
}

function pagodenominadesalario(){
    let salario
    let dias 
    let otrosdevengados
    let devengado
    let salud
    let pension
    let pagoneto 

    alert("algoritmo de pago de nomina");
    salario=parseFloat(prompt("ingrese el salario que gana mensualmente"));
    dias=parseFloat(prompt("ingrese los dias trabajados al mes"));
    otrosdevengados=parseFloat(prompt("ingrese el valor de otros,devengados"));
devengado= (salario/30)*dias
salud=devengado*0.04
pension=devengado*0.04
pagoneto=otrosdevengados+devengado-salud-pension
alert("el resultado de la nomina con el pgo neto es"+pagoneto);
}

function pagodeunserviciopublico(){
    let consumo
    let precio 
    let porclmp
    let subtotal
    let vallmp
    let total

    alert("algoritmo de pago de un servicio publico");
    consumo=parseFloat(prompt("ingrese el consumo realizado"));
    precio=parseFloat(prompt("ingrese el precio del consumo"));
    porclmp=parseFloat(prompt("Ingrese el porcentaje de impuesto aplicable "));
    subtotal=consumo*precio
    alert("el resultado del subtotal a pagar es"+subtotal)
    vallmp=Subtotal * (PorcImp / 100)
    total=subtotal + vallmp
    alert("el resulato del total del pago del servicio publico es "+total);
    
}

function costodecombustibleparaunviaje(){
    let distanciarecorrida
    let LitrosPorKilometro
    let preciolitrogasolina
    let totalitrosgasolina
    let costototalgasolina
     
    alert("algoritmo de costo de combustible para un viaje");
    distanciarecorrida = parseFloat(prompt("ingrese la distancia recorrida"));
    LitrosPorKilometro = parseFloat(prompt("ingrese la cantidad de litros de combustible que consume el carro por km"));
    preciolitrogasolina = parseFloat(prompt("ingrese el precio del litro de gasolina"));
    totalitrosgasolina= distanciarecorrida * LitrosPorKilometro
    alert("la cantidad de litros de gasolina que se gastan en el viaje es  "+totalitrosgasolina);
    costototalgasolina= totalitrosgasolina * preciolitrogasolina
    alert("el valor de los litros de gasolina utilizados durante el viaje son"+costototalgasolina);
}


function tiempodeviaje(){
   let distancia=parseFloat(prompt("distancia de recorrido en (km):"));
   let velocidad=parseFloat(prompt("velocidad proemdio en (km/h)"));

   let totalminutos=distancia*60/velocidad;
   let minutos =totalminutos%60;
let horas=(totalminutos-minutos)/60;

alert("tiempo estimado de viaje " + horas+"horas y"+minutos+"minutos");
}

function promediodenotas(){
    let n1=parseFloat(prompt("ingrese la nota 1 "));
    let por1 =parseFloat(prompt("ingrese el porcentaje de la 1 nota"));
    let n2=parseFloat(prompt("ingrese la nota 2 "));
    let por2 = parseFloat(prompt("ingrese el porcentaje de la 2 nota"));
    let n3=parseFloat(prompt("ingrese la nota 3"));
    let por3=parseFloat(prompt("ingrese el porcentaje de la 3 nota"));
    let aporte1
    let aporte2
    let aporte3  
    let total

 aporte1=n1 * (por1 / 100)
 aporte2=n2 * (por2/100)
 aporte3=n3 * (por3/100)


     aporte1=n1 * por1 / 100
     aporte2=n2 * por2 /100
     aporte3=n3 * por3/100
    total=aporte1+aporte2+aporte3;
     alert("el resultado en total es "+total);
}


function conversordemonedas(){
    let pesocolombiano=parseFloat(prompt("ingrese un valor en peso colombiano COP $"));
    let dolares
    let euro
    let pesomxn

    dolares=pesocolombiano/4000
    alert("el resultado de convertir de peso colombiano a dolares es"+dolares);
    euro=pesocolombiano/4400
    alert("el resultado de convertir de peso colombiano a euro es "+euro);
    pesomxn=pesocolombiano/200
    alert("el resultado de convertir de peso colombiano a pesomxn es "+pesomxn);

    
}