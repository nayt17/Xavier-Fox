function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];
    //your code here
    var arrBaru = []

    //Bila array kosong
    if (arrPenumpang.length === 0) {
        return '[]'
    }

    //Posisi
    for (var i = 0; i < arrPenumpang.length; i++) {
        var identitas = {
            penumpang: '',
            naikDari: '',
            tujuan: '',
            bayar: 0
        }
        for (var j = 0; j < arrPenumpang[i].length; j++) {
            if (j === 0) {
                identitas.penumpang = arrPenumpang[i][j]
            } else if (j === 1) {
                identitas.naikDari = arrPenumpang[i][j]
                for (var k = 0; k < rute.length; k++) {
                    if (arrPenumpang[i][j] === rute[k]) {
                        var jarakAwal = k
                    }
                }
            } else if (j === 2) {
                identitas.tujuan = arrPenumpang[i][j]
                for (var l = 0; l < rute.length; l++) {
                    if (arrPenumpang[i][j] === rute[l]) {
                        var jarakAkhir = l
                    }
                }
            }
        }
        var total = (jarakAkhir - jarakAwal) * 2000
        identitas.bayar = total
        arrBaru.push(identitas)
    }

    return arrBaru
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]