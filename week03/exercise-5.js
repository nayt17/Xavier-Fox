//Soal exercise 5 Palindrome
var bakKata1 = ''
var bakKata2 = ''
function palindrome(kata){
    for (i=0; i<kata.length; i++){
        bakKata1 += kata[i]
    }
    console.log('Kata awal: '+bakKata1)
    
    for(j=kata.length-1; j>-1; j--){
        bakKata2 += kata[j]
    }
    console.log('Kata awal setelah dibalik: '+bakKata2)

    if(bakKata1 === bakKata2){
        return true
    }else{
        return false
    }
}

// console.log(palindrome('katak')); // true
// console.log(palindrome('blanket')); // false
// console.log(palindrome('civic')); // true
// console.log(palindrome('kasur rusak')); // true
// console.log(palindrome('mister')); // false