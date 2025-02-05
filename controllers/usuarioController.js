import { getAllUsuarios, getUsuarioByEmail, createUsuario, updateUsuario,} from "../models/usuarioModels.js";

import { modeloUsuario, modeloLogin, modeloAtualizaçãoUsuario,} from "../Validations/usuarioValidation.js";

import bcrypt from 'bcrypt'; // Biblioteca para criptografia de senha

import jwt from 'jsonwebtoken'; //Biblioteca para geração de tokens JWT