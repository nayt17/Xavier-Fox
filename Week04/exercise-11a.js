//Exercise 11 Week 4

function changeMe(arr) {
    // you can only write your code here!
    //console.log(arr[0].length)
    if (arr.length === 0) {
        console.log('""')
    } else {
        for (var i = 0; i < arr.length; i++) {
            var avengers = {
                anggota: {
                    firstName: '',
                    lastName: '',
                    gender: '',
                    age: ''
                }
            }
            if (arr[i].length === 4) {
                for (var j = 0; j < arr[i].length; j++) {
                    if (j === 0) {
                        avengers.anggota.firstName += arr[i][j]
                        //console.log(avengers.anggota.firstName)
                    } else if (j === 1) {
                        avengers.anggota.lastName += arr[i][j]
                    } else if (j === 2) {
                        avengers.anggota.gender += arr[i][j]
                    } else if (j === 3) {
                        avengers.anggota.age += arr[i][j]

                        var umur = 2018 - avengers.anggota.age
                        avengers.anggota.age = umur
                    }
                }
            }else{
                for (var k = 0; k < arr[i].length; k++) {
                    if (k === 0) {
                        avengers.anggota.firstName += arr[i][k]
                        //console.log(avengers.anggota.firstName)
                    } else if (k === 1) {
                        avengers.anggota.lastName += arr[i][k]
                    } else if (k === 2) {
                        avengers.anggota.gender += arr[i][k]
                        avengers.anggota.age += 'Invalid Birth Year'
                    } 
                }
            }

            console.log(i + 1 + '. ' + avengers.anggota.firstName, avengers.anggota.lastName + ': ', avengers.anggota)
            console.log('')
        }
    }


    //console.log(arr[1][3])
    //console.log(avengers.anggota.age)

}


// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
  // { firstName: 'Christ',
  //   lastName: 'Evans',
  //   gender: 'Male',
  //   age: 36 }
  // 2. Robert Downey:
  // { firstName: 'Robert',
  //   lastName: 'Downey',
  //   gender: 'Male',
  //   age: 'Invalid Birth Year' }
//changeMe([]); // ""