const projetos = [
    {
        titulo: "Campanha de Alimentos",
        descricao:
            "Arrecadamos alimentos não perecíveis para montar cestas básicas destinadas a famílias que necessitam de apoio.",
        categoria: "Solidariedade"
    },
    {
        titulo: "Educação para Todos",
        descricao:
            "Promovemos atividades educativas e arrecadamos materiais escolares para crianças e adolescentes.",
        categoria: "Educação"
    },
    {
        titulo: "Ação Voluntária",
        descricao:
            "Reunimos voluntários para apoiar atividades e iniciativas sociais da comunidade.",
        categoria: "Voluntariado"
    }
];

export function renderizarProjetos() {
    const container = document.querySelector("#lista-projetos");

    if (!container) {
        return;
    }

    container.innerHTML = projetos
        .map(
            (projeto) => `
                <article class="projeto-card">
                    <span class="badge">${projeto.categoria}</span>
                    <h3>${projeto.titulo}</h3>
                    <p>${projeto.descricao}</p>
                </article>
            `
        )
        .join("");
}