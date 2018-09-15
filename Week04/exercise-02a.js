//Soal exercise 2 week 4

function fpb(angka1, angka2) {
    // you can only write your code here!
    while(angka2 != 0){
        var hasil = angka2
        angka2 = angka1 % angka2
        angka1 = hasil
    }
    return hasil
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1