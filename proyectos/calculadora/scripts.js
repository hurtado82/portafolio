let v2 = 0
let v1 = 0
let valor = "0"
let mas = false
let menos = false
let multi = false
let div = false
let porcentaje = false
let show = document.querySelector("#show")

const resetOperator = () => {
  mas = false
  menos = false
  multi = false
  div = false
  porcentaje = false
}

const sacarPorcentaje = (value1, value2) => {
  let result = ( parseFloat(v1) / 100 ) * v2
  console.log(result)

  if (mas) {
    show.value = parseFloat(v1) + parseFloat(result)
  }
  if (menos) {
    show.value = parseFloat(v1) - parseFloat(result)
  }
  if (multi) {
    show.value = result
  }
  if (div) {
    show.value = parseFloat(v1) * result
  }
  resetOperator()
}

const totalOperation = (value1, value2) => {
  show.value = parseFloat(value1) + parseFloat(value2)
}

const equalOperator = () => {

  if (mas || mas && porcentaje) {
    show.value = parseFloat(v1) + parseFloat(v2)
  }
  if (menos || menos && porcentaje) {
    show.value = parseFloat(v1) - parseFloat(v2)
  }
  if (multi || multi && porcentaje) {
    show.value = parseFloat(v1) * parseFloat(v2)
  }
  if (div || div && porcentaje) {
    show.value = parseFloat(v1) / parseFloat(v2)
  }
  if (porcentaje) {
    show.value = sacarPorcentaje()
  }
}

const btnEvent = (e) => {

  if(valor?.length <= 10) {
    valor+= e.target.value
    show.value = valor.slice(1)
    if(v1) v2 = show.value
    console.log(show.value.length)
  }
}
//prueba show
const showResult = (totalResult) => {
  if(valor?.length <= 10) {
    show.value = totalResult
  }
}


const operatorsKeys = () => {
  equalOperator()
  v1 = show.value
  valor = "0"
  resetOperator()
}

var boton1 = document.querySelector("#number1")
boton1.addEventListener("click", (e) => btnEvent(e))
// boton1.addEventListener("onkeyup", (e) =>  console.log(e.target) )

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

var botonPorcentaje = document.querySelector("#numberPorcien")
botonPorcentaje.addEventListener("click", function(){
  if(show.value !== "0") {
    porcentaje = true
    sacarPorcentaje()
  }
})
 
var botonEqual = document.querySelector("#numberIgual")
botonEqual.addEventListener("click", equalOperator )
  
var botonCE = document.querySelector("#numberCE")
botonCE.addEventListener("click", function(){
  show.value = 0
  v2 = 0
  valor = "0"
})

var botonC = document.querySelector("#numberC")
botonC.addEventListener("click", function(){
  resetOperator()
  v2 = 0
  v1 = 0
  valor = "0"
  show.value = 0
})
