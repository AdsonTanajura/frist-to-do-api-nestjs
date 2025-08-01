import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from 'src/list/entity/list.entity';
import { User } from 'src/user/entity/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([List, User])],
  controllers: [ListController],
  providers: [ListService],
  exports: [ListService],
})
export class ListModule {}
