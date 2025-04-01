import { PartialType } from '@nestjs/mapped-types';
import { CreateFigureDto } from './create-figure.dto';

export class UpdateFigureDto extends PartialType(CreateFigureDto) {
    name: string;

    price: number;
    
    image_url: string;
}
