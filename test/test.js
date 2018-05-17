var horasDia = 8;
var diasSemana = 5;
var ganarMes = 10000;
var diasLibres = 10;
var diasInactividad = 10;
var juntas = 20;
var gastosMensuales = 3000;
var jubilacion = 9;

var salarioBruto = ganarMes * 12;
var horasPosibles = horasDia * diasSemana * 52;
var horaBasica = salarioBruto / horasPosibles;
var horasNoTrabajadas = diasLibres * horasDia + diasInactividad * horasDia;
var tiempoAdmin = juntas/100 * (horasPosibles + horasNoTrabajadas);
var gastosFijos = gastosMensuales * 12;
var precioExtra = (horasNoTrabajadas + tiempoAdmin) * horaBasica + gastosFijos;
var horasEfectivas = (horasPosibles - horasNoTrabajadas - tiempoAdmin) * horaBasica;
var rentabilidad = precioExtra / horasEfectivas;
console.log(horaBasica + (horaBasica * rentabilidad)+(horaBasica * jubilacion/100));
