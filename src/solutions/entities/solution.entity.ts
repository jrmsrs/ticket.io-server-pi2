import { ApiProperty } from '@nestjs/swagger';

export class Solution {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  details: string;

  @ApiProperty()
  dev_contact: string;

  @ApiProperty()
  author: string;

  @ApiProperty()
  created_at: string;
}
