function kattintas(gomb){
    if(x_kore){
        gomb.innerHTML = "X"
    }else{
        gomb.innerHTML = "O"
    }
    x_kore = !x_kore
    gomb.disabled = true
}

let x_kore = true;