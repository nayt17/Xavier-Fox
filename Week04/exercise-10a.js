//Soal exercise 10 week 4

function checkAB(num) {
    // you can only write your code here!
    var str = ''
    var ketemuB = 0

    for(var i=0; i<num.length; i++){
        if(num[i] != ' '){
            str += num[i]
        }
    }
    console.log(str)

    for(var j = 0; j<str.length; j++){
        if(str[j] === 'a'){
            for(var k = j+1; k<=j+3; k++ ){
                if(str[k] === 'b'){
                   ketemuB += 1 
                }else{
                    ketemuB = ketemuB
                }
            }
        }
    }
    if(ketemuB > 0){
        return true
    }else{
        return false
    }
}

// TEST CASES
//console.log(checkAB('lane borrowed')); // true
//console.log(checkAB('i am sick')); // false
//console.log(checkAB('you are boring')); // true
//console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false