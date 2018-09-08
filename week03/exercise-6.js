//Soal exercise 6

function angkaPalindrome(num) {
    // you can only write your code here!
    
    if(num>=0 && num<=9){
        var nilaiAkhir = num + 1
        return nilaiAkhir
    }else{
        var numToStr = ''
        numToStr +=num
        //console.log(numToStr)
        var bakAngkaPertama = ''
        var bakAngkaKedua = ''
        
        //Looping dari kiri ke kanan
        for(var i=0;i<numToStr.length;i++){
            bakAngkaPertama += numToStr[i]
        }
        
    
        //Looping dari kanan ke kiri
        for(var j=numToStr.length-1; j>=0;j--){
            bakAngkaKedua += numToStr[j]
        }
    
    
        if(bakAngkaPertama === bakAngkaKedua){
            var nilaiAkhir = Number(bakAngkaPertama) + 1
            return nilaiAkhir
        }else{
            for(var a=0; a>-1; a++){
                var bakAngkaKetiga = ''
                for(var b=bakAngkaPertama.length-1; b>-1; b--){
                    bakAngkaKetiga = bakAngkaKetiga + bakAngkaPertama[b]
                }
                
                if(bakAngkaPertama === bakAngkaKetiga){
                    return Number(bakAngkaPertama)
                }else{
                    var strToNum = Number(bakAngkaPertama) + 1
                    bakAngkaPertama = ''
                    bakAngkaPertama += strToNum
        
                }

                //console.log(bakAngkaPertama.length)
                
            }
            
        }
    }
   
}
  
  // TEST CASES
// console.log(angkaPalindrome(8)); // 9
// console.log(angkaPalindrome(10)); // 11
// console.log(angkaPalindrome(117)); // 121
// console.log(angkaPalindrome(175)); // 181
// console.log(angkaPalindrome(1000)); // 1001