//Exercise 12 Week 4

function shoppingTime(memberId, money) {
    // you can only write your code here!
    // console.log(typeof(money))
    // console.log(typeof(memberId))
    var kembalian = 0
    if(memberId === ''){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja'
    }else if(money < 50000){
        return 'Mohon maaf, uang tidak cukup'
    }else if(memberId === undefined && money === undefined){
        return 'Mohon maaf, toko X hanya berlaku untuk member saja bro'
    }else{
        var pelanggan = {
            pembeli:{
            memberId: memberId,
            money: money,
            listPurchased: [],
            changeMoney: 0
            }
        }

        kembalian += money

        //Sepatu
        if(kembalian>=1500000){
            pelanggan.pembeli.listPurchased.push('Sepatu Stacattu')
            kembalian = kembalian - 1500000
        } 

        //Baju brand Zoro
        if(kembalian>= 500000){
            pelanggan.pembeli.listPurchased.push('Baju Zoro')
            kembalian = kembalian - 500000
        }
        
        //Baju H&N
        if(kembalian>=250000){
            pelanggan.pembeli.listPurchased.push('Baju H&N')
            kembalian = kembalian - 250000
        }

        //Sweater uniklooh
        if(kembalian >= 175000){
            pelanggan.pembeli.listPurchased.push('Sweater Uniklooh')
            kembalian = kembalian - 175000
        }

        //Casing
        if(kembalian >= 50000){
            pelanggan.pembeli.listPurchased.push('Casing Handphone')
            kembalian = kembalian - 50000
        }

        pelanggan.pembeli.changeMoney = kembalian


        console.log(pelanggan.pembeli)
    }


  }

// Toko X sedang melakukan SALE untuk beberapa barang, yaitu:

//     Sepatu brand Stacattu seharga 1500000
//     Baju brand Zoro seharga 500000
//     Baju brand H&N seharga 250000
//     Sweater brand Uniklooh seharga 175000
//     Casing Handphone seharga 50000

  
  // TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
    //{ memberId: '1820RzKrnWn08',
    // money: 2475000,
    // listPurchased:
    //  [ 'Sepatu Stacattu',
    //    'Baju Zoro',
    //    'Baju H&N',
    //    'Sweater Uniklooh',
    //    'Casing Handphone' ],
    // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
  //{ memberId: '82Ku8Ma742',
  // money: 170000,
  // listPurchased:
  //  [ 'Casing Handphone' ],
  // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja