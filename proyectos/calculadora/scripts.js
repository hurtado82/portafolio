let v1 = 0       // first value entered
let v2 = 0       // second value entered
let initialValue = "0"
let addition = false
let subtraction = false
let multiplication = false
let division = false
let percentage = false
let point = false
const showScreen = document.querySelector("#show")
const sign = document.querySelector("#sign")

const resetOperator = () => {
  addition = false
  subtraction = false
  multiplication = false
  division = false
  percentage = false
  point = false
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
  sign.innerHTML = ""
}

const equalOperator = (resetSign) => {
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
    showScreen.value = getPercentage()
  }
  initialValue = "0"
  if(resetSign && sign !== "") sign.innerHTML = ""
  v2 = 0
  resetOperator()
}

const keyboardNumbers = /[0-9\.]/
const keyboardOperators = /[\*\+\/\-]/

const btnEvent = (e) => {
  if(initialValue?.length <= 10) { 
    if (keyboardNumbers.test(e.key)) {
      if(e.key === "." && point) return
      if(e.key === ".") point = true
      initialValue+= e.key
      showScreen.value = initialValue.slice(1) 
    }
    if(e.type !== "keydown") {
      initialValue+= e.target.value
      showScreen.value = initialValue.slice(1)
    }
    if(v1) v2 = parseFloat(showScreen.value)
  }
}

const operatorsKeys = (e) => {
  if(showScreen.value !== "0") {
    if (e.type === "keypress" && e.key !== "Enter") {
      sign.innerHTML = e.key
    }else if(e.type === "click"){
      sign.innerHTML = e.target.value
    }
    equalOperator()
    v1 = parseFloat(showScreen.value)
    initialValue = "0"
    resetOperator()
  }
}

const showResult = (value1) => {
  let total = value1
  
  if(value1.toString().length < 9) {
    showScreen.value = total
  } else if(value1 % 1 === 0){
    showScreen.value = total.toExponential(4)
  } else {
    showScreen.value = total.toFixed(1)
  }
}

const btnbody = document.querySelector("body")
btnbody.addEventListener("keydown", (e) => {

  if (e.key === "Enter") {
    e.preventDefault()
    equalOperator(e)

  } else if(keyboardOperators.test(e.key)) {

    switch (e.key) {
      case "+" : btnAddition.click()
        break;
      case "-" : btnSubtraction.click()
        break;
      case "*" : btnMultiplication.click()
        break;
      case "/": btnDivision.click()
        break;
      default: return  
    }
  } else {
    btnEvent(e)
  }
  if(e.code === "Space") e.preventDefault()
})

const btn1 = document.querySelector("#number1")
btn1.addEventListener("click", (e) => btnEvent(e))

const btn2 = document.querySelector("#number2")
btn2.addEventListener("click", (e) => {
  btnEvent(e)
})

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
btnPoint.addEventListener("click", (e) =>{
  if(!point) btnEvent(e)
    point = true
})

const btnAddition = document.querySelector("#numberSuma")
btnAddition.addEventListener("click", (e) => {
  operatorsKeys(e)
  addition = true
})

const btnSubtraction = document.querySelector("#numberResta")
btnSubtraction.addEventListener("click", (e) => {
  operatorsKeys(e)
  subtraction = true
})
const btnMultiplication = document.querySelector("#numberMulti")
btnMultiplication.addEventListener("click", (e) => {
  operatorsKeys(e)
  multiplication = true
})

const btnDivision = document.querySelector("#numberDiv")
btnDivision.addEventListener("click", (e) => {
  operatorsKeys(e)
  division = true
})

const btnPercentage = document.querySelector("#numberPorcien")
btnPercentage.addEventListener("click", function(){
  if(showScreen.value !== "0") {
    getPercentage()
  }
})
 
const btnEqual = document.querySelector("#numberIgual")
btnEqual.addEventListener("click", (e) => equalOperator(e) )
  
const btnCE = document.querySelector("#numberCE")
btnCE.addEventListener("click", function(){
  showScreen.value = 0
  v2 = 0
  initialValue = "0"
})

const btnC = document.querySelector("#numberC")
btnC.addEventListener("click", function(){
  resetOperator()
  v2 = 0
  v1 = 0
  initialValue = "0"
  showScreen.value = 0
  sign.innerHTML = ""
})
