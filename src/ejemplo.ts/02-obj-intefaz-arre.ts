


interface Alumnos{
    matricula?:number;
    nombre:string;
    email:string;
}

const alumnos:Alumnos={
    nombre: 'juan',
    email: 'juan@gmail.com',
}

console.table(alumnos.nombre);

let mascotas:string[]=['perro','gato','perico']

mascotas[1]='perico verde';
mascotas.push('gato dos');
console.table(mascotas);

let tem:(string|number)[]=[];
tem.push('RCR');
tem.push(34)