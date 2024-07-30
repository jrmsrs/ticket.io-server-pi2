import { Injectable } from '@nestjs/common';
import { User } from './entities/user.entity';
import { Message } from './entities/message.entity';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
  // get all users
  getUsers(): User[] {
    return [
      {
        id: 'abcdidgaf' + Date.now(),
        name: 'José Aindanaoexiste Nobanco',
        email: 'jose@email.com',
        cpf: '14231254311',
      },
    ];
  }

  // add user
  postUser(user: CreateUserDTO): Message {
    return {
      message:
        'sucesso! usuario\n' +
        JSON.stringify(user) +
        '\nnao foi inserido pq nao funfa ainda',
    };
  }

  // get user by id
  getUser(id: string): User {
    return {
      id,
      name: 'José Aindanaoexiste Nobanco',
      email: 'jose@email.com',
      cpf: '14231254311',
    };
  }

  // update user by id
  updateUser(id: string, user: CreateUserDTO): Message {
    return {
      message:
        'successo! usuario ' +
        JSON.stringify({ id, ...user }) +
        ' nao foi atualizado pq nao funfa ainda',
    };
  }

  // delete user by id
  deleteUser(id: string): Message {
    return {
      message:
        'success! usuario id = ' +
        id +
        ' nao foi deletado e nem existe pq nao funfa ainda',
    };
  }
}
