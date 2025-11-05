const params = new URLSearchParams(window.location.search);
const id = params.get("id");

// Localiza produto
const produto = window.produtos.find(p => p.id === id);

// Se não encontrar produto
if (!produto) {
    document.body.innerHTML = `<div class="text-center text-white pt-40 text-3xl">Produto não encontrado 😕</div>`;
    throw "Produto não encontrado";
}

// Atualiza breadcrumb
document.getElementById("breadNome").innerText = produto.nome;

// Atualiza conteúdo
document.getElementById("produtoNome").innerText = produto.nome;
document.getElementById("produtoImagem").src = "../" + produto.imagem;

document.getElementById("produtoDescricao").innerText = produto.descricao;

document.getElementById("produtoPreco").innerText =
    produto.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

// Lista de especificações
const specs = document.getElementById("produtoSpecs");
produto.especificacoes.forEach(item => {
    specs.innerHTML += `
        <li class="flex items-center gap-2">
            <i class="fa-solid fa-check text-cyan-400"></i>
            ${item}
        </li>`;
});

// Botão WhatsApp com nome do produto
document.getElementById("btnComprar").href =
    `https://wa.me/5521978926365?text=${encodeURIComponent(`Olá! Tenho interesse no ${produto.nome}`)}`;
