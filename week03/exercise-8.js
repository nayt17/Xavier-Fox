//Soal exercise 8 pasangan terbesar
var jadiStr = ''
var nilai1 = ''
var nilai2 = ''
function pasanganTerbesar(num) {
    jadiStr += num

    for (i = 0; i < jadiStr.length-1; i++) {
        nilai1 = nilai1 + jadiStr[i] + jadiStr[i + 1]
        //return nilai1
        if (nilai1 > nilai2) {
            nilai2 = ''
            nilai2 += nilai1
            nilai1 = ''
            // console.log('Hai')
        } else {
            nilai1 = ''
        }
    }
    return nilai2
}

console.log(pasanganTerbesar(79918293))