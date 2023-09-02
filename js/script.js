const elementosBobos = {
    personagem: ["Um pato", "Um palhaço", "Uma banana", "Uma girafa", "Uma abóbora"],
    acao: ["dançou", "cantou", "pulou", "comeu", "dormiu"],
    objeto: ["um bolo", "uma pizza", "um chapéu", "uma banana", "um cachorro-quente"],
    local: ["na lua", "na escola", "no zoológico", "na praia", "na floresta"]
};

function gerarHistoriaBobas() {
    const personagem = getRandomElement(elementosBobos.personagem);
    const acao = getRandomElement(elementosBobos.acao);
    const objeto = getRandomElement(elementosBobos.objeto);
    const local = getRandomElement(elementosBobos.local);

    const historiaGerada = `${personagem} ${acao} ${objeto} ${local}.`;
    
    document.getElementById("historiaGerada").textContent = historiaGerada;
}

function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

document.getElementById("gerarHistoria").addEventListener("click", gerarHistoriaBobas);