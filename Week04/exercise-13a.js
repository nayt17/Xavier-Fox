//Exercise 13 Week 4

function countProfit(shoppers) {
    let listBarang = [['Sepatu Stacattu', 1500000, 10],
    ['Baju Zoro', 500000, 2],
    ['Sweater Uniklooh', 175000, 1]
    ];
    // you can only write your code here!
    var arrKosong = []
    var pembeli = { identitas:[ { product: 'Sepatu Stacattu', shoppers: [], leftOver: 10, totalProfit: 0 },{ product: 'Baju Zoro', shoppers: [], leftOver: 2, totalProfit: 0 },{ product: 'Sweater Uniklooh', shoppers: [], leftOver: 1, totalProfit: 0 }] }
    var jumlahSepatu = listBarang[0][2]
    var jumlahBaju = listBarang[1][2]
    console.log(jumlahBaju)
    var jumlahSweater = listBarang[2][2]

    if (shoppers.length === 0) {
        return '[]'
    } else {
        for (var i = 0; i < shoppers.length; i++) {
            if (shoppers[i].product === listBarang[0][0]) {
                pembeli.identitas[0].product = listBarang[0][0]
                if (jumlahSepatu >= shoppers[i].amount) {

                    jumlahSepatu = jumlahSepatu - shoppers[i].amount
                    pembeli.identitas[0].shoppers.push(shoppers[i].name)
                    pembeli.identitas[0].leftOver = jumlahSepatu
                    pembeli.identitas[0].totalProfit = pembeli.identitas[0].totalProfit + (listBarang[0][1]*shoppers[i].amount)

                }
            }else if(shoppers[i].product === listBarang[1][0]){
                pembeli.identitas[1].product = listBarang[1][0]
                if (jumlahBaju >= shoppers[i].amount) {

                    jumlahBaju = jumlahBaju - shoppers[i].amount
                    pembeli.identitas[1].shoppers.push(shoppers[i].name)
                    pembeli.identitas[1].leftOver = jumlahBaju
                    pembeli.identitas[1].totalProfit = pembeli.identitas[1].totalProfit + (listBarang[1][1]*shoppers[i].amount)

                }
            }else if(shoppers[i].product === listBarang[2][0]){
                pembeli.identitas[2].product = listBarang[2][0]
                if (jumlahSweater >= shoppers[i].amount) {

                    jumlahSweater = jumlahSweater - shoppers[i].amount
                    pembeli.identitas[2].shoppers.push(shoppers[i].name)
                    pembeli.identitas[2].leftOver = jumlahSweater
                    pembeli.identitas[2].totalProfit = pembeli.identitas[2].totalProfit + (listBarang[2][1]*shoppers[i].amount)

                }
            }
        }
        console.log(pembeli.identitas)
    }
    

}

// TEST CASES
//console.log(countProfit([{ name: 'Windi', product: 'Sepatu Stacattu', amount: 2 }, { name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3 }, { name: 'Rani', product: 'Sweater Uniklooh', amount: 2 }]));
  //[ { product: 'Sepatu Stacattu',
  //   shoppers: [ 'Windi', 'Vanessa' ],
  //   leftOver: 5,
  //   totalProfit: 7500000 },
  // { product: 'Baju Zoro',
  //   shoppers: [],
  //   leftOver: 2,
  //   totalProfit: 0 },
  // { product: 'Sweater Uniklooh',
  //   shoppers: [],
  //   leftOver: 1,
  //   totalProfit: 0 } ]

//console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [ 'Windi' ],
  //     leftOver: 2,
  //     totalProfit: 12000000 },
  //   { product: 'Baju Zoro',
  //     shoppers: [ 'Devi', 'Lisa' ],
  //     leftOver: 0,
  //     totalProfit: 1000000 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [ 'Rani' ],
  //     leftOver: 0,
  //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
  // [ { product: 'Sepatu Stacattu',
  //     shoppers: [],
  //     leftOver: 10,
  //     totalProfit: 0 },
  //   { product: 'Baju Zoro',
  //     shoppers: [],
  //     leftOver: 2,
  //     totalProfit: 0 },
  //   { product: 'Sweater Uniklooh',
  //     shoppers: [],
  //     leftOver: 1,
  //     totalProfit: 0 } ]
//console.log(countProfit([])); //[]