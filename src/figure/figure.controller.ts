import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FigureService } from './figure.service';
import { CreateFigureDto } from './dto/create-figure.dto';
import { UpdateFigureDto } from './dto/update-figure.dto';

@Controller('figure')
export class FigureController {
  constructor(private readonly figureService: FigureService) {}

  @Post()
  create(@Body() createFigureDto: CreateFigureDto) {
    return this.figureService.create(createFigureDto);
  }

  @Get()
  findAll() {
    return this.figureService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.figureService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFigureDto: UpdateFigureDto) {
    return this.figureService.update(+id, updateFigureDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.figureService.remove(+id);
  }
}
