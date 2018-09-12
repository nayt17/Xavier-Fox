//Soal exercise 10 week 4

function checkAB(num) {
    // you can only write your code here!
    var ketemuHuruf = 0
    for(var i=0; i<num.length; i++){
        if(num[i] === 'a'){
            for(var j=i+1; j<num.length; j++){
                if(num[j] === 'b'){
                    ketemuHuruf += 1
                }else{
                    ketemuHuruf += 0
                }
            }
        }
    }

    if(ketemuHuruf != 0){
        return true
    }else{
        return false
    }
  }
  
  // TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false