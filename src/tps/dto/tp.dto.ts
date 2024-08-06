import { ApiProperty } from '@nestjs/swagger';

export class CreateTPDto {
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
