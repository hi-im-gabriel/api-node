import {
    Request,
    Response
} from 'express';
import {
    GetAllUserService
} from '../services/GetAllUserService';

class GetAllUserController { //GET all
    async handle(request: Request, response: Response) {
        const getAllUserService = new GetAllUserService();

        const users = await getAllUserService.execute();

        return response.status(200).json(users)
    }
}

export {
    GetAllUserController
}