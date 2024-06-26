// Importando o módulo express para lidar com rotas e middlewares
const express = require('express');

// Inicializando a aplicação Express
const app = express();

// Importando as rotas da aplicação relacionadas às tarefas
const taskRoutes = require('./routes/taskRoutes');

// Definindo a porta em que o servidor irá escutar
const PORT = process.env.PORT || 3000;

// Configurando as rotas da aplicação para utilizar as rotas 
//relacionadas às tarefas

app.use('/api', taskRoutes);

// Configurando uma rota inicial para exibir uma mensagem de boas-vindas
app.get('/', (req, res) => {
  res.send('Bem-vindo à API de tarefas!');
});

// Inicializando o servidor e fazendo com que ele escute na porta definida
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});