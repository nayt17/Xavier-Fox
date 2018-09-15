//Soal exercise 6 week 4

function hitungHuruf(kata) {
    // you can only write your code here!
    var strToArr = kata.split(' ')
    var bakB = []
    //console.log(bakB)

    //Menentukan posisi kata
    for(var i = 0; i<strToArr.length; i++){

        //Menentukan posisi abjad
        for(var j = 0; j<strToArr[i].length; j++){
            var alphabet = strToArr[i][j]
            //console.log('Alphabet: '+alphabet)
            //Mentukan posisi pembanding
            for(var k = 0; k<strToArr[i].length; k++){
                if(k != j){
                    if(alphabet === strToArr[i][k]){
                        bakB.push(i)
                    }
                }
                
            }
        }
    }
    
    /* Disini kita telah mendapatkan array baru yang telah berisi banyaknya huruf yang sama
       sesuai dengan indeks dari kata, didalam array tersebut berisi indeks dari array strToArr 
       dan yang akan di return adalah indeks ke 0 dari bakB untuk menjadi indeks pada strToArr
       karena indeks ke 0 dari bakB adalah kata pertama yang memiliki huruf yang sama.
    */
    return strToArr[bakB[0]]
  }
  
  
  // TEST CASES
console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
console.log(hitungHuruf('I am a passionate developer')); // passionate
console.log(hitungHuruf('aku adalah anak gembala')); // adalah
console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
console.log(hitungHuruf('mengayuh perahu di danau')); // danau