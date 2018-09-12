//Soal exercise 6 week 4

function hitungHuruf(kata) {
    // you can only write your code here!
    var strToArr = kata.split(' ')
    var samaHuruf = 0
    //console.log(strToArr)

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
                        samaHuruf += 1
                        //console.log(strToArr[i][k])
                    }else{
                        samaHuruf + 0
                    }
                }
            }
            //console.log(samaHuruf)
        }

        if(samaHuruf > 0){
            return strToArr[i]
        }
    }
  }
  
  // TEST CASES
//console.log(hitungHuruf('Today, is the greatest day ever')); // greatest
//console.log(hitungHuruf('I am a passionate developer')); // passionate
//console.log(hitungHuruf('aku adalah anak gembala')); // adalah
//console.log(hitungHuruf('rajin pangkal kaya')); // pangkal
//console.log(hitungHuruf('mengayuh perahu di danau')); // danau