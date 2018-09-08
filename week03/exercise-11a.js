//Soal exercise 11 Deret Aritmatika
var nilaiTrue = 0

function tentukanDeretAritmatika (arr){
    var kelipatan = arr[1] - arr[0]

    for(i=0;i<arr.length;i++){
        var nilaiDeret = kelipatan + arr[i]
        if(nilaiDeret === arr[i+1]){
            nilaiTrue = nilaiTrue + 1
        }
    }
    console.log(nilaiTrue)
    var nilaiAkhir = nilaiTrue/(arr.length-1)
    if(nilaiAkhir === 1){
        return true
    }else{
        return false
    }
}
// console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
// console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
// console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
// console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false