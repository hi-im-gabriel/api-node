import {
    Request,
    Response
} from 'express';
import {
    v4 as uuid
} from 'uuid';
import {
    CreateUserService
} from '../services/CreateUserService';

class CreateUserController { // Post
    async handle(request: Request, response: Response) {

        const createUserService = new CreateUserService();

        const nome = request.body.nome;
        const email = request.body.email;
        const id = uuid();
        console.log(nome);
        if (nome === undefined) {
            return response.status(400).json({
                msg: 'Nome obrigatório'
            })
        }

        const user = await createUserService.execute({
            id,
            nome,
            email
        })

        return response.status(201).json(user)
    }
}

export {
    CreateUserController
}