function graduates(students) {
    // Code disini

    if(students.length === 0){
        return students
    }

    //Buat object
    var pelajarLulus = {}

    //Isi object sesuai dengan class
    for(var i = 0; i<students.length; i++){
        if(students[i].class==='foxes'){
            pelajarLulus.foxes = []
        }else if(students[i].class === 'wolves'){
            pelajarLulus.wolves = []
        }else if(students[i].class === 'tigers'){
            pelajarLulus.tigers = []
        }
    }

    //Masukkan array sesuai class
    for(var j = 0; j<students.length; j++){
        if(students[j].class === 'foxes'){
            if(students[j].score > 75){
                pelajarLulus.foxes.push({ name: students[j].name, score: students[j].score})
            }
        }else if(students[j].class === 'wolves'){
            if(students[j].score > 75){
                pelajarLulus.wolves.push({ name: students[j].name, score: students[j].score})
            }
        }else if(students[j].class === 'tigers'){
            if(students[j].score > 75){
                pelajarLulus.tigers.push({ name: students[j].name, score: students[j].score})
            }
        }
    }

    return pelajarLulus


}

console.log(graduates([
    {
        name: 'Dimitri',
        score: 90,
        class: 'foxes'
    },
    {
        name: 'Alexei',
        score: 85,
        class: 'wolves'
    },
    {
        name: 'Sergei',
        score: 74,
        class: 'foxes'
    },
    {
        name: 'Anastasia',
        score: 78,
        class: 'wolves'
    }
]));

// {
//   foxes: [
//     { name: 'Dimitri', score: 90 }
//   ],
//   wolves: [
//     { name: 'Alexei' , score: 85 },
//     { name: 'Anastasia', score: 78 }
//   ]
// }

console.log(graduates([
    {
        name: 'Alexander',
        score: 100,
        class: 'foxes'
    },
    {
        name: 'Alisa',
        score: 76,
        class: 'wolves'
    },
    {
        name: 'Vladimir',
        score: 92,
        class: 'foxes'
    },
    {
        name: 'Albert',
        score: 71,
        class: 'wolves'
    },
    {
        name: 'Viktor',
        score: 80,
        class: 'tigers'
    }
]));

// {
//   foxes: [
//     { name: 'Alexander', score: 100 },
//     { name: 'Vladimir', score: 92 }
//   ],
//   wolves: [
//     { name: 'Alisa', score: 76 },
//   ],
//   tigers: [
//     { name: 'Viktor', score: 80 }
//   ]
// }


console.log(graduates([])); //{}