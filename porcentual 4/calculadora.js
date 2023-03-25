function calcular() {
    var valor1 = 1;
    
    const valores = {
      'SP': 67836.43,
      'RJ': 36678.66,
      'MG': 29229.88,
      'ES': 27165.48,
      'Outros': 19849.53
    };
    
    const total = Object.values(valores).reduce((acc, curr) => acc + curr, 0);


    var sp = ((valores['SP']) / total) * 100;
    var rj = ((valores['RJ']) / total) * 100;
    var mg = ((valores['MG']) / total) * 100;
    var es = ((valores['ES']) / total) * 100;
    var outros = ((valores['Outros']) / total) * 100;

    document.calcform.sp.value = sp.toFixed(2);
    document.calcform.rj.value = rj.toFixed(2);
    document.calcform.mg.value = mg.toFixed(2);
    document.calcform.es.value = es.toFixed(2);
    document.calcform.outros.value = outros.toFixed(2);
    document.calcform.total.value = total;




}