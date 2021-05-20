function rot13(str) {
    let x = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M']
    let y = ['N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

    let strArr = str.split('')
    
    let newArr = []

    let format = /^[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]*$/

    strArr.forEach(letter => {
        for(let i = 0; i < x.length; i++) {
            if(letter === ' ') {
                newArr.push(' ')
                break
            }
            if(letter === x[i]) {
               newArr.push(y[i])
            }
            if(letter === y[i]) {
                newArr.push(x[i])
            }
            if(letter.match(format)) {
                newArr.push(letter)
                break
            }
        }
    });

    let newStr = newArr.join('')

    console.log(newStr)
}
  
rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.");