import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { supabase as sb } from '../db.config';

@Injectable()
export class UsersService {
  async findAll() {
    const { data, error } = await sb.from('user').select('*');

    if (error) throw new Error(error.message);
    return {
      message: 'dados dos users',
      results: data,
    };
  }

  async create(user: CreateUserDTO) {
    const { data, error } = await sb.from('user').insert(user).select();

    if (error) throw new Error(error.message);
    return {
      message: 'user inserido',
      id: data[0].id,
    };
  }

  async findOne(id: string) {
    const { data, error } = await sb.from('user').select().eq('id', id);

    if (error) throw new Error(error.message);
    return {
      message: 'dados do user',
      results: data,
    };
  }

  async update(id: string, upData: CreateUserDTO) {
    const { count, error } = await sb.from('user').update(upData).eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('user não existe');

    return {
      message: `user com ID=${id} alterado com sucesso.`,
    };
  }

  async remove(id: string) {
    const { error, count } = await sb.from('user').delete().eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('user não existe');

    return {
      message: `user com ID=${id} removido com sucesso.`,
    };
  }
}
