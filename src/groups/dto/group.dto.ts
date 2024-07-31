import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDTO {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  cpf: string;

  @ApiProperty({ required: false })
  cep?: string;
}
