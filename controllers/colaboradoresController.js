const database = require('../database');



exports.cadastrarColaborador = async (req, res) => {
    const { nome, cargo, setor } = req.body;
    try {
        const query = 'INSERT INTO colaboradores (nome, cargo, setor) VALUES ($1, $2, $3)';
        await database.query(query, [nome, cargo, setor]);
        res.status(201).json({ message: "Colaborador cadastrado com sucesso." });
    } catch (error) {
        console.error('Erro ao cadastrar colaborador:', error);
        res.status(500).json({ message: "Erro ao cadastrar colaborador." });
    }
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

exports.removerColaborador = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM colaboradores WHERE id = $1';
    database.query(query, [id])
        .then(() => {
            res.status(200).send({ status: 'Colaborador removido com sucesso!' });
        })
        .catch(error => {
            console.error('Erro ao remover colaborador:', error);
            res.status(500).send({ status: 'Erro ao remover colaborador' });
        });
};
