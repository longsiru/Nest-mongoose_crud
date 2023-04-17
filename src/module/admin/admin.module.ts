import { Module } from '@nestjs/common';
import { UserController } from './controller/user/user.controller';
import { NewsController } from './controller/news/news.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ArticleSchema } from '../../schema/article.schema';
import { NavSchema } from '../../schema/nav.schema';
import { ArticleService } from '../../service/article/article.service';
import { NavController } from './controller/nav/nav.controller';

import { NavService } from '../../service/nav/nav.service';


//配置数据库模型


@Module({
  imports:[MongooseModule.forFeature([
    {
      name: "Article",
      schema: ArticleSchema,
      collection:'article',
    },
    {
      name: "Nav",
      schema: NavSchema,
      collection:'nav',
    }
  ])],
  controllers: [UserController, NewsController, NavController],
  providers:[ArticleService,NavService]
})
export class AdminModule {}
