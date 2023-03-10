let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click', ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click', ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click', ataqueTierra)

    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputHipodogo = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("ydos")
    
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputHipodogo.checked) {
        spanMascotaJugador.innerHTML = "Hipodogo"
    } else if (inputCapipepo.checked) {
        spanMascotaJugador.innerHTML = "Capipepo"
    } else if (inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if (inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if (inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if (inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else { alert("Porfavor selecciona una de las mascotas ") }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("nombre-mascota-enemigo")

    switch (mascotaEnemigo) {
        case 1: spanMascotaEnemigo.innerHTML = "Hipodogo"
            break;
        case 2: spanMascotaEnemigo.innerHTML = "Capipepo"
            break;
        case 3: spanMascotaEnemigo.innerHTML = "Ratigueya"
            break;
        case 4: spanMascotaEnemigo.innerHTML = "Langostelvis"
            break;
        case 3: spanMascotaEnemigo.innerHTML = "Tucapalma"
            break;
        default: spanMascotaEnemigo.innerHTML = "Pydos"
            break;
    }



}

function atqueAletorioEnemigo() {
    let ataqueAleatorio = aleatorio(1, 3)
    switch (ataqueAleatorio) {
        case 1: ataqueEnemigo = "FUEGO"
            break;
        case 1: ataqueEnemigo = "TIERRA"
            break;
        default: ataqueEnemigo = "AGUA"
            break;
    }
    combate()

}

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerHTML = "tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + " " + resultado
    sectionMensajes.appendChild(parrafo)

}

function crearMensajeFinal(resultado) {
    let sectionMensajes = document.getElementById("mensajes")
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultado
    sectionMensajes.appendChild(parrafo)
    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled=true

    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled=true

    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled=true
    let sectionReiniciar=document.getElementById("reiniciar")
    sectionReiniciar.style.display='block'
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    atqueAletorioEnemigo()

}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    atqueAletorioEnemigo()

}
function ataqueTierra() {
    ataqueJugador = "TIERRA" -
        atqueAletorioEnemigo()

}
function combate() {
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")
 
    
        
    
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje("EMPATE")
    }
    else if ((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")) {
        crearMensaje("GANASTE")
        vidasEnemigo--
        spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        crearMensaje("PERDISTE")
        vidasJugador--
        spanVidasJugador.innerHTML = vidasJugador
    }
    vidas()

   
}


function vidas() {
    if (vidasEnemigo==0) {
        crearMensajeFinal("FELICITACIONES GANASTE")

    } else if (vidasJugador==0) {
        crearMensajeFinal("lo siento perdiste :( ")
    } 

}

function reiniciar(){
    location.reload()
}
window.addEventListener('load', iniciarJuego)
