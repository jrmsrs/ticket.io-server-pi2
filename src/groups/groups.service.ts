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
    const createGroupData = { ...group };
    delete createGroupData.users;
    const groupRes = await sb.from('group').insert(createGroupData).select();
    if (groupRes.error) throw new Error(groupRes.error.message);

    const createGroupUserData = group.users.map((userId) => ({
      group_id: groupRes.data[0].id,
      user_id: userId,
    }));
    const groupUserRes = await sb
      .from('group_user')
      .insert(createGroupUserData)
      .select();
    if (groupUserRes.error) throw new Error(groupUserRes.error.message);

    return {
      message: 'grupo solucionador inserido',
      id: groupRes.data[0].id,
      users: createGroupUserData,
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
    const updateGroupData = { ...upData };
    delete updateGroupData.users;

    const groupRes = await sb
      .from('group')
      .update(updateGroupData, { count: 'exact' })
      .eq('id', id);

    if (groupRes.error) throw new Error(groupRes.error.message);
    if (!groupRes.count) throw new Error('grupo solucionador não existe');

    const updateGroupUserData = upData.users.map((userId) => ({
      group_id: id,
      user_id: userId,
    }));

    await sb
      .from('group_user')
      .delete()
      .eq('group_id', id)
      .then((res) => {
        if (res.error) throw new Error(res.error.message);
      });

    const groupUserRes = await sb
      .from('group_user')
      .insert(updateGroupUserData)
      .select();
    if (groupUserRes.error) throw new Error(groupUserRes.error.message);

    return {
      message: `grupo solucionador com ID=${id} alterado com sucesso.`,
    };
  }

  async remove(id: string) {
    const { error, count } = await sb
      .from('group')
      .delete({ count: 'exact' })
      .eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('grupo solucionador não existe');

    return {
      message: `grupo solucionador com ID=${id} removido com sucesso.`,
    };
  }
}
