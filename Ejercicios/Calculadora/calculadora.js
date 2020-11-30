var numeroGuardar;
var operador;
var numero;
var nuevo = false;
var estadoNegativo = false;

function SacarNumero(numero) {
    var caja = document.calculadora.txtcaja.value;
    var caja2 = document.calculadora.txtcaja2.value;

    if (caja === "0") {
        document.calculadora.txtcaja.value = numero;
        document.calculadora.txtcaja2.value = numero;
    } else {
        if (nuevo === true) {
            if (numero === "+" || numero === "-" || numero === "*" || numero === "/") {
                document.calculadora.txtcaja.value = caja + numero;
                document.calculadora.txtcaja2.value = caja2.concat(numero);
            } else {
                document.calculadora.txtcaja.value = numero;
                document.calculadora.txtcaja2.value = numero;
            }
            nuevo = false;
        } else {
            document.calculadora.txtcaja.value = caja + numero;
            document.calculadora.txtcaja2.value = caja2.concat(numero);
        }

    }
}

function retroceder() {
    var value = document.getElementById("txtcaja").value;
    if (value.substr(0, value.length - 1) === "") {
        document.getElementById("txtcaja").value = "0";
        document.getElementById("txtcaja2").value = "";
    } else {
        document.getElementById("txtcaja").value = value.substr(0, value.length - 1);
        document.getElementById("txtcaja2").value = value.substr(0, value.length - 1);
    }
}

function Coma() {
    var caja = document.calculadora.txtcaja.value;
    document.calculadora.txtcaja.value = caja + ".";
    document.calculadora.txtcaja2.value = caja + ".";
}

function MasMenos() {
    var caja2 = document.calculadora.txtcaja.value;
    if (caja2 > 0) {
        if (nuevo === true) {
            document.calculadora.txtcaja2.value = caja2;
            document.calculadora.txtcaja.value = "(" + document.calculadora.txtcaja.value * -1 + ")";
            document.calculadora.txtcaja2.value = "(" + document.calculadora.txtcaja2.value * -1 + ")";
            nuevo = false;
        } else {
            document.calculadora.txtcaja.value = "(" + document.calculadora.txtcaja.value * -1 + ")";
            document.calculadora.txtcaja2.value = "(" + document.calculadora.txtcaja2.value * -1 + ")";
        }

    } else {
        cajaplus = caja2.replace(/[-|(|)]/g, "");
        document.calculadora.txtcaja.value = cajaplus;
        document.calculadora.txtcaja2.value = cajaplus;
    }
}

function Igual() {
    var Resultado = document.calculadora.txtcaja.value;
    var Resultado2 = document.calculadora.txtcaja2.value;
    try {
        if (isNaN(eval(Resultado)) || Resultado.includes('//')) {
            document.calculadora.txtcaja.value = "SyntaxError";
        } else {
            document.calculadora.txtcaja.value = eval(Resultado2);
            nuevo = true;
            estadoNegativo = true;
        }

    } catch (e) {
        document.calculadora.txtcaja.value = "SyntaxError";
    }
}
function Limpiar() {
    document.calculadora.txtcaja2.value = "";
    document.calculadora.txtcaja.value = "0";
}