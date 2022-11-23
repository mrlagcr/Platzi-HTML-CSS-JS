let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    
    let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("Reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-mascotas")
    botonMascotaJugador.addEventListener("click", seleccionatMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonPlanta = document.getElementById("boton-planta")
    botonPlanta.addEventListener("click", ataquePlanta)

    let botonReiniciar =document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionatMascotaJugador(){
   
   let inputSerpinto = document.getElementById("Serpinto")
   let inputOrigato = document.getElementById("Origato")
   let inputPezcuito = document.getElementById("Pezcuito")
   let spanMascotaJugador = document.getElementById("jugador-mascota")

   let sectionSeleccionarMascota = document.getElementById("Selecciona-mascota")
    sectionSeleccionarMascota.style.display = "none"

   let sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
    sectionSeleccionarAtaque.style.display = "Block"

    if(inputSerpinto.checked){
        spanMascotaJugador.innerHTML = "Serpinto"
   } else if(inputOrigato.checked){
        spanMascotaJugador.innerHTML = "Origato"
   } else if(inputPezcuito.checked){
        spanMascotaJugador.innerHTML = "Pezcuito"  
   } else {
        alert("Selecciona una Mascota")
   }
   seleccionatMascotaEnemigo()
}
function seleccionatMascotaEnemigo(){
     let mascotaEnemigaAleatoria = aleatorio(1,3)
     let spanMascotaEnemigo = document.getElementById("enemigo-mascota")

     if(mascotaEnemigaAleatoria == 1){
          spanMascotaEnemigo.innerHTML = "Serpinto"
     } else if(mascotaEnemigaAleatoria == 2){
          spanMascotaEnemigo.innerHTML = "Origato"
     } else if(mascotaEnemigaAleatoria == 3){
          spanMascotaEnemigo.innerHTML = "Pezcuito"
     }
}

function ataqueFuego(){
     ataqueJugador = "Fuego"
     ataqueAleatorioEnemigo ()
}
function ataquePlanta(){
     ataqueJugador = "Agua"
     ataqueAleatorioEnemigo ()
}
function ataqueAgua(){
     ataqueJugador = "Planta"
     ataqueAleatorioEnemigo ()
} 
function ataqueAleatorioEnemigo(){
     ataqueAleatorio = aleatorio(1,3)
     
     if(ataqueAleatorio == 1){
          ataqueEnemigo = "Fuego"
     } else if(ataqueAleatorio == 2){
          ataqueEnemigo = "Agua"
     } else if(ataqueAleatorio == 3)[
          ataqueEnemigo = "Planta"
     ]

     combate()
}

function combate(){
     
     let spanVidasJugador = document.getElementById("vidas-jugador")
     let spanVidasEnemigo = document.getElementById("vidas-enemigo")

     if(ataqueEnemigo == ataqueJugador){
          crearMensaje("Empate")
     } else if(ataqueJugador == "Fuego" && ataqueEnemigo == "Planta") {
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else if(ataqueJugador == "Agua" && ataqueEnemigo == "Fuego"){
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else if(ataqueJugador == "Planta" && ataqueEnemigo == "Agua"){
          crearMensaje("Ganaste")
          vidasEnemigo--
          spanVidasEnemigo.innerHTML = vidasEnemigo
     } else {
          crearMensaje("Perdiste")
           vidasJugador--
          spanVidasJugador.innerHTML = vidasJugador
     }
     
     revisarVidas()
}

function revisarVidas(){

     if(vidasEnemigo == 0){
          crearMensajeFinal("Felicitaciones Ganaste 🎉🎊")
     } else if(vidasJugador == 0){
          crearMensajeFinal("Perdiste, Manco!! 🖕🏾")
     }
    

}

function crearMensaje (resultado){
     let sectionMensajes = document.getElementById("Mensajes")

     let parrafo = document.createElement("p")
     parrafo.innerHTML = "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + "- " + resultado, "." 

     sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFinal){
     let sectionMensajes = document.getElementById("Mensajes")

     let parrafo = document.createElement("p")
     parrafo.innerHTML = resultadoFinal
     sectionMensajes.appendChild(parrafo)

     let botonFuego = document.getElementById("boton-fuego")
     botonFuego.disabled = true
     let botonAgua = document.getElementById("boton-agua")
     botonAgua.disabled = true
     let botonPlanta = document.getElementById("boton-planta")
     botonPlanta.disabled = true

     let sectionReiniciar = document.getElementById("Reiniciar")
     sectionReiniciar.style.display = "Block"

}

function reiniciarJuego(){
     location.reload()
}

function aleatorio(min, max){
     return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)