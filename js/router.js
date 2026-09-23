const rotas = {
    inicio: `
        <section id="apresentacao">
            <h2>Transformando vidas através da solidariedade</h2>

            <img
                src="../imagens/voluntarios.jpg"
                alt="Voluntários reunidos em uma ação social da ONG"
            >

            <p>
                Nossa ONG atua no desenvolvimento de iniciativas sociais
                voltadas para pessoas em situação de vulnerabilidade.
                Acreditamos que a solidariedade e o trabalho voluntário
                podem transformar comunidades e criar novas oportunidades.
            </p>

            <div class="alerta">
                <strong>Atenção:</strong> nossas campanhas de arrecadação
                estão abertas para novos colaboradores.
            </div>

            <p>
                <span class="badge">Voluntariado ativo</span>
            </p>

            <div class="sucesso">
                <strong>Sucesso:</strong> sua participação pode transformar vidas.
            </div>
        </section>
    `,

    projetos: `
        <section>
            <h2>Nossos projetos sociais</h2>
            <p>
                Conheça algumas das iniciativas desenvolvidas pela nossa ONG.
            </p>

            <div id="lista-projetos"></div>
        </section>
    `,

    cadastro: `
        <section>
            <h2>Cadastro de voluntário</h2>

            <p>
                Preencha seus dados para demonstrar interesse em participar
                das ações e projetos da nossa ONG.
            </p>

            <form action="#" method="post">
                <fieldset>
                    <legend>Dados pessoais</legend>

                    <p>
                        <label for="nome">Nome completo:</label>
                        <input type="text" id="nome" name="nome" required>
                    </p>

                    <p>
                        <label for="email">E-mail:</label>
                        <input type="email" id="email" name="email" required>
                    </p>

                    <p>
                        <label for="nascimento">Data de nascimento:</label>
                        <input type="date" id="nascimento" name="nascimento" required>
                    </p>

                    <p>
                        <label for="cpf">CPF:</label>
                        <input
                            type="text"
                            id="cpf"
                            name="cpf"
                            pattern="\\d{3}\\.\\d{3}\\.\\d{3}-\\d{2}"
                            maxlength="14"
                            placeholder="000.000.000-00"
                            required
                        >
                    </p>

                    <p>
                        <label for="telefone">Telefone:</label>
                        <input
    type="tel"
    id="telefone"
    name="telefone"
    pattern="\\([0-9]{2}\\) [0-9]{4,5}-[0-9]{4}"
    maxlength="15"
    placeholder="(11) 99999-9999"
    required
>
                    </p>
                </fieldset>

                <fieldset>
                    <legend>Endereço</legend>

                    <p>
                        <label for="cep">CEP:</label>
                        <input
                            type="text"
                            id="cep"
                            name="cep"
                            pattern="\\d{5}-\\d{3}"
                            maxlength="9"
                            placeholder="00000-000"
                            required
                        >
                    </p>

                    <p>
                        <label for="endereco">Endereço:</label>
                        <input type="text" id="endereco" name="endereco" required>
                    </p>

                    <p>
                        <label for="cidade">Cidade:</label>
                        <input type="text" id="cidade" name="cidade" required>
                    </p>

                    <p>
                        <label for="estado">Estado:</label>
                        <input type="text" id="estado" name="estado" maxlength="2" required>
                    </p>
                </fieldset>

                <button type="submit">Enviar cadastro</button>
            </form>
        </section>
    `
};

export function iniciarRouter(aoRenderizar) {
    const main = document.querySelector("main");

    if (!main) {
        return;
    }

    function renderizar(rota) {
        const rotaValida = rotas[rota] ? rota : "inicio";

        main.innerHTML = rotas[rotaValida];

        if (typeof aoRenderizar === "function") {
            aoRenderizar(rotaValida);
        }
    }

    document.addEventListener("click", (evento) => {
        const link = evento.target.closest("nav a");

        if (!link) {
            return;
        }

        evento.preventDefault();

        const href = link.getAttribute("href");

        let rota = "inicio";

        if (href.includes("projetos")) {
            rota = "projetos";
        }

        if (href.includes("cadastro")) {
            rota = "cadastro";
        }

        history.pushState({ rota }, "", `#${rota}`);
        renderizar(rota);
    });

    window.addEventListener("popstate", () => {
        const rota = window.location.hash.replace("#", "") || "inicio";
        renderizar(rota);
    });

    const rotaInicial = window.location.hash.replace("#", "") || "inicio";
    renderizar(rotaInicial);
}