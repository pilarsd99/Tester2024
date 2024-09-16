let nombre ="Hola,Pilar";
let apellido = 'SAHONERO';
let quienSos ="Bar \"la tortuguita\"";
let michi = {
    nombre:"Popi", 
    edad:4,
    comida : {
        marca:'hills',
        precio: 1555,
    }
};
//let x='';
function palabras(x){
    let y='';
    let segpar= x.slice(1,x.lenght)
    y = x[0].toUpperCase()+segpar.toLowerCase();
    return y;
}

//quienSos = nombre+' '+apellido;
quienSos = `${nombre} ${apellido}`;
//alert(nombre);
//alert(apellido);
//alert(quienSos);
//alert(nombre.length);
//alert(nombre.toUpperCase());
//alert(apellido.toLowerCase());
//alert(nombre.replace('Pilar', 'Pablo'));
//alert(nombre.split(',')[0]);
//alert(`${michi.nombre} ${michi.edad}`);
//alert(michi.nombre.length);
//alert(michi.comida.precio);
alert(palabras('montevideo'));
alert(palabras('Y'))
alert(palabras('paLabra'))