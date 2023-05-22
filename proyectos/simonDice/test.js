let number = "1,2,3/3,2,1"
let arr1 = number.split("/")
let arr2 = arr1.map(a => a.split(","))
let result = []
for (let i = 0; i <= arr2.length; i++) {
   result.push(parseInt(arr2[0][i])+ parseInt(+arr2[1][i])) 
  
  }
  console.log(result)

  //---------------------------------------------

  const arr = [7, 69, 2, 221, 8974 ]
const sumarr = (arr) => {
  let sumMin = 0
  let sumMax = 0
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  console.log(min, max )
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < max)sumMin = sumMin + arr[i]
    if(arr[i] > min)sumMax = sumMax + arr[i]
    console.log(arr[i])
  }
 return  console.log(sumMin, sumMax)
}
sumarr(arr)

