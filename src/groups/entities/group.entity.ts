//import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export class Group {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  manager?: string;

  @ApiProperty()
  created_at: string;
}
