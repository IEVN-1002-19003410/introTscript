
class Persona4{
    protected nombre:string;
    protected edad:number;
    constructor(a:string,b:number){
        this.nombre=a;
        this.edad=b;
    }
    imprimir(){
        console.log(`Nombre: ${this.nombre}  Edad: ${this.edad}`);
    }
}
class Empleado extends Persona4{
    private sueldo:number;
    constructor(a:string,b:number,s:number){
        super(a,b);
        this.sueldo=s;
    }
    imprimir(){
        console.log(`Sueldo: ${this.sueldo}`);
    }
    pagaImpuestos(){
        if(this.sueldo>5000)
        console.log(`${this.nombre} debe de pagar impuestos: Sueldo: ${this.sueldo}`);
        else
        console.log(`${this.nombre} no debe de pagar impuestos: Sueldo: ${this.sueldo}`);
    }
}
const persona4=new Persona4('Juan',45);
persona4.imprimir();
const empleados1=new Empleado('Ana',22,7000);
empleados1.imprimir();
empleados1.pagaImpuestos();