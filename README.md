# Projetos

Coleção de pequenos exercícios em **HTML, CSS e JavaScript** puro. Cada pasta é uma página independente com um formulário e um botão **Calcular**. Os exercícios foram feitos para treinar lógica, manipulação de formulários e leitura de dados em JavaScript.

## Exercícios

| Pasta | O que faz |
|---|---|
| `Calculadora 2/` | Recebe um número e mostra a sequência de Fibonacci até esse valor |
| `inverter 5/` | Recebe um texto e mostra os caracteres na ordem inversa |
| `o valor de faturamento diário 3/` | Lê o faturamento de cada dia (em `dados.json`) e mostra o menor e o maior valor, além dos dias abaixo de uma média |
| `porcentual 4/` | Calcula, em percentual, a participação de SP, RJ, MG, ES e outros estados no faturamento total |

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES6, com `let`, `const`, `map` e `filter`)

## Como executar

Não há instalação. Basta abrir o `index.html` de cada pasta no navegador.

Para o exercício 3, que lê o arquivo `dados.json`, use um servidor local simples, porque o navegador pode bloquear a leitura direta do arquivo. Por exemplo, dentro da pasta do exercício:

```bash
python -m http.server 8000
```

Depois, abra `http://localhost:8000`.

## Observações

- Os valores de faturamento e de estados do exercício 4 estão escritos direto no código (dados de exemplo).
- Alguns nomes de pasta têm espaços e acentos, então podem precisar de aspas no terminal.
- Projeto de estudo, sem uso em produção.

## Autor

Desenvolvido por [Juliano Sobrinho](https://github.com/JuhhSobrinho).
