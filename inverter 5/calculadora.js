function calcular() {
    var valor1 = document.calcform.valor1.value;
    var tes = "";

    for (let i = valor1.length - 1; i >= 0; i--){
        var palavra = (valor1[i])
        var tes = tes + palavra;
    }
    document.calcform.res.value = tes;
}
