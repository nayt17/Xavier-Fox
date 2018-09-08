//Soal exercise 10 Perkalian Unik

function perkalianUnik(arr) {
    // you can only write your code here!
    //var bakArray = []
    //var hasilPerkalian = 1
    var bakArray = []
    for(var i=0; i<arr.length; i++){
        var hasilPerkalian = 1
        if(i === 0){
            for(var j=1; j<arr.length; j++){
            hasilPerkalian = hasilPerkalian * Number(arr[j])
            //console.log(hasilPerkalian)
            }
        }else if(i === arr.length-1){
            for(var k=arr.length-2; k>=0; k--){
                hasilPerkalian = hasilPerkalian * Number(arr[k])
                //console.log(hasilPerkalian)
            }
        }else{
            for(var m=0; m<arr.length; m++){
                var indeks = 1 * i
                if(m != indeks){
                    hasilPerkalian = hasilPerkalian * Number(arr[m])
                }else{
                    indeks = 1
                }
            }
        }
        bakArray.push(hasilPerkalian)
    }
    return bakArray
}
  
  // TEST CASES
 // console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
// console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
// console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
// console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
// console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]