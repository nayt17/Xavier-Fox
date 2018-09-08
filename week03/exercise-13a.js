//Soal exercise 10 Perkalian Unik

function targetTerdekat(arr) {
    // you can only write your code here!
    var counterOX = 0
    var counterX = 0

    //Cek ketersediaan X
    for(var ex=0;ex<arr.length;ex++){
        if(arr[ex] === 'x'){
            counterX += 1
        }else{
            counterX += 0
        }
    }
    if(counterX === 0){
        return 0
    }else{
        counterX = 0
    }

    //Cek jarak o ke x terdekat
    for(var i=0;i<arr.length; i++){
        if(arr[i] === 'o'){
            /*if(arr[i+1] === ' ' && arr[i-1] === ' ' && arr[i-2] === ' '){
                return 0
            }else*/ 
            if(arr[i+1] === 'x' || arr[i-1] === 'x'){
                return 1
            }else{
                for(var j=i; j<arr.length; j++){ 
                    if(arr[j] === 'x'){
                        return counterOX
                    }else{
                        counterOX += 1
                    }
                }
            }
        }
        
    }
  }
  
  // TEST CASES
//console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
//console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
//console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
//console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2