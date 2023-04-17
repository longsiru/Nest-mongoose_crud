import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AdminModule } from './module/admin/admin.module';
import { ApiModule } from './module/api/api.module';
import { DefaultModule } from './module/default/default.module';
import { MongooseModule } from '@nestjs/mongoose';

//配置数据库连接

@Module({
  imports: [
    AdminModule,
    ApiModule,
    DefaultModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/koa'), //1.配置数据库连接//2.去要操作的controller所属的module配置数据库模型。
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
