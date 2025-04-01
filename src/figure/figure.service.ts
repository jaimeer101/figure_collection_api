import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFigureDto } from './dto/create-figure.dto';
import { UpdateFigureDto } from './dto/update-figure.dto';
import { Figure } from './entities/figure.entity';

@Injectable()
export class FigureService {
  constructor(
    @InjectRepository(Figure) private readonly userRepository: Repository<Figure>,
  ) {}

  create(createFigureDto: CreateFigureDto): Promise<Figure> {
    const figure: Figure = new Figure();
    figure.name = createFigureDto.name;
    figure.price = createFigureDto.price;
    figure.image_url = createFigureDto.image_url;
    return this.userRepository.save(figure);
  }

  findAll(): Promise<Figure[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<Figure> {
    return this.userRepository.findOneBy({ id });
  }

  update(id: number, updateFigureDto: UpdateFigureDto): Promise<Figure> {
    const figure: Figure = new Figure();
    figure.name = updateFigureDto.name;
    figure.price = updateFigureDto.price;
    figure.image_url = updateFigureDto.image_url;
    figure.id = id;
    return this.userRepository.save(figure);
  }

  remove(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
