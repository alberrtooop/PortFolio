function contador() {
    if (typeof (Storage) !== "undefined") {
        if (sessionStorage.count) {

            sessionStorage.count = Number(sessionStorage.count) + 1;

        } else {
            sessionStorage.count = 1;
        }
        contadorVisitas = sessionStorage.count;
        document.getElementById("Visitas").innerHTML = "Has iniciado la pagina " + contadorVisitas + " veces";
    } else {
        document.getElementById("Visitas").innerHTML = alert("No soprota la web Storage...");
    }
}


function MostrarElemento() {
    document.getElementById("TextoOculto").style.display = 'block';
}
function OcultarElemento() {
    document.getElementById("TextoOculto").style.display = 'none';
}

function DirrigirCalculadora() {
    window.location.href = '../Calculadora/Calculadoras.html',"Calculadora", "width=500, height=500, top=85,left=50";
}

function window_open(url) {
    window.open("../DIV/PruebaDiv.html", "DIV", "width=500, height=500, top=85,left=50");
}


function Open_Tarea2(url) {
    window.open("../Tarea 2/tarea2.html", "Tarea 2", "width=500, height=500, top=85,left=50");
}



/*
 * window.location.href = 'http://www.google.com';
 * window.location.assign("http://www.w3schools.com");
 * window.location = 'http://www.google.com';
 */