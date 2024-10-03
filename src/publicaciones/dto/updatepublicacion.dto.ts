import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdatePublicacionDto {
  @ApiProperty({ description: 'El comentario de la publicacion.' })
  @IsString()
  @IsOptional()
  readonly comment: string;
}
