import { CreateUserService } from '../services/CreateUserService';
import { v4 as uuid } from 'uuid';

class FakeData{
    createUserService = new CreateUserService();

    async execute(){
        await this.createUserService.execute({
            id: uuid(),
            nome: 'Nome',
            email: 'email@provedor',
        })

        await this.createUserService.execute({
            id: uuid(),
            nome: 'Nome2',
            email: 'email2@provedor',
        })
    }

    async createUser(){
        const user = await this.createUserService.execute({
            id: uuid(),
            nome: 'Nome',
            email: 'email@provedor',
        })

        return user
    }
}

export { FakeData }
