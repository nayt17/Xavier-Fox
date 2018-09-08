//Soal exercise 7 Hitung jumlah kalimat

var jumlah = ''

function hitungJumlahKata(kalimat){
    for(i=0;i<kalimat.length;i++){
        jumlah += kalimat[i]
    }
    //console.log(jumlah.split(' '))
    var jumlahKata = jumlah.split(' ')
    return jumlahKata.length
}

console.log(hitungJumlahKata('Never eat shredded wheat or cake'))