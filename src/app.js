import express from "express"

// operações
import { dividir } from "./operacoes/divisao.js";
import { multiplicar } from "./operacoes/multi.js";
import { raizQuadrada } from "./operacoes/raizQuadrada.js";
import { soma } from "./operacoes/index.js";
import { subtracao } from "./operacoes/index.js";

const app = express();
const PORT = 3000;

app.get('/api/soma/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ erro: 'valores devem ser numeros' });
    }
    let resultado = soma(a, b)
    res.status(200).send({ resultado });
});

app.get('/api/subtracao/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ erro: 'valores devem ser numeros' });
    }
    let resultado = subtracao(a, b)
    res.status(200).send({ resultado });
});

app.get('/api/divisao/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ erro: 'valores devem ser numeros' });
    }
    let resultado = dividir(a, b)
    res.status(200).send({ resultado });
});

app.get('/api/raizquadrada/:a', (req, res) => {
    const a = Number(req.params.a);
    if (isNaN(a)) {
        return res.status(400).send({ erro: 'valor deve ser numero' });
    }
    let resultado = raizQuadrada(a)
    res.status(200).send({ resultado });
});

app.get('/api/multiplicacao/:a/:b', (req, res) => {
    const a = Number(req.params.a);
    const b = Number(req.params.b);
    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send({ erro: 'valores devem ser numeros' });
    }
    let resultado = multiplicar(a, b)
    res.status(200).send({ resultado });
});

app.use((err, _req, res, _next) => {
    console.error(err);
    res.status(500).send({ erro: 'erro interno do servidor' });
});

app.listen(PORT, () => {
    console.log(`rodando na porta ${PORT}`)
});