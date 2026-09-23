import { iniciarRouter } from "./router.js";
import { iniciarFormulario } from "./form.js";
import { renderizarProjetos } from "./components.js";

function iniciarAplicacao() {
    iniciarRouter((rota) => {
        if (rota === "projetos") {
            renderizarProjetos();
        }

        if (rota === "cadastro") {
            iniciarFormulario();
        }
    });
}

document.addEventListener("DOMContentLoaded", iniciarAplicacao);
const botaoContraste = document.querySelector("#contraste-btn");

const contrasteSalvo = localStorage.getItem("altoContraste");

if (contrasteSalvo === "true") {
    document.body.classList.add("alto-contraste");

    if (botaoContraste) {
        botaoContraste.setAttribute("aria-pressed", "true");
        botaoContraste.textContent = "Contraste normal";
    }
}

if (botaoContraste) {
    botaoContraste.addEventListener("click", () => {
        document.body.classList.toggle("alto-contraste");

        const ativo = document.body.classList.contains("alto-contraste");

        botaoContraste.setAttribute("aria-pressed", String(ativo));
        botaoContraste.textContent = ativo
            ? "Contraste normal"
            : "Alto contraste";

        localStorage.setItem("altoContraste", String(ativo));
    });
}