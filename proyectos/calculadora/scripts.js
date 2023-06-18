let v1 = 0
let v2 = 0
let initialValue = "0"
let addition = false
let subtraction = false
let multiplication = false
let division = false
let percentage = false
let show = document.querySelector("#show")

const resetOperator = () => {
  addition = false
  subtraction = false
  multiplication = false
  division = false
  percentage = false
}

const getPercentage = () => {
  let result = ( parseFloat(v1) / 100 ) * v2
  if (addition) {
    showResult(parseFloat(v1) + parseFloat(result))
  }
  if (subtraction) {
    showResult(parseFloat(v1) - parseFloat(result))
  }
  if (multiplication) {
    showResult(result)
  }
  if (division) {
    showResult(parseFloat(v1) * result)
  }
  resetOperator()
}

const equalOperator = () => {
 
  if (addition && v1 && v2) {
    showResult(v1 + v2)
  }
  if (subtraction && v1 && v2) {
    showResult(v1 - v2)
  }
  if (multiplication && v1 && v2) {
    showResult(v1 * v2)
  }
  if (division && v1 && v2) {
    showResult(v1 / v2)
  }
  if (percentage) {
    show.value = getPercentage()
  }
  initialValue = "0"
}

const btnEvent = (e) => {
  if(initialValue?.length <= 10) {
    initialValue+= e.target.value
    show.value = initialValue.slice(1)
    if(v1) v2 = parseFloat(show.value)
    console.log(show.value.length)
  }
}

const operatorsKeys = () => {
  equalOperator()
  v1 = parseFloat(show.value)
  initialValue = "0"
  resetOperator()
}

const showResult = (value1) => {
  let total = value1
  
  if(value1.toString().length < 9) {
    show.value = total
  } else if(value1 % 1 === 0){
    show.value = total.toExponential(4)
  } else {
    show.value = total.toFixed(1)
  }
}

const btn1 = document.querySelector("#number1")
btn1.addEventListener("click", (e) => btnEvent(e))
// boton1.addEventListener("onkeyup", (e) =>  console.log(e.target) )

const btn2 = document.querySelector("#number2")
btn2.addEventListener("click", (e) => btnEvent(e))

const btn3 = document.querySelector("#number3")
btn3.addEventListener("click", (e) => btnEvent(e))

const btn4 = document.querySelector("#number4")
btn4.addEventListener("click", (e) => btnEvent(e))

const btn5 = document.querySelector("#number5")
btn5.addEventListener("click", (e) => btnEvent(e))

const btn6 = document.querySelector("#number6")
btn6.addEventListener("click", (e) => btnEvent(e))

const btn7 = document.querySelector("#number7")
btn7.addEventListener("click", (e) => btnEvent(e))

const btn8 = document.querySelector("#number8")
btn8.addEventListener("click", (e) => btnEvent(e))

const btn9 = document.querySelector("#number9")
btn9.addEventListener("click", (e) => btnEvent(e))

const btn0 = document.querySelector("#number0")
btn0.addEventListener("click", (e) => btnEvent(e))

const btnPoint = document.querySelector("#numberPunto")
btnPoint.addEventListener("click", (e) => btnEvent(e))

const btnAddition = document.querySelector("#numberSuma")
btnAddition.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(addition)
    addition = true
  }
})

const btnSubtraction = document.querySelector("#numberResta")
btnSubtraction.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(subtraction)
    subtraction = true
  }
})

const btnMultiplication = document.querySelector("#numberMulti")
btnMultiplication.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(multiplication)
    multiplication = true
  }
})

const btnDivision = document.querySelector("#numberDiv")
btnDivision.addEventListener("click", function(){
  if(show.value !== "0") {
    operatorsKeys(division)
    division = true
  }
})

const btnPercentage = document.querySelector("#numberPorcien")
btnPercentage.addEventListener("click", function(){
  if(show.value !== "0") {
    // percentage = true
    getPercentage()
  }
})
 
const btnEqual = document.querySelector("#numberIgual")
btnEqual.addEventListener("click", equalOperator )
  
const btnCE = document.querySelector("#numberCE")
btnCE.addEventListener("click", function(){
  show.value = 0
  v2 = 0
  initialValue = "0"
})

const btnC = document.querySelector("#numberC")
btnC.addEventListener("click", function(){
  resetOperator()
  v2 = 0
  v1 = 0
  initialValue = "0"
  show.value = 0
})
