class usuario{
    rut;
    nombre;
    fecha;
    //mutadores
    setRut(rut){ this.rut= rut;}
    setNombre(nombre){ this.nombre=nombre;}
    setFecha(fecha){ this.fecha=fecha;}
    //accesadores
    getRut(){ return this.rut;}
    getNombre(){ return this.nombre;}
    getFecha(){ return this.fecha;}
    //customer
    imprimir(){
        return 'Rut:'+this.rut+' Nombre:'+this.nombre+' Fecha:'+this.fecha;
    }
}