//Soal exercise 2 week 4
function cariMedian(arr) {
    // you can only write your code here!
    if(arr.length%2 != 0){
        var medianGanjil = arr.length/2
        var pembulatanGanjil = Math.round(medianGanjil)
        return arr[pembulatanGanjil-1]
    }else{
        var medianGenap = arr.length/2
        var hasilGenap = (arr[medianGenap]+arr[medianGenap-1])/2
        
        return hasilGenap
    }
  }
  
  // TEST CASES
//console.log(cariMedian([1, 2, 3, 4, 5])); // 3
//console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
//console.log(cariMedian([3, 4, 7, 6, 10])); // 7
//console.log(cariMedian([1, 3, 3])); // 3
//console.log(cariMedian([7, 7, 8, 8])); // 7.5