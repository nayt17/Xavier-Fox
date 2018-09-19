function highestScore(students) {
    // Code disini
    if (students.length === 0) {
        return '[]'
    }

    var scoreTertinggi = {
    }

    //Buat value ke scoreTertinggi
    for(var v = 0; v<students.length; v++){
        if(students[v].class === 'foxes'){
            scoreTertinggi.foxes = {name:'', score:0}
        }else if(students[v].class === 'wolves'){
            scoreTertinggi.wolves = {name:'', score:0}
        }else if(students[v].class === 'tigers'){
            scoreTertinggi.tigers = {name:'', score:0}
        }
    }

    var bakFox = 0
    var bakWolves = 0
    var bakTiger = 0
    for (var i = 0; i < students.length; i++) {
        if (students[i].class === 'foxes') {
            if (students[i].score > bakFox) {
                scoreTertinggi.foxes.name = students[i].name
                scoreTertinggi.foxes.score = students[i].score
                bakFox = 0
                bakFox = students[i].score
            } else {
                bakFox = bakFox
            }
        } else if (students[i].class === 'wolves') {
            if(students[i].score > bakWolves){
                scoreTertinggi.wolves.name = students[i].name
                scoreTertinggi.wolves.score = students[i].score
                bakWolves = 0
                bakWolves = students[i].score
            }else{
                bakWolves = bakWolves
            }
        }else if(students[i].class === 'tigers'){
            if(students[i].score >bakTiger){
                scoreTertinggi.tigers.name = students[i].name
                scoreTertinggi.tigers.score = students[i].score
                bakTiger = 0
                bakTiger = students[i].score
            }else{
                bakTiger = bakTiger
            }
        }
    }

    return scoreTertinggi

}


// TEST CASE
console.log(highestScore([
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
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
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
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}