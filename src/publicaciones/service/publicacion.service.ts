import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { PublicacionRepository } from '../repository/publicacion.repository';
import { CreatePublicacionDto, UpdatePublicacionDto } from '../dto';

@Injectable()
export class PublicacionService {
  constructor(private readonly publicacionRepository: PublicacionRepository) {}
  async listarProductos() {
    return await this.publicacionRepository.getProductos();
  }
  async obtenerProducto(id: number) {
    return await this.publicacionRepository.getProducto(id);
  }

  async createProducto(createProducto: CreatePublicacionDto) {
    try {
      const validation = await this.publicacionRepository.getProdutcName(
        createProducto.comment,
      );
      if (validation) {
        throw new ConflictException();
      }
      return await this.publicacionRepository.createProducto(createProducto);
    } catch (error) {
      console.log(error);
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  async updateProducto(id: number, updateProducto: UpdatePublicacionDto) {
    try {
      const validation = await this.publicacionRepository.getProdutcName(
        updateProducto.comment,
      );
      if (validation && validation.id !== id) {
        throw new ConflictException();
      }
      return await this.publicacionRepository.updateProducto(
        id,
        updateProducto,
      );
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException();
    }
  }

  async deleteProducto(id: number) {
    return await this.publicacionRepository.deleteProducto(id);
  }
}
