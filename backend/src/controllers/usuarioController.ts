import { UsuarioService } from "../services/usuarioService";

const usuarioService = new UsuarioService();

export class UsuarioController {

    async cadastro(req: any, res: any) {
        // Controller para cadastrar um usuário

        try {
            const { nome, email, senha, confirmarSenha } = req.body;

            // Verifica se as senhas são iguais
            if (senha !== confirmarSenha) {
                return res.status(400).json({ message: 'Senhas não conferem' });
            }

            await usuarioService.criarUsuario(nome, email, senha);
            res.status(201).json( {message: 'Usuario cadastrado com sucesso!'})
            
        } catch (error: Error | any) {
            res.status(400).json({ message: error.message });
        }
    }

    async login(req: any, res: any) {
        // Controller para logar um usuário

        try {
            const { email, senha } = req.body;

            const token = await usuarioService.LogarUsuario({email, senha});
            res.status(200).json({ token });

        } catch (error: Error | any) {
            res.status(400).json({ message: error.message });
        }
    }
}