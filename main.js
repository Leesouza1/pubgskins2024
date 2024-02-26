

/*roxo*/
const botaoRoxo = document.querySelector(".btn-roxo");
const elementoSkinsRoxa = document.querySelector(".Skins .roxo");
botaoRoxo.addEventListener("click", () => {
    elementoSkinsRoxa.classList.toggle("ativo");

    elementoSkinsVermelho.classList.remove("ativo");
    elementoSkinsAmarelo.classList.remove("ativo");
    elementoSkinsAzul.classList.remove("ativo");
})

const botaoComprarRoxo = document.querySelector(".btn-roxo");
const elementoComprarRoxo = document.querySelector(".Skins .btn-comprar-roxo")
botaoComprarRoxo.addEventListener("click", () => {
    elementoComprarRoxo.classList.toggle("ativo")

    elementoComprarVermelho.classList.remove("ativo")
    elementoComprarAmarelo.classList.remove("ativo")
    elementoComprarAzul.classList.remove("ativo")
})

const textoRoxo = document.querySelector(".btn-roxo");
const elementotextoRoxo = document.querySelector(".Skins .texto-roxo")
textoRoxo.addEventListener("click", () => {
    elementotextoRoxo.classList.toggle("ativo")

    elementotextoVermelho.classList.remove("ativo")
    elementotextoAmarelo.classList.remove("ativo")
    elementotextoAzul.classList.remove("ativo")
})

const nomeRoxo = document.querySelector(".btn-roxo");
const elementonomeRoxo = document.querySelector(".Skins .nome-roxo")
nomeRoxo.addEventListener("click", () => {
    elementonomeRoxo.classList.toggle("ativo")

    elementonomeVermelho.classList.remove("ativo")
    elementonomeAmarelo.classList.remove("ativo")
    elementonomeAzul.classList.remove("ativo")
}) 


/*vermelho*/
const botaoVermelho = document.querySelector(".btn-vermelho");
const elementoSkinsVermelho = document.querySelector(".Skins .vermelho");
botaoVermelho.addEventListener("click", () => {
    elementoSkinsVermelho.classList.toggle("ativo")

    elementoSkinsRoxa.classList.remove("ativo");
    elementoSkinsAmarelo.classList.remove("ativo");
    elementoSkinsAzul.classList.remove("ativo");
})
const botaoComprarVermelho = document.querySelector(".btn-vermelho");
const elementoComprarVermelho = document.querySelector(".Skins .btn-comprar-vermelho")
botaoComprarVermelho.addEventListener("click", () => {
    elementoComprarVermelho.classList.toggle("ativo")

    elementoComprarRoxo.classList.remove("ativo")
    elementoComprarAmarelo.classList.remove("ativo")
    elementoComprarAzul.classList.remove("ativo")
})

const textoVermelho =document.querySelector(".btn-vermelho");
const elementotextoVermelho = document.querySelector(".Skins .texto-vermelho")
textoVermelho.addEventListener("click", () => {
    elementotextoVermelho.classList.toggle("ativo")

    elementotextoRoxo.classList.remove("ativo")
    elementotextoAmarelo.classList.remove("ativo")
    elementotextoAzul.classList.remove("ativo")
})

const nomeVermelho = document.querySelector(".btn-vermelho");
const elementonomeVermelho = document.querySelector(".Skins .nome-vermelho")
nomeVermelho.addEventListener("click", () => {
    elementonomeVermelho.classList.toggle("ativo")

    elementonomeAmarelo.classList.remove("ativo")
    elementonomeAzul.classList.remove("ativo")
    elementonomeRoxo.classList.remove("ativo")
})

/*amarelo*/
const botaoAmarelo = document.querySelector(".btn-amarelo");
const elementoSkinsAmarelo = document.querySelector(".Skins .amarelo");
botaoAmarelo.addEventListener("click", () => {
    elementoSkinsAmarelo.classList.toggle("ativo")

    elementoSkinsVermelho.classList.remove("ativo")
    elementoSkinsRoxa.classList.remove("ativo");
    elementoSkinsAzul.classList.remove("ativo");
})
const botaoComprarAmarelo = document.querySelector(".btn-amarelo")
const elementoComprarAmarelo = document.querySelector(".Skins .btn-comprar-amarelo")
botaoComprarAmarelo.addEventListener("click", () => {
    elementoComprarAmarelo.classList.toggle("ativo")

    elementoComprarRoxo.classList.remove("ativo")
    elementoComprarVermelho.classList.remove("ativo")
    elementoComprarAzul.classList.remove("ativo")
})

const textoAmarelo = document.querySelector(".btn-amarelo");
const elementotextoAmarelo = document.querySelector(".Skins .texto-amarelo")
textoAmarelo.addEventListener("click", () => {
    elementotextoAmarelo.classList.toggle("ativo")

    elementotextoVermelho.classList.remove("ativo")
    elementotextoRoxo.classList.remove("ativo")
    elementotextoAzul.classList.remove("ativo")
})

const nomeAmarelo = document.querySelector(".btn-amarelo");
const elementonomeAmarelo = document.querySelector(".Skins .nome-amarelo")
nomeAmarelo.addEventListener("click", () => {
    elementonomeAmarelo.classList.toggle("ativo")

    elementonomeVermelho.classList.remove("ativo")
    elementonomeAzul.classList.remove("ativo")
    elementonomeRoxo.classList.remove("ativo")
}) 



/*azul*/
const botaoAzul = document.querySelector(".btn-azul");
const elementoSkinsAzul = document.querySelector(".Skins .azul");
botaoAzul.addEventListener("click", () => {
    elementoSkinsAzul.classList.toggle("ativo")

    elementoSkinsAmarelo.classList.remove("ativo")
    elementoSkinsVermelho.classList.remove("ativo")
    elementoSkinsRoxa.classList.remove("ativo");
})

const botaoComprarAzul = document.querySelector(".btn-azul")
const elementoComprarAzul = document.querySelector(".Skins .btn-comprar-azul")
botaoComprarAzul.addEventListener("click", () => {
    elementoComprarAzul.classList.toggle("ativo")

    elementoComprarRoxo.classList.remove("ativo")
    elementoComprarVermelho.classList.remove("ativo")
    elementoComprarAmarelo.classList.remove("ativo")
})

const textoAzul = document.querySelector(".btn-azul");
const elementotextoAzul = document.querySelector(".Skins .texto-azul")
textoAzul.addEventListener("click", () => {
    elementotextoAzul.classList.toggle("ativo")

    elementotextoVermelho.classList.remove("ativo")
    elementotextoAmarelo.classList.remove("ativo")
    elementotextoRoxo.classList.remove("ativo")
}) 

const nomeAzul = document.querySelector(".btn-azul");
const elementonomeAzul = document.querySelector(".Skins .nome-azul")
nomeAzul.addEventListener("click", () => {
    elementonomeAzul.classList.toggle("ativo")

    elementonomeVermelho.classList.remove("ativo")
    elementonomeAmarelo.classList.remove("ativo")
    elementonomeRoxo.classList.remove("ativo")
})









