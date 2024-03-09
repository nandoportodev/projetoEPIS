const database = require('../database');

exports.cadastrarEPI = async (req, res) => {
    const { nome, id } = req.body;
    try {
        await database.query('INSERT INTO epis (nome, id) VALUES ($1, $2)', [nome, id]);
        res.status(201).json({ status: 'EPI cadastrado com sucesso!' });
    } catch (error) {
        console.error('Erro ao cadastrar EPI:', error);
        res.status(500).json({ status: 'Erro ao cadastrar EPI. Por favor, tente novamente mais tarde.' });
    }
};

exports.listarEPIs = async (req, res) => {
    try {
        const result = await database.query('SELECT * FROM epis');
        res.status(200).json({ epis: result.rows });
    } catch (error) {
        console.error('Erro ao listar EPIs:', error);
        res.status(500).json({ status: 'Erro ao listar EPIs. Por favor, tente novamente mais tarde.' });
    }
};
