const radiologia = [];
const traumatologia = [];
const dental = [];

const consulta1 = {
    hora: "11:00",
    especialista: "Ignacio Schulz",
    paciente: "Francisca Rojas",
    rut: "9878782-1",
    prevision: "FONASA"
};

const consulta2 = {
    hora: "11:30",
    especialista: "Federico Subercaseaux",
    paciente: "Pamela Estrada",
    rut: "15345241-3",
    prevision: "ISAPRE"
};

const consulta3 = {
    hora: "15:00",
    especialista: "Fernando Wurthz",
    paciente: "Armando Luna",
    rut: "16445345-9",
    prevision: "ISAPRE"
};

const consulta4 = {
    hora: "15:30",
    especialista: "Ana María Godoy",
    paciente: "Manuel Godoy",
    rut: "17666419-0",
    prevision: "FONASA"
};

const consulta5 = {
    hora: "16:00",
    especialista: "Patricia Suazo",
    paciente: "Ramon Ulloa",
    rut: "14989389-K",
    prevision: "FONASA"
};

radiologia.push(consulta1);
traumatologia.push(consulta2);
dental.push(consulta3, consulta4, consulta5);

// Mostrar por pantalla la primera y última atención de cada listado
mostrarPrimeraYUltimaAtencion("Radiología", radiologia);
mostrarPrimeraYUltimaAtencion("Traumatología", traumatologia);
mostrarPrimeraYUltimaAtencion("Dental", dental);

// Mostrar el contenido en una tabla para todos los listados
mostrarContenidoEnTabla("Radiología", radiologia);
mostrarContenidoEnTabla("Traumatología", traumatologia);
mostrarContenidoEnTabla("Dental", dental);

function mostrarPrimeraYUltimaAtencion(listadoNombre, listado) {
    if (listado.length > 0) {
        document.write('<p>' + listadoNombre + '</p>');
        document.write('<p>Primera atención: ' + listado[0].paciente + ' - ' + listado[0].prevision + ' | Última atención: ' + listado[listado.length - 1].paciente + ' - ' + listado[listado.length - 1].prevision + '</p>');
    } else {
        document.write('<p>No hay consultas en ' + listadoNombre + '</p>');
    }
}

function mostrarContenidoEnTabla(listadoNombre, listado) {
    if (listado.length > 0) {
        document.write('<h2>Contenido en tabla para ' + listadoNombre + '</h2>');
        document.write('<table border="1">');
        document.write('<tr><th>Hora</th><th>Especialista</th><th>Paciente</th><th>Rut</th><th>Previsión</th></tr>');

        for (let i = 0; i < listado.length; i++) {
            document.write('<tr>');
            document.write('<td>' + listado[i].hora + '</td>');
            document.write('<td>' + listado[i].especialista + '</td>');
            document.write('<td>' + listado[i].paciente + '</td>');
            document.write('<td>' + listado[i].rut + '</td>');
            document.write('<td>' + listado[i].prevision + '</td>');
            document.write('</tr>');
        }

        document.write('</table>');
    } else {
        document.write('<p>No hay consultas en ' + listadoNombre + '</p>');
    }
}