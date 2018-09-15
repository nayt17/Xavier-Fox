//Soal exercise 8 week 4

function urutkanAbjad(str) {
    // you can only write your code here!
    var strToArr = []
    var arrToStr = ''

    for(var i=0; i<str.length; i++){
        strToArr.push(str[i])
    }
    //console.log(strToArr)
    strToArr.sort()
    //console.log(strToArr)

    for(var j=0; j<str.length; j++){
        arrToStr += strToArr[j]
    }
    return arrToStr
    
  }
  
  // TEST CASES
console.log(urutkanAbjad('hello')); // 'ehllo'
console.log(urutkanAbjad('truncate')); // 'acenrttu'
console.log(urutkanAbjad('developer')); // 'deeeloprv'
console.log(urutkanAbjad('software')); // 'aeforstw'
console.log(urutkanAbjad('aegis')); // 'aegis