import express from 'express'
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const prisma = new PrismaClient()

const app = express()


app.use(cors()) 

app.use(express.json())

// rota pra criar usuario
app.post('/usuarios', async (req, res) => {
    await prisma.user.create({
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    res.status(201).json(req.body)
})

// rota pra Buscar/Listar os usuarios
app.get('/usuarios', async (req, res) => {
    let users = []

    if (req.query) {
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    res.status(200).json(users)
})

// Editar o usuario
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
    })

    res.status(201).json(req.body)
})

// Delete Usuario
app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    res.status(200).json({ message: 'Usuario deletado com sucesso!' })
})

app.listen(3000)





























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