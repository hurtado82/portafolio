let v2 = 0
let v1 = 0
let valor = 0
let mas = false
let menos = false
let multi = false
let div = false
let conteo = 0
let show = document.querySelector("#show")

const resetOperator = () => {
  mas = !true
  menos = !true
  multi = !true
  div = !true
}

const equalOperator = () => {

  if (mas) {
    show.value = parseFloat(v1) + parseFloat(v2)
  }
  if (menos) {
    show.value = parseFloat(v1) - parseFloat(v2)
  }
  if (multi) {
    show.value = parseFloat(v1) * parseFloat(v2)
  }
  if (div) {
    show.value = parseFloat(v1) / parseFloat(v2)
  }
}

const btnEvent = (e) => {
  console.log(e)
  valor+= e.target.value
  show.value = valor.slice(1)
  if(v1) {
    v2 = show.value
  }
}

const operatorsKeys = () => {
  equalOperator()
  v1 = show.value
  valor = 0
  resetOperator()
}

var boton1 = document.querySelector("#number1")
// boton1.addEventListener("click", (e) => btnEvent(e))
boton1.addEventListener("onkeyup", (e) =>  console.log(e.target) )

var boton2 = document.querySelector("#number2")
boton2.addEventListener("click", (e) => btnEvent(e))

var boton3 = document.querySelector("#number3")
boton3.addEventListener("click", (e) => btnEvent(e))

var boton4 = document.querySelector("#number4")
boton4.addEventListener("click", (e) => btnEvent(e))

var boton5 = document.querySelector("#number5")
boton5.addEventListener("click", (e) => btnEvent(e))

var boton6 = document.querySelector("#number6")
boton6.addEventListener("click", (e) => btnEvent(e))

var boton7 = document.querySelector("#number7")
boton7.addEventListener("click", (e) => btnEvent(e))

var boton8 = document.querySelector("#number8")
boton8.addEventListener("click", (e) => btnEvent(e))

var boton9 = document.querySelector("#number9")
boton9.addEventListener("click", (e) => btnEvent(e))

var boton0 = document.querySelector("#number0")
boton0.addEventListener("click", (e) => btnEvent(e))

var botonPunto = document.querySelector("#numberPunto")
botonPunto.addEventListener("click", (e) => btnEvent(e))

var botonMas = document.querySelector("#numberSuma")
botonMas.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(mas)
    mas = true
  }
})

var botonResta = document.querySelector("#numberResta")
botonResta.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(menos)
    menos = true
  }
})

var botonMulti = document.querySelector("#numberMulti")
botonMulti.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(multi)
    multi = true
  }
})

var botonDiv = document.querySelector("#numberDiv")
botonDiv.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(div)
    div = true
  }
})

var botonEqual = document.querySelector("#numberIgual")
botonEqual.addEventListener("click", equalOperator )
  
var botonCE = document.querySelector("#numberCE")
botonCE.addEventListener("click", function(){
  show.value = 0
  v2 = 0
  valor = 0
})

var botonC = document.querySelector("#numberC")
botonC.addEventListener("click", function(){
  resetOperator()
  v2 = 0
  v1 = 0
  valor = 0
  show.value = 0
})
