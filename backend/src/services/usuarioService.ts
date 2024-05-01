import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export class UsuarioService {
    
    async buscarUsuarioPeloEmail(email: string) {
        // Código para buscar um usuário pelo email.

        return prisma.usuario.findFirst({
            where: {
                email: email
            }
        });
    }

    async criarUsuario(nome: string, email: string, senha: string) {
        // Código para criar um usuário no banco de dados
        
        try {
            // Criptografar a senha
            const hashedPassword = await bcrypt.hash(senha, 10);

            // Caso ja exista um usuário com este email cadastrado.
            const emailCadastrado = await this.buscarUsuarioPeloEmail(email);
            if (emailCadastrado) throw new Error('Email já cadastrado');

            // Faz o cadastro do usuário.
            const usuario = await prisma.usuario.create({
                data: {
                    nome: nome,
                    email: email,
                    senha: hashedPassword
                }
            });
            
            return usuario;

        } catch (error: Error | any) {
            // Caso ocorra um erro, retorna a mensagem de erro.

            console.log(error.message);
        }
    }
}