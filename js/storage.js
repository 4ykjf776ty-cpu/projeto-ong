const STORAGE_KEY = "ongSolidariaCadastro";

export function salvarCadastro(dados) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(dados));
}

export function carregarCadastro() {
    const dadosSalvos = localStorage.getItem(STORAGE_KEY);

    if (!dadosSalvos) {
        return null;
    }

    try {
        return JSON.parse(dadosSalvos);
    } catch (erro) {
        console.error("Erro ao recuperar dados:", erro);
        return null;
    }
}

export function limparCadastro() {
    localStorage.removeItem(STORAGE_KEY);
}