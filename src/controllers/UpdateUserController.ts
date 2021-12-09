import {
    Request,
    Response
} from 'express';
import {
    UpdateUserService
} from '../services/UpdateUserService';

class UpdateUserController { //PUT usuário
    async handle(request: Request, response: Response) {
        const updateUserService = new UpdateUserService();

        const {
            id,
            nome,
            email
        } = request.body

        if (id === undefined) {
            return response.status(400).json({
                msg: 'Informe um id'
            })
        }

        if (nome === undefined) {
            return response.status(400).json({
                msg: 'Informe um nome'
            })
        }

        await updateUserService.execute({
            id,
            nome,
            email
        })

        return response.status(204).json()
    }
}

export {
    UpdateUserController
}