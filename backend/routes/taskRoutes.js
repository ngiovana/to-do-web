// routes/tarefaRoutes.js

const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
// Rotas para operações CRUD de tarefas
router.get('/tarefas', taskController.listarTarefas);
router.post('/tarefas', taskController.criarTarefa);
router.put('/tarefas/:id', taskController.atualizarTarefa);
router.delete('/tarefas/:id', taskController.excluirTarefa);
module.exports = router;