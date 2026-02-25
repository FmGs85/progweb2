import express from "express";

const app = express();

//Indicar para o express.js ler o body como json
app.use(express.json());

const selecoes = [
    { "id": 1, "selecao": "Brasil", "grupo": "G" },
    { "id": 2, "selecao": "Suíça", "grupo": "G" },
    { "id": 3, "selecao": "Camarões", "grupo": "G" },
    { "id": 4, "selecao": "Sérvia", "grupo": "G" }
];

function buscarSelecaoPorId(id) {
    return selecoes.filter(selecao => selecao.id == id);
}
function buscarIndexPorId(id) {
    return selecoes.findIndex(selecao => selecao.id == id);
}

//Criando Rota Padrão ou Raiz
app.get("/", (req, res) => {
    res.send("Hello World");
});

//Criando Rota para buscar todas as seleções
app.get("/selecoes", (req, res) => {
    res.status(200).send(selecoes);
});


app.post("/selecoes", (req, res) => {
    selecoes.push(req.body);
    res.status(200).send("Seleção cadastrada com sucesso");
});

app.get("/selecoes/:id", (req, res) => {
    // let index = req.params.id;
    // console.log(index)
    res.json(buscarSelecaoPorId(req.params.id));
});

app.delete("/selecoes/:id", (req, res) => {

    let index = buscarIndexPorId(req.params.id);

    //Deletar a seleção
    selecoes.splice(index, 1);
    res.send('Seleção deletada com sucesso');
});

export default app;




