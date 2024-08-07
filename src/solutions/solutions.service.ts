import { Injectable } from '@nestjs/common';
import { CreateSolutionDto } from './dto/solution.dto';
import { supabase as sb } from '../db.config';

@Injectable()
export class SolutionsService {
  async findAll() {
    const { data, error } = await sb.from('solution').select('*');

    if (error) throw new Error(error.message);
    return {
      message: 'dados das solutions',
      results: data,
    };
  }

  async create(solution: CreateSolutionDto) {
    const { data, error } = await sb.from('solution').insert(solution).select();

    if (error) throw new Error(error.message);
    return {
      message: 'solution inserida',
      id: data[0].id,
    };
  }

  async findOneById(id: string) {
    const solutionRes = await sb.from('solution').select().eq('id', id);
    if (solutionRes.error) throw new Error(solutionRes.error.message);

    const issueRes = await sb.from('tp').select('id').eq('solution', id);
    if (issueRes.error) throw new Error(issueRes.error.message);

    return {
      message: 'dados da solution',
      results: solutionRes.data[0],
      issues: issueRes.data.map((a) => a.id),
    };
  }

  async update(id: string, upData: CreateSolutionDto) {
    const { count, error } = await sb
      .from('solution')
      .update(upData, { count: 'exact' })
      .eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('solution não existe');

    return {
      message: `solution com ID=${id} alterada com sucesso.`,
    };
  }

  async remove(id: string) {
    const { error, count } = await sb
      .from('solution')
      .delete({ count: 'exact' })
      .eq('id', id);

    if (error) throw new Error(error.message);
    if (!count) throw new Error('solution não existe');

    return {
      message: `solution com ID=${id} removida com sucesso.`,
    };
  }
}
