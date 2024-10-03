import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreatePublicacionDto {
  @ApiProperty({ description: 'El comentario de la publicacion.' })
  @IsString()
  readonly comment: string;
}
