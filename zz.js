const tablo = document.getElementById("tablo");

function yaz(x) {
    tablo.value += x;
    
}

function count() {
    tablo.value = eval(tablo.value);
}

function remove() {
    tablo.value = "";
}


