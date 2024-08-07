import { Injectable } from '@nestjs/common';
import { astra as as, supabase as sb } from '../db.config';

@Injectable()
export class ReportsService {
  async findAll() {
    const data = await as.collection('report').find({}, { limit: 1, sort: { timestamp: -1 } }).toArray();
    
    return {
      message: 'ultimo report',
      results: data[0],
    };
  }

  async create() {
    const { data, error } = await sb.rpc('make_report');

    if (error) throw new Error(error.message);

    const data2 = await as.collection('report').insertOne({
      ...data[0],
      timestamp: new Date().toISOString(),
    });

    return {
      message: 'report inserido',
      id: data2.insertedId,
    };
  }
}
