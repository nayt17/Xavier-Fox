//Soal exercise 12 Deret Geometri
var benar = 0

function tentukanDeretGeometri(arr){
    var kelipatan = arr[1]/arr[0]
    //console.log(kelipatan)

    for(i=0;i<arr.length;i++){
        var nilaiDg = arr[i] * kelipatan

        if(nilaiDg === arr[i+1]){
            benar = benar + 1
        }
        // else{
        //     //return false
        // }
    }
    console.log(benar)

    var nilaiAkhir = benar/(arr.length-1)
    if(nilaiAkhir === 1){
        return true
    }else{
        return false
    }
}

console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9]));