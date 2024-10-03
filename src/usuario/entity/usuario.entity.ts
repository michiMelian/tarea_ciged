import { Providers } from 'src/providers/entity/providers.entity';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from 'typeorm';
import { Type } from 'class-transformer';
import { Publicacion } from 'src/publicaciones/entity/publicacion.entity';

@Entity()
export class Usuario {
  //Columna primaria autoincremental
  @PrimaryGeneratedColumn()
  id: number;
  //Columna de tipo texto
  @Column()
  name: string;

  @Column()
  lastname: string;

  @Column()
  user: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @OneToOne(() => Providers, (providers) => providers.usuario, {
    nullable: true,
  })
  providers: Providers;

  @OneToMany(() => Publicacion, (publicacion) => publicacion.id, {
    nullable: true,
  })
  @Type(() => Publicacion)
  publicaciones: Publicacion[];
}
