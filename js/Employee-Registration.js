let empleados = [];
function Empleado(legajo, nombre , apellido , nacimiento , cargo){
    this.legajo = legajo;
    this.nombre = nombre;
    this.apellido = apellido;
    this.nacimiento = nacimiento;
    this.cargo = cargo;
}


function agregarEmpleado(){
    let legajo = document.getElementById('txtLegajo').value;
    let nombre = document.getElementById('txtNombre').value;
    let apellido = document.getElementById('txtApellido').value;
    let nacimiento = document.getElementById('txtNacimiento').value;
    let cargo = document.getElementById('txtCargo').value;

    let empleado = new Empleado(legajo, nombre , apellido , nacimiento , cargo);
    empleados.push(empleado);

    alert('Emplado ha sido agregado');
    limpiarCampos();
    

}

function mostrarEmpleado(){
    let listado = '';
    for (let empleado of empleados){
        for (let prop in empleado){
            listado = listado + prop.toLocaleUpperCase() + ':' + empleado[prop] + ' ,'
        }
        listado = listado + '\n';

    }
    alert(listado);
}

function limpiarCampos(){
    document.getElementById('txtLegajo').value = ' ';
    document.getElementById('txtNombre').value = ' ';
    document.getElementById('txtApellido').value = ' ';
    document.getElementById('txtNacimiento').value = ' ';
    document.getElementById('txtCargo').value = ' ';
}