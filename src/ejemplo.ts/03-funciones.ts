function suma():void{
    console.log(`La suma es ${3+5}`);
}

suma();

function suma2(a:number,b:number):number{
    return a+b;
}

const resultado=suma2(7,8)
//console.log(resultado);
console.log(`La suma es ${resultado}`);

function multiplicar(n1:number,otronumber:number, base:number=7):number{
    let tem=n1*base;

    return tem;
}

console.log(multiplicar(3,5,2))

interface mascotas{
    nombre:string;
    edad:number;
    mostrarEdad:()=>void;
}

function calcular(mascota:mascotas, x:number):void{

    mascota.edad+=x;
    console.log(mascota);

}

const nuevaMascota:mascotas={
    nombre:'Rocky',
    edad:2,
    mostrarEdad(){
        console.log('La edad es: ', this.edad);
    }
}
calcular(nuevaMascota,3);