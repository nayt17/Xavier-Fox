//Soal exercise 15 Mengurutkan hewan

var bakHewanA = []
var bakHewanC = []
var bakHewanK = []

function groupAnimals(animal){
    for(i=0; i<animal.length; i++){
        //console.log(animal[i][0])
        if(animal[i][0]=== 'a'){
            bakHewanA.push(animal[i])
        }else if(animal[i][0] === 'c'){
            bakHewanC.push(animal[i])
        }else if(animal[i][0] === 'k'){
            bakHewanK.push(animal[i])
        }else if(animal[i][0] === 'u'){
            var bakHewanU = []
            bakHewanU.push(animal[i])
        }
    }
    // console.log(bakHewanA)
    // console.log(bakHewanC)
    // console.log(bakHewanK)
    // console.log(bakHewanU)

    if(bakHewanA != [] && bakHewanC != [] && bakHewanK != [] && bakHewanU != []){
        var animal2D = []
        animal2D.push(bakHewanA)
        animal2D.push(bakHewanC)
        animal2D.push(bakHewanK)
        animal2D.push(bakHewanU)
        
        return animal2D    
    }else{
        var animal2D = []
        animal2D.push(bakHewanA)
        animal2D.push(bakHewanC)
        animal2D.push(bakHewanK)

        return animal2D
        
    }

    
}

//console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']))