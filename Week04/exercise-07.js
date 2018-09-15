//Soal exercise 2 week 4

function digitPerkalianMinimum(angka) {
    // you can only write your code here!
    var arr = []
    var bakAngka = ''
    for (var i = 1; i <= angka; i++) {
        if (angka % i === 0) {
            var bagiAngka = angka/i
            var numToStr = String(i)
            bakAngka += numToStr
            bakAngka += bagiAngka
            arr.push(bakAngka)
            Number(i)
            bakAngka =''
        }
    }
    //sorting agar length terkecil berada di depan
    arr.sort(function(value1, value2) { return value1 < value2 })

    //Setelah array di sorting, maka akan kelihatan panjang dari masing-masing array
    //Array dengan panjang terkecil akan berada di paling depan
    //Lalu hasil akan mengeluarkan panjang terkecil dari angka paling depan
    var hasilAkhir = arr[0].length
    return hasilAkhir
}

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
//console.log(digitPerkalianMinimum(90)); // 3
//console.log(digitPerkalianMinimum(20)); // 2
//console.log(digitPerkalianMinimum(179)); // 4
//console.log(digitPerkalianMinimum(1)); // 2