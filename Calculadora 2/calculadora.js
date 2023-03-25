function calcular() {
    var valor1 = document.calcform.valor1.value;
    
    let a = 0, b = 1;
    while (b < valor1) {
        let temp = b;
        b = parseInt(a) + parseInt(b);
        a = temp;
    }
    var res = "O número " + valor1 + " " + (b == valor1 ? "faz" : "não faz") + " parte da sequência de Fibonacci.";
    document.calcform.res.value = res;
}
