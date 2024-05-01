import express from 'express';
import { UsuarioController } from './controllers/usuarioController';

const usuarioController = new UsuarioController();
const router = express.Router();

router.post('/cadastro', usuarioController.cadastro)

export default router;