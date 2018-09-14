function changeVocals(str) {
    //code di sini
    var bakStr = ''
    var alphabetMin = ['b', 'f', 'j', 'p', 'v']
    var alphabetMax = ['B', 'F', 'J', 'P', 'V']


    for (var i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            bakStr += alphabetMin[0]
        } else if (str[i] === 'e') {
            bakStr += alphabetMin[1]
        } else if (str[i] === 'i') {
            bakStr += alphabetMin[2]
        } else if (str[i] === 'o') {
            bakStr += alphabetMin[3]
        } else if (str[i] === 'u') {
            bakStr += alphabetMin[4]
        } else if (str[i] === 'A') {
            bakStr += alphabetMax[0]
        } else if (str[i] === 'E') {
            bakStr += alphabetMax[1]
        } else if (str[i] === 'I') {
            bakStr += alphabetMax[2]
        } else if (str[i] === 'O') {
            bakStr += alphabetMax[3]
        } else if (str[i] === 'U') {
            bakStr += alphabetMax[4]
        } else {
            bakStr += str[i]
        }
    }
    return bakStr

}

//console.log(changeVocals('Sergei Dragunov'))

function reverseWord(str) {
    //code di sini
    var bakStr = ''

    for (var i = str.length - 1; i >= 0; i--) {
        bakStr += str[i]
    }
    return bakStr
}

//console.log(reverseWord('Sergei Dragunov'))

function setLowerUpperCase(str) {
    //code di sini
    var bakStr = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] === str[i].toLowerCase()) {
            bakStr += str[i].toUpperCase()
        } else if (str[i] === str[i].toUpperCase()) {
            bakStr += str[i].toLowerCase()
        }
    }
    return bakStr
}

//console.log(setLowerUpperCase('Sergei Dragunov'))

function removeSpaces(str) {
    //code di sini
    var bakStr = ''

    for (var i = 0; i < str.length; i++) {
        if (str[i] != ' ') {
            bakStr += str[i]
        } else {
            bakStr = bakStr
        }
    }
    return bakStr
}
//console.log(removeSpaces('Sergei Dragunov'))


function passwordGenerator(name) {
    //code di sini
    if (name.length >= 5) {
        var ubahVokal = changeVocals(name)
        var balikKata = reverseWord(ubahVokal)
        var ubahAbjad = setLowerUpperCase(balikKata)
        var hilangSpasi = removeSpaces(ubahAbjad)

        return hilangSpasi
    }else{
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'