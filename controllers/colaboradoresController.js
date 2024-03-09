const database = require('../database');

exports.cadastrarColaborador = (req, res) => {
    const { nome, cargo, setor } = req.body;
    const query = 'INSERT INTO colaboradores (nome, cargo, setor) VALUES ($1, $2, $3)';
    database.query(query, [nome, cargo, setor])
        .then(() => {
            res.status(201).send({ status: 'Colaborador cadastrado com sucesso!' });
        })
        .catch(error => {
            console.error('Erro ao cadastrar colaborador:', error);
            res.status(500).send({ status: 'Erro ao cadastrar colaborador' });
        });
};

exports.listarColaboradores = (req, res) => {
    const query = 'SELECT * FROM colaboradores';
    database.query(query)
        .then(resultado => {
            res.status(200).send({ colaboradores: resultado.rows });
        })
        .catch(error => {
            console.error('Erro ao listar colaboradores:', error);
            res.status(500).send({ status: 'Erro ao listar colaboradores' });
        });
};
