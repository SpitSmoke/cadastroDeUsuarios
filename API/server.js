import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';

const prisma = new PrismaClient();
const app = express();

// Configuração do CORS para permitir requisições do seu front-end
app.use(cors({
    origin: 'https://cadastro-de-usuarios-mvdm1v8z5-joses-projects-68f88fc4.vercel.app'
}));

app.use(express.json());

// Definindo a porta do servidor
const PORT = process.env.PORT || 3000;

// Rota para criar usuário
app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(201).json(req.body);
});

// Rota para buscar/listar os usuários
app.get('/usuarios', async (req, res) => {
    let users = [];

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        });
    } else {
        users = await prisma.user.findMany();
    }

    res.status(200).json(users);
});

// Rota para editar usuário
app.put('/usuarios/:id', async (req, res) => {
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    });

    res.status(200).json(req.body);
});

// Rota para deletar usuário
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ message: 'Usuário deletado com sucesso!' });
});

// Iniciando o servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});




























    // app.post('/usuarios')
    // app.put('/usuarios')
    // app.delete('/usuarios')

    // Login: Jose
    // Password: mafefe4598


    // 1) Tipo de Rota / Metodo HTTP
    // 2) Endereço

    // Objetivos : Criar nossa api de usuarios
    //  
    //  - Criar um usuario
    //  - Listar todos os usuarios
    //  - Editar um usuario
    //  - Deletar um usuario
    //  - Buscar um usuario por id