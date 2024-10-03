import { Module } from '@nestjs/common';
import { Publicacion } from './entity/publicacion.entity';
import { PublicacionController } from './controller/publicacion.controller';
import { PublicacionService } from './service/publicacion.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PublicacionRepository } from './repository/publicacion.repository';
import { AuthModule } from 'src/auth/auth.module';
import { UsuarioModule } from 'src/usuario/usuario.module';

@Module({
  imports: [TypeOrmModule.forFeature([Publicacion]), AuthModule, UsuarioModule],
  controllers: [PublicacionController],
  providers: [PublicacionService, PublicacionRepository],
})
export class PublicacionesModule {}
