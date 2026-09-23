import { salvarCadastro, carregarCadastro } from "./storage.js";

export function iniciarFormulario() {
    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    const campos = {
        nome: document.querySelector("#nome"),
        email: document.querySelector("#email"),
        nascimento: document.querySelector("#nascimento"),
        cpf: document.querySelector("#cpf"),
        telefone: document.querySelector("#telefone"),
        cep: document.querySelector("#cep"),
        endereco: document.querySelector("#endereco"),
        cidade: document.querySelector("#cidade"),
        estado: document.querySelector("#estado")
    };

    const dadosSalvos = carregarCadastro();

    if (dadosSalvos) {
        Object.entries(campos).forEach(([chave, campo]) => {
            if (campo && dadosSalvos[chave]) {
                campo.value = dadosSalvos[chave];
            }
        });
    }

    Object.values(campos).forEach((campo) => {
        if (!campo) {
            return;
        }

        campo.addEventListener("input", () => {
            validarCampo(campo);
        });
    });

    formulario.addEventListener("submit", (evento) => {
        evento.preventDefault();

        let formularioValido = true;

        Object.values(campos).forEach((campo) => {
            if (campo && !validarCampo(campo)) {
                formularioValido = false;
            }
        });

        removerMensagem();

        if (!formularioValido) {
            mostrarMensagem(
                "erro",
                "Existem campos inválidos. Revise os dados antes de enviar."
            );
            return;
        }

        const dados = {};

        Object.entries(campos).forEach(([chave, campo]) => {
            dados[chave] = campo.value.trim();
        });

        salvarCadastro(dados);

        mostrarMensagem(
            "sucesso",
            "Cadastro salvo com sucesso no navegador."
        );
    });
}

function validarCampo(campo) {
    campo.classList.remove("campo-erro", "campo-sucesso");

    if (!campo.checkValidity()) {
        campo.classList.add("campo-erro");
        return false;
    }

    campo.classList.add("campo-sucesso");
    return true;
}

function mostrarMensagem(tipo, texto) {
    const formulario = document.querySelector("form");

    if (!formulario) {
        return;
    }

    const mensagem = document.createElement("div");
    mensagem.id = "mensagem-formulario";
    mensagem.className = tipo;
    mensagem.setAttribute("role", "status");
    mensagem.textContent = texto;

    formulario.appendChild(mensagem);
}

function removerMensagem() {
    const mensagem = document.querySelector("#mensagem-formulario");

    if (mensagem) {
        mensagem.remove();
    }
}