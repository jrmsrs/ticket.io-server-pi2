//import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

export class User {
  @ApiProperty()
  id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email?: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  cep?: string;

  @ApiProperty()
  created_at: string;
}
