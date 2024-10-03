import { EntityManager } from 'typeorm';
import { Injectable, NotFoundException } from '@nestjs/common';
import { Publicacion } from '../entity/publicacion.entity';
import { CreatePublicacionDto, UpdatePublicacionDto } from '../dto';

@Injectable()
export class PublicacionRepository {
  constructor(private dataSource: EntityManager) {}

  async getProductos(): Promise<Publicacion[]> {
    return await this.dataSource
      .getRepository(Publicacion)
      .createQueryBuilder('producto')
      .getMany();
  }

  async createProducto(
    publicacion: CreatePublicacionDto,
  ): Promise<Publicacion> {
    const productoRepository = this.dataSource.getRepository(Publicacion);

    let newPublicacion = new Publicacion();
    newPublicacion.comment = publicacion.comment;

    return await productoRepository.save(newPublicacion);
  }

  async updateProducto(
    id: number,
    publicacion: UpdatePublicacionDto,
  ): Promise<Publicacion> {
    const publicacionRepository = this.dataSource.getRepository(Publicacion);

    const publicacionToUpdate = await publicacionRepository
      .createQueryBuilder('publicacion')
      .where('publicacion.id = :id', { id })
      .getOne();

    if (!publicacionToUpdate) {
      throw new Error('Publicacion not found');
    }

    if (publicacion.comment !== undefined)
      publicacionToUpdate.comment = publicacion.comment;

    // Actualizar las tallas
    const a = await publicacionRepository.save(publicacionToUpdate);
    console.log(a);
    return a;
  }

  async getProducto(id: number): Promise<Publicacion> {
    const product = await this.dataSource
      .getRepository(Publicacion)
      .createQueryBuilder('producto')
      .where('producto.id = :id', { id })
      .getOne();
    if (!product) {
      throw new NotFoundException();
    }
    return product;
  }

  async deleteProducto(id: number) {
    const publicacionRepository = this.dataSource.getRepository(Publicacion);

    const publicacionToDelete = await publicacionRepository
      .createQueryBuilder('publicacion')
      .where('publicacion.id = :id', { id })
      .getOne();

    if (!publicacionToDelete) {
      throw new NotFoundException();
    }

    await publicacionRepository.remove(publicacionToDelete);

    return 'Publicacion eliminado correctamente';
  }

  async getProdutcName(name: string): Promise<Publicacion> {
    return await this.dataSource
      .getRepository(Publicacion)
      .createQueryBuilder('producto')
      .where('producto.title = :name', { name })
      .getOne();
  }
}
