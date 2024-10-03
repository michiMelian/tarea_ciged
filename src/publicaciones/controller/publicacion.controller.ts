import {
  Controller,
  Delete,
  Param,
  Patch,
  Post,
  Body,
  UseGuards,
  UsePipes,
  ValidationPipe,
  HttpCode,
} from '@nestjs/common';
import { Get } from '@nestjs/common';
import { PublicacionService } from '../service/publicacion.service';
import { ApiBody, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreatePublicacionDto, UpdatePublicacionDto } from '../dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/common/decorators/roles.decorators';

@ApiTags('Publicacion CRUD')
@UseGuards(RolesGuard)
@Controller('publication')
export class PublicacionController {
  constructor(private readonly publicacionService: PublicacionService) {}

  @Get()
  @ApiOperation({ summary: 'Obtener todas las publicaciones' })
  async listarProductos() {
    return await this.publicacionService.listarProductos();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Obtener una publicacion por ID' })
  async obtenerProducto(@Param('id') id: number) {
    return await this.publicacionService.obtenerProducto(id);
  }

  @Post()
  @Roles('Admin', 'SuperAdmin')
  @ApiBody({ type: CreatePublicacionDto })
  @ApiOperation({ summary: 'Crear una publicación' })
  @UsePipes(new ValidationPipe())
  async createProducto(@Body() createProducto: CreatePublicacionDto) {
    return await this.publicacionService.createProducto(createProducto);
  }

  a: number = 50;

  @Patch(':id')
  @HttpCode(204)
  @Roles('Admin', 'SuperAdmin')
  @ApiBody({ type: UpdatePublicacionDto })
  @ApiOperation({ summary: 'Actualizar una publicación' })
  @UsePipes(new ValidationPipe())
  async updateProducto(
    @Param('id') id: number,
    @Body() updateProducto: UpdatePublicacionDto,
  ) {
    return await this.publicacionService.updateProducto(id, updateProducto);
  }

  @Delete(':id')
  @Roles('Admin', 'SuperAdmin')
  @ApiOperation({ summary: 'Eliminar una publicación' })
  async deleteProducto(@Param('id') id: number) {
    return await this.publicacionService.deleteProducto(id);
  }
}
