const sectionSeleccionarAtaque = document.getElementById("selecionar-ataque")
const sectionReiniciar = document.getElementById("Reiniciar")
const botonMascotaJugador = document.getElementById("boton-mascotas")
const botonFuego = document.getElementById("boton-fuego")
const botonAgua = document.getElementById("boton-agua")
const botonPlanta = document.getElementById("boton-planta")
const botonReiniciar =document.getElementById("boton-reiniciar")

const inputSerpinto = document.getElementById("Serpinto")
const inputOrigato = document.getElementById("Origato")
const inputPezcuito = document.getElementById("Pezcuito")
const spanMascotaJugador = document.getElementById("jugador-mascota")
const sectionSeleccionarMascota = document.getElementById("Selecciona-mascota")

const spanMascotaEnemigo = document.getElementById("enemigo-mascota")

const spanVidasJugador = document.getElementById("vidas-jugador")
const spanVidasEnemigo = document.getElementById("vidas-enemigo")

const sectionMensajes = document.getElementById("resultado")
const ataquesDelJugador = document.getElementById("ataques-del-jugador")
const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

let pets = []
let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3
let opcionDePets

class Pets{
     constructor (nombre, foto, vida){
          this.nombre = nombre
          this.foto = foto
          this.vida = vida
          this.ataques = []
     }
}

let serpinto = new Pets("Serpinto", "./assets/Serpinto.jpg", 5)
let origato = new Pets("Origato", "./assets/Origato.jpg", 5)
let pezcuito = new Pets("Pezcuito", "./assets/pezcuito.jpg", 5)

serpinto.ataques.push(
     {nombre: "Fuego 🔥", id: "boton-fuego"},
     {nombre: "Fuego 🔥", id: "boton-fuego"},
     {nombre: "Fuego 🔥", id: "boton-fuego"},
     {nombre: "Agua 🌊", id: "boton-agua"},
     {nombre: "Planta 🌱", id: "boton-planta"},

) 
origato.ataques.push(
     {nombre: "Planta 🌱", id: "boton-planta"},
     {nombre: "Planta 🌱", id: "boton-planta"},
     {nombre: "Planta 🌱", id: "boton-planta"},
     {nombre: "Fuego 🔥", id: "boton-fuego"},
     {nombre: "Agua 🌊", id: "boton-agua"}, 
)
pezcuito.ataques.push(
     {nombre: "Agua 🌊", id: "boton-agua"},
     {nombre: "Agua 🌊", id: "boton-agua"},
     {nombre: "Agua 🌊", id: "boton-agua"},
     {nombre: "Fuego 🔥", id: "boton-fuego"},
     {nombre: "Planta 🌱", id: "boton-planta"},
)

pets.push(serpinto, origato, pezcuito)




function iniciarJuego(){
    
    sectionSeleccionarAtaque.style.display = "none"
    pets.forEach((pets) => {
          opcionDePets = `
          <input type="radio" name = "mascota" id = "Serpinto" />
          <label class="tarjeta-de-pets" for = "Serpinto" >
              <p>Serpinto</p>
              <img src="./assets/Serpinto.jpg" alt="Serpinto">
          </label>
          `
    })
    sectionReiniciar.style.display = "none"
    botonMascotaJugador.addEventListener("click", seleccionatMascotaJugador)
    botonFuego.addEventListener("click", ataqueFuego)
    botonAgua.addEventListener("click", ataqueAgua)
    botonPlanta.addEventListener("click", ataquePlanta)
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionatMascotaJugador(){
   
    sectionSeleccionarMascota.style.display = "none"
    sectionSeleccionarAtaque.style.display = "flex"
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
     ataqueJugador = "Planta"
     ataqueAleatorioEnemigo ()
}
function ataqueAgua(){
     ataqueJugador = "Agua"
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
     
     if(ataqueEnemigo == ataqueJugador){
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
    

     let nuevoAtaqueDelJugador = document.createElement("p")
     let nuevoAtaqueDelEnemigo = document.createElement("p")

     sectionMensajes.innerHTML = resultado
     nuevoAtaqueDelJugador.innerHTML = ataqueJugador
     nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

     ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
     ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal (resultadoFinal){
     
     sectionMensajes.innerHTML = resultadoFinal

     botonFuego.disabled = true
     
     botonAgua.disabled = true
     
     botonPlanta.disabled = true

     sectionReiniciar.style.display = "Block"

}

function reiniciarJuego(){
     location.reload()
}

function aleatorio(min, max){
     return Math.floor(Math.random()*(max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)