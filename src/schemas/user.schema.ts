//import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

import { ApiProperty } from '@nestjs/swagger';

//@Entity()
export class User {
  //@Column()
  @ApiProperty()
  id?: string;

  //@Column()
  @ApiProperty()
  name: string;

  //@Column({ unique: true })
  @ApiProperty()
  email?: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty()
  cep?: string;
}
