let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
    setTimeout(load,4000)
       
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
    botonReiniciar.addEventListener('click',reiniciar)
}

function seleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('seleccionar-arma')
    sectionSeleccionarMascota.style.display = 'none'
    
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

    let inputSuperShotgun = document.getElementById("superShotgun")
    let inputHeavyCannon = document.getElementById("heavyCannon")
    let inputPlasmaRifle= document.getElementById("plasmaRifle")
    let inputBloodPunch = document.getElementById("bloodPunch")
    let inputFlameBelch = document.getElementById("flameBelch")
    let inputIceBomb = document.getElementById("iceBomb")
    
    let spanMascotaJugador = document.getElementById("mascota-jugador")


    if (inputSuperShotgun.checked) {
        spanMascotaJugador.innerHTML = "superShotgun"
    } else if (inputHeavyCannon.checked) {
        spanMascotaJugador.innerHTML = "heavyCannon"
    } else if (inputPlasmaRifle.checked) {
        spanMascotaJugador.innerHTML = "plamaRifle"
    } else if (inputBloodPunch.checked) {
        spanMascotaJugador.innerHTML = "bloodPunch"
    } else if (inputFlameBelch.checked) {
        spanMascotaJugador.innerHTML = "flameBelch"
    } else if (inputIceBomb.checked) {
        spanMascotaJugador.innerHTML = "iceBomb"
    } else { alert("Porfavor selecciona una de las mascotas ") }

    seleccionarMascotaEnemigo()
}

function seleccionarMascotaEnemigo() {
    let mascotaEnemigo = aleatorio(1, 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    switch (mascotaEnemigo) {
        case 1: spanMascotaEnemigo.innerHTML = "cacodemon"
            break;
        case 2: spanMascotaEnemigo.innerHTML = "soldier"
            break;
        case 3: spanMascotaEnemigo.innerHTML = "pinky"
            break;
        case 4: spanMascotaEnemigo.innerHTML = "arachnotron"
            break;
        case 3: spanMascotaEnemigo.innerHTML = "carcass"
            break;
        default: spanMascotaEnemigo.innerHTML = "mancubus"
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

function load(){
    let sectionLoad = document.getElementById('gif')
    sectionLoad.style.display = 'none'
 }



window.addEventListener('load',iniciarJuego )
