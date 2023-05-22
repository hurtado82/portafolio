var valor 
var v3
var v1
var mas = false
var menos = false
var multi = false
var div = false
var conteo = 0

const resetOperator = () => {
  mas = !true
  menos = !true
  multi = !true
  div = !true
}
const equalOpertor = (operator) => {
  // valor = operator
  console.log(v1, "v1 arriba",v3)
  if (mas) {
    show.innerHTML = v3 + v1
    console.log(v3+v1)
  }
  if (menos) {
    show.innerHTML = v3 - v1
    console.log(v3-v1)
  }
  if (multi) {
    show.innerHTML = v3 * v1
    console.log(v3*v1)
  }
  if (div) {
    show.innerHTML = v3 / v1
    console.log(v3/v1)
  }
}

var boton1 = document.querySelector("#number1")
.addEventListener("click", function(){
valor = parseInt(this.value)
console.log(valor)
print(valor)
})
console.log(boton1)
var boton2 = document.querySelector("#number2")
.addEventListener("click", function(){
valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton3 = document.querySelector("#number3")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton4 = document.querySelector("#number4")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton5 = document.querySelector("#number5")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton6 = document.querySelector("#number6")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton7 = document.querySelector("#number7")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  valor1 = valor
  console.log(valor)
  print(valor)
})

var boton8 = document.querySelector("#number8")
.addEventListener("click", function(){
valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton9 = document.querySelector("#number9")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var boton0 = document.querySelector("#number0")
.addEventListener("click", function(){
  valor = parseInt(this.value)
  console.log(valor)
  print(valor)
})

var botonMas = document.querySelector("#numberSuma")
.addEventListener("click", function(){
  console.log(v1)
  v3 = parseInt(show.textContent)
  valor = this.value
  console.log(valor)
  show.innerHTML = 0
  console.log(v3 + " 'v3+'")
  resetOperator()
  mas = true
  console.log(v1, "v1")
  console.log(v3, "v3")
  // if(v3 && v1) equalOpertor()
  console.log(show)
})

var botonResta = document.querySelector("#numberResta")
.addEventListener("click", function(){
  v3 = parseInt(show.textContent)
  valor = this.value
  console.log(valor)
  show.textContent = 0
  console.log(v3 + " 'v3-'")
  resetOperator()
  menos = true
  // equalOpertor()
})

var botonMulti = document.querySelector("#numberMulti")
.addEventListener("click", function(){
  v3 = parseInt(show.textContent)
  valor = this.value
  console.log(valor)
  show.textContent = 0
  console.log(v3 + " 'v3*'")
  resetOperator()
  multi = true
  // equalOpertor()
})

var botonDiv = document.querySelector("#numberDiv")
.addEventListener("click", function(){
  v3 = parseInt(show.textContent)
  valor = this.value
  console.log(valor)
  show.textContent = 0  
  console.log(v3 + " 'v3/'")
  resetOperator()
  div = true
  // equalOpertor()
})


// Mostrar en pantalla
// document.querySelector("#show").textContent
function print(v){
  console.log(v3)

  if(show.textContent === "0"){
    show.innerHTML= v
    v1 = parseInt(show.textContent)
    console.log(v1, "v1", v3, "v3")
  } else{
    show.innerHTML+= v
    conteo = show.textContent
    console.log("conteo "+ conteo.length)
    if (mas || menos || multi || div) {
      v1 = parseInt(show.innerHTML)
    }
    console.log(v1)
  }
}
var botonEqual = document.querySelector("#numberIgual")
.addEventListener("click", equalOpertor )
  // valor = this.value
  // console.log(valor)
//   if (mas) {
//     show.innerHTML = v3 + v1
//     console.log(v3+v1)
//   }
//   if (menos) {
//     show.innerHTML = v3 - v1
//     console.log(v3-v1)
//   }
//   if (multi) {
//     show.innerHTML = v3 * v1
//     console.log(v3*v1)
//   }
//   if (div) {
//     show.innerHTML = v3 / v1
//     console.log(v3/v1)
//   }
// })
var botonC = document.querySelector("#numberC")
.addEventListener("click", function(dato){
  show.innerHTML = 0
  v1 = 0
  console.log(v3)
  console.log(v1)
  valor = 0
  console.log(valor)

  mas = false
  menos = false
  multi = false
  div = false

})
var botonCE = document.querySelector("#numberCE")
.addEventListener("click", function(dato){
  v3 = 0
  v1 = 0
  valor = 0
  show.innerHTML = 0
  console.log(valor)
})
