var input = 'Hello World!'

function balikString(kar){
    var bak = ''
    for(index=input.length-1; index>-1 ;index--){
        bak = bak + input[index]
    }
    return bak
}

console.log(balikString(input))