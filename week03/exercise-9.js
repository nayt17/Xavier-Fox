//Soal exercise 9 Mencari mean

var nilaiArray = 0

function cariMean(arr){
    for(i=0; i<arr.length; i++){
        nilaiArray = nilaiArray + Number(arr[i])
    }
    var pembagian = Math.round((nilaiArray/arr.length))
    return pembagian
}

console.log(cariMean([7, 7, 7, 7, 7]))