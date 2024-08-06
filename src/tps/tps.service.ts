import { Injectable } from '@nestjs/common';
import { CreateTPDto } from './dto/tp.dto';
import { supabase as sb } from '../db.config';

@Injectable()
export class TPsService {
  async findAll() {
    const { data, error } = await sb.from('tp').select('*');

    if (error) throw new Error(error.message);
    return {
      message: 'dados dos tps',
      results: data,
    };
  }

  async create(tp: CreateTPDto) {
    const { data, error } = await sb.from('tp').insert(tp).select();

    if (error) throw new Error(error.message);
    return {
      message: 'tp inserido',
      id: data[0].id,
    };
  }

  async findOneById(id: string) {
    const { data, error } = await sb.from('tp').select().eq('id', id);

    if (error) throw new Error(error.message);
    return {
      message: 'dados do tp',
      results: data[0],
    };
  }

  async update(id: string, upData: CreateTPDto) {
    const { count, error } = await sb
      .from('tp')
      .update(upData, { count: 'exact' })
      .eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('tp não existe');

    return {
      message: `tp com ID=${id} alterado com sucesso.`,
    };
  }

  async remove(id: string) {
    const { error, count } = await sb
      .from('tp')
      .delete({ count: 'exact' })
      .eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('tp não existe');

    return {
      message: `tp com ID=${id} removido com sucesso.`,
    };
  }
}
