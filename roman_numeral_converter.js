function convertToRoman(num) {
  let strArr = []

  while(num >= 1000) {
    strArr.push("M")
    num -= 1000
  }

  while(num >= 900) {
    strArr.push("CM")
    num -= 900
  }

  while(num >= 500) {
    strArr.push("D")
    num -= 500
  }

  while(num >= 400) {
    strArr.push("CD")
    num -= 400
  }

  while(num >= 100) {
    strArr.push("C")
    num -= 100
  }

  while(num >= 90) {
    strArr.push("XC")
    num -= 90
  }

  while(num >= 50) {
    strArr.push("L")
    num -= 50
  }

  while(num >= 40) {
    strArr.push("XL")
    num -= 40
  }

  while(num >= 10) {
    strArr.push("X")
    num -= 10
  }

  while(num >= 9) {
    strArr.push("IX")
    num -= 9
  }

  while(num >= 5) {
    strArr.push("V")
    num -= 5
  }

  while(num >= 4) {
    strArr.push("IV")
    num -= 4
  }

  while(num >= 1) {
    strArr.push("I")
    num -= 1
  }

  let roman = strArr.join("")
  return roman
}
 
convertToRoman(36);


