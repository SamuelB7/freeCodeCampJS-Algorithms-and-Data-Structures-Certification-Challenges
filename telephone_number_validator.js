// based on: https://www.youtube.com/watch?v=AKXKN8nNAHk&t=3s

function telephoneCheck(str) {
    //let format = /^(\([0-9]{3}\) |[0-9]{3}-)[0-9]{3}-[0-9]{4}$/
    let format = /^(1\s?)?(\d{3}|\(\d{3}\))[\-\s]?\d{3}[\-\s]?\d{4}$/
    if(str.match(format)) {
        return true
    } else {
        return false
    }
}

  
console.log(telephoneCheck("1 555-555-5555"))
