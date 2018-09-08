//Soal exercise 4
var input = ['0001', 'Roman Alamansyah', 'Bandar Lampung', '21/05/1989', 'Membaca']

function dataHandling2(arr){
    var tgl
    arr.splice(1,1,'Roman Alamansyah Elsharawy')
    arr.splice(2,1,'Provinsi Bandar Lampung')
    arr.splice(4,1, 'Pria')
    arr.splice(5,0, 'SMA Internasional Metro')
    console.log(arr)

    tanggal = arr[3].split('/')
    console.log(tanggal)
    tgl = tanggal[1]
    //console.log(tgl)
    //console.log(tanggal[1])
    switch(tgl){
        case '01':
            console.log('Januari')
            break
        case '02':
            console.log('Februari')
            break
        case '03':
            console.log('Maret')
            break
        case '04':
            console.log('April')
            break
        case '05':
            console.log('Mei')
            break
        case '06':
            console.log('Juni')
            break
        case '07':
            console.log('Juli')
            break
        case '08':
            console.log('Agustus')
            break
        case '09':
            console.log('September')
            break
        case '10':
            console.log('Oktober')
            break
        case '11':
            console.log('November')
            break
        case '12':
            console.log('Desember')
            break
        default:
            break
    }
    //tanggal.sort(function(nilai1, nilai2, nilai3){return nilai3<nilai2<nilai1})
    posisiTgl = tanggal.sort(function(nilai1, nilai2, nilai3){return nilai3<nilai2<nilai1})
    console.log(posisiTgl)
    tanggal = arr[3].split('/')
    console.log(tanggal.join('-'))
    var namaResmi = arr[1].slice(0,14)
    console.log(namaResmi)
}

console.log(dataHandling2(input))