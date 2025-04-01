import { Module } from '@nestjs/common';
import { FigureService } from './figure.service';
import { FigureController } from './figure.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Figure } from './entities/figure.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Figure])],
  controllers: [FigureController],
  providers: [FigureService],
})
export class FigureModule {}
