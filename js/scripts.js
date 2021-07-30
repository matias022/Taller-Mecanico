function hola() {
    alert('hola mundo');
}

function validarRut() {
    var rut = document.getElementById('txtRut').value;
    var suma = 0;
    var num = 3;
    for (let index = 0; index < 8; index++) {
        var caracter = rut.slice(index, index+1);
        console.log(caracter + ' x ' + num);
        suma = suma + (caracter * num);
        num = num - 1;
        if (num == 1) {
            num = 7;
        }
    }
    console.log('Suma:'+suma);
    var resto = suma  % 11;
    var dv = 11 - resto;
    if ( dv > 9) {
        if ( dv == 10) {
            dv='K';
        }else{
            dv=0;
        }
    }
    console.log('DV:' + dv);
    var dv_usuario = rut.slice(-1).toUpperCase();
    if ( dv != dv_usuario ) {
        //alert('rut es incorrecto');
        //Swal.fire('el rut es incorrecto');
        Swal.fire({
            icon: 'error',
            title: 'Rut',
            text: 'el digito verificador del rut es incorrecto'    
        });
        return false;
    }
    console.log('rut correcto');
    return true;
}

function validaFecha() {
    var fechaUsuario = document.getElementById('txtFechaNaci').value;
    console.log(fechaUsuario);
    var fechaSistema = new Date();
    console.log(fechaSistema);
    ////////////////////////////////////// 2021-04-12
    var ano = fechaUsuario.slice(0,4);
    var mes = fechaUsuario.slice(5,7);
    var dia = fechaUsuario.slice(8,10);

    var fechaNuevaUsuario = new Date(ano,(mes-1),dia);
    console.log(fechaNuevaUsuario);
    //////////////////////////////////////
    if ( fechaNuevaUsuario >= fechaSistema) {
        alert('fecha es incorrecta');
        return false;
    }

    var unDia = 24 * 60 * 60 * 1000;//transformar un dia en milisegundos
    var diferencia = Math.trunc( (fechaSistema.getTime() - fechaNuevaUsuario.getTime()) / unDia);
    console.log(diferencia);
    var anos =Math.trunc(diferencia / 365);
    console.log('Años:' + anos);
    if (anos < 18) {
        alert('usted es menor de edad, solo tiene '+ anos+' años de edad');
        return false;
    }
    return true;
}

/////////////////////////////////////
function validacionForm() {
    var resp = validarRut(); // retorna true o false
    if ( resp == false) {
        return false;
    }
    resp = validaFecha();
    if ( resp == false) {
        return false;
    }
    return true;

}

