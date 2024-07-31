import { Injectable } from '@nestjs/common';
import { CreateGroupDTO } from './dto/group.dto';
import { supabase as sb } from '../db.config';

@Injectable()
export class GroupsService {
  async findAll() {
    const { data, error } = await sb.from('group').select('*');

    if (error) throw new Error(error.message);
    return {
      message: 'dados dos grupos solucionadores',
      results: data,
    };
  }

  async create(group: CreateGroupDTO) {
    const { data, error } = await sb.from('group').insert(group).select();

    if (error) throw new Error(error.message);
    return {
      message: ' grupo solucionador inserido',
      id: data[0].id,
    };
  }

  async findOneById(id: string) {
    const { data, error } = await sb.from('group').select().eq('id', id);

    if (error) throw new Error(error.message);
    return {
      message: 'dados do grupo solucionador',
      results: data[0],
    };
  }

  async findMembers(id: string) {
    const { data, error } = await sb
      .from('group_user')
      .select('user (*)')
      .eq('group_id', id);

    if (error) throw new Error(error.message);
    return {
      message: `membros do grupo solucionador id=${id}`,
      results: data,
    };
  }

  async findIssues(id: string) {
    const { data, error } = await sb.from('tp').select().eq('group_id', id);

    if (error) throw new Error(error.message);
    return {
      message: `tickets de problemas atribuidos ao grupo solucionador id=${id}`,
      results: data.map((a) => a.id),
    };
  }

  async update(id: string, upData: CreateGroupDTO) {
    const { count, error } = await sb.from('group').update(upData).eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('grupo solucionador não existe');

    return {
      message: `grupo solucionador com ID=${id} alterado com sucesso.`,
    };
  }

  async remove(id: string) {
    const { error, count } = await sb.from('group').delete().eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('grupo solucionador não existe');

    return {
      message: `grupo solucionador com ID=${id} removido com sucesso.`,
    };
  }
}
