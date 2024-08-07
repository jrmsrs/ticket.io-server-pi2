import { ApiProperty } from '@nestjs/swagger';

export class Report {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  desc: string;

  @ApiProperty()
  prev_conclusion: string;

  @ApiProperty()
  incidents_count: number;

  @ApiProperty()
  conclusion_at: string;

  @ApiProperty()
  doc_id: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  solution: string;

  @ApiProperty()
  created_at: string;
}
