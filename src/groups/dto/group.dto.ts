import { ApiProperty } from '@nestjs/swagger';

export class CreateGroupDTO {
  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  manager: string;

  @ApiProperty({ isArray: true })
  users: string[];
}
