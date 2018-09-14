//Soal exercise 4 week 4

function cariModus(arr) {
    // you can only write your code here!
    var nilaiKemunculan = 0
    var nilaiBeda = 0

    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length; j++) {
            if (j != i) {
                if (arr[i] === arr[j]) {
                    nilaiKemunculan += 1
                } else if (arr[i] != arr[j]) {
                    nilaiBeda += 1
                }

            }
        }
        if (nilaiKemunculan > arr.length) {
            return -1
        } else if (nilaiKemunculan > 0 && nilaiKemunculan < arr.length && nilaiBeda > 1) {
            return arr[i]
        } else if(nilaiKemunculan === 0 && nilaiBeda === (arr.length * (arr.length-1))){
            return -1
        }

    }

}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1