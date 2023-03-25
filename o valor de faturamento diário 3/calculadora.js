function calcular() {
    var valor1 = 1;
    
    var array = [
        { "dia": 1, "valor": 22174.1664 },
        { "dia": 2, "valor": 24537.6698 },
        { "dia": 3, "valor": 26139.6134 },
        { "dia": 4, "valor": 0.0 },
        { "dia": 5, "valor": 0.0 },
        { "dia": 6, "valor": 26742.6612 },
        { "dia": 7, "valor": 0.0 },
        { "dia": 8, "valor": 42889.2258 },
        { "dia": 9, "valor": 46251.174 },
        { "dia": 10, "valor": 11191.4722 },
        { "dia": 11, "valor": 0.0 },
        { "dia": 12, "valor": 0.0 },
        { "dia": 13, "valor": 3847.4823 },
        { "dia": 14, "valor": 373.7838 },
        { "dia": 15, "valor": 2659.7563 },
        { "dia": 16, "valor": 48924.2448 },
        { "dia": 17, "valor": 18419.2614 },
        { "dia": 18, "valor": 0.0 },
        { "dia": 19, "valor": 0.0 },
        { "dia": 20, "valor": 35240.1826 },
        { "dia": 21, "valor": 43829.1667 },
        { "dia": 22, "valor": 18235.6852 },
        { "dia": 23, "valor": 4355.0662 },
        { "dia": 24, "valor": 13327.1025 },
        { "dia": 25, "valor": 0.0 },
        { "dia": 26, "valor": 0.0 },
        { "dia": 27, "valor": 25681.8318 },
        { "dia": 28, "valor": 1718.1221 },
        { "dia": 29, "valor": 13220.495 },
        { "dia": 30, "valor": 8414.61 }
    ];
    
    var valores = array.filter(function(item) {
        return item.valor > 0;
      }).map(function(item) {
        return (item.valor);
      });
      
    const menorNumero = Math.min(...valores);
    const maiorNumero = Math.max(...valores);

    var media = maiorNumero/30;
    var menores = array.filter(function(item) {
        return item.valor < media && item.valor > 0;
      }).map(function(item) {
        return [item.valor, "no dia", item.dia];
      });


    var res = menorNumero;
    var res1 = maiorNumero;
    var res2 = menores;
    document.calcform.res.value = res;
    document.calcform.res1.value = res1;
    document.calcform.res2.value = res2;


}