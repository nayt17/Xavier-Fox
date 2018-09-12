//Soal exercise 5 week 4

function ubahHuruf(kata) {
    // you can only write your code here!
    var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r',
                      's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    var bakKataTambah1 = ''

    //Posisi kata
    for(var i = 0; i<kata.length; i++){
      for(j=0; j<alphabet.length; j++){
        if(kata[i] === alphabet[j]){
          bakKataTambah1 += alphabet[j+1]
        }else{
          bakKataTambah1 = bakKataTambah1
        }
      }  
    }
    return bakKataTambah1
  }
  
  // TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu