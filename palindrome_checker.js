function palindrome(str) {
    let rev = str.split("").reverse().join('').replace(/[^0-9a-z]/gi, '').toLowerCase()
    let remSpace = str.replace(/\s/g, '').replace(/[^0-9a-z]/gi, '').toLowerCase()
    
    if(rev === remSpace) {
        return true
    } else {
        return false
    }
}

palindrome("eye");