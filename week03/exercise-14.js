//Soal exercise 14 Mengurutkan angka
var bakGenap = []
var bakGanjil = []
var bakKel3 = []

function mengelompokkanAngka(arr){
    for(i=0; i<arr.length; i++){
        //console.log(arr[i])
        if(arr[i]%3 === 0){
            bakKel3.push(arr[i])
        } else if(arr[i]%2 === 0){
            bakGenap.push(arr[i])
        } else{
            bakGanjil.push(arr[i])
        }
    }
    // console.log(bakKel3)
    // console.log(bakGenap)
    // console.log(bakGanjil)
    var arr2D = [bakGenap,bakGanjil,bakKel3]
    return (arr2D)

}

// console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
// console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
// console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
// console.log(mengelompokkanAngka([])); // [ [], [], [] ]