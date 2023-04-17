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
    AdminModule, ApiModule, DefaultModule,
    MongooseModule.forRoot("mongodb://127.0.0.1:27017/koa")
  ],
  controllers: [AppController],
  providers: [AppService]  
})
export class AppModule {}
