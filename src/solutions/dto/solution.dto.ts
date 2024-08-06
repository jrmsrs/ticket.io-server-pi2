import { ApiProperty } from '@nestjs/swagger';

export class CreateSolutionDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  details: string;

  @ApiProperty()
  dev_contact: string;

  @ApiProperty()
  author: string;
}
