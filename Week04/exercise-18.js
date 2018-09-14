function kaliTerusRekursif(angka) {
    // you can only write your code here!
    var bakAngka = ''
    bakAngka += angka
    var nilaiAngka = 1
    
    if(bakAngka.length <= 1){
        return Number(bakAngka)
    }else{
        for(var i=0; i<bakAngka.length; i++){
            nilaiAngka = nilaiAngka * Number(bakAngka[i])
        }
        return kaliTerusRekursif(nilaiAngka)
    }
  }
  
  // TEST CASES
  console.log(kaliTerusRekursif(66)); // 8
  console.log(kaliTerusRekursif(3)); // 3
  console.log(kaliTerusRekursif(24)); // 8
  console.log(kaliTerusRekursif(654)); // 0
  console.log(kaliTerusRekursif(1231)); // 6

