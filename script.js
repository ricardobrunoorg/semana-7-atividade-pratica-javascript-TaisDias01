let nome = prompt("Digite seu nome:");

let renda = Number(prompt("Digite sua renda mensal:"));

let qtdDespesas = Number(prompt("Quantas despesas (1 a 5)?"));

// limita entre 1 e 5
if (qtdDespesas < 1) qtdDespesas = 1;
if (qtdDespesas > 5) qtdDespesas = 5;

// valida renda
while (isNaN(renda)) {
    renda = Number(prompt("Valor inválido. Digite sua renda novamente:"));
}

let totalDespesas = 0;

// loop das despesas
for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = Number(prompt("Digite a despesa " + i));

    while (isNaN(despesa)) {
        despesa = Number(prompt("Valor inválido. Digite a despesa " + i));
    }

    totalDespesas += despesa;
}

let sobra = renda - totalDespesas;

let mensagem = "";

// análise
if (totalDespesas > renda) {
    mensagem = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "✅ Ótimo: boa margem de sobra.";
    } else {
        mensagem = "🙂 Ok: dá para melhorar a sobra.";
    }
}

// resultado final
let resultado = `
Nome: ${nome}
Renda: R$ ${renda.toFixed(2)}
Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Status: ${mensagem}
`;

console.log(resultado);
alert(resultado);