function sorting(arrNumber) {
    // code di sini
    arrNumber.sort() //Angka paling besar akan berada pada indeks terakhir
    return (arrNumber)
    
}

function getTotal(arrNumber) {
    // code di sini

    //Cek array kosong atau tidak
    if (arrNumber.length === 0) {
        return "''"
    } else {
        //Mengecek banyaknya angka yang paling besar
        var bakAngka = 0
        var banyakAngka = 0
        var panjangData = arrNumber.length - 1
        var perulanganData = arrNumber.length - 2
        //console.log(arrNumber[7])
        //console.log(perulanganData)

        //Mengecek angka
        for (var i = panjangData; i > perulanganData; i--) {
            for (var j = 0; j < arrNumber.length; j++) {
                if (arrNumber[j] === arrNumber[i]) {
                    bakAngka += arrNumber[j]
                    banyakAngka += 1
                } else {
                    bakAngka = bakAngka
                    banyakAngka = banyakAngka
                }
            }
            var kemunculan = bakAngka / banyakAngka

        }
        return ('Angka yang paling besar adalah ' + kemunculan + ' dan jumlah kemunculan sebanyak ' + banyakAngka
            + ' kali')
    }
    //console.log(bakAngka)
    //console.log(banyakAngka)
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    console.log(listSort)
    var countHighest = getTotal(listSort);
    return countHighest;
}

//console.log(getTotal([2, 8, 4, 6, 8, 5, 8, 4]))

//console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

//console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

//console.log(mostFrequentLargestNumbers([]));
  //''