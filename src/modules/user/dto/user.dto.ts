import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsTaxId, IsNotEmpty, IsPostalCode } from 'class-validator';

export class CreateUserDTO {
  @ApiProperty()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsTaxId('pt-BR')
  cpf: string;

  @ApiProperty({ required: false })
  @IsPostalCode('BR')
  cep?: string;
}
