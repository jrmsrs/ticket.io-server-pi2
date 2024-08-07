import { ApiProperty } from '@nestjs/swagger';

export class CreateReportDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  desc: string;

  @ApiProperty()
  prev_conclusion: string;

  @ApiProperty()
  incidents_count: number;

  @ApiProperty()
  author: string;
}
