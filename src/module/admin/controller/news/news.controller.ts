import { Controller,Get } from '@nestjs/common';


import { ArticleService } from '../../../../service/article/article.service';


@Controller('admin/news')
export class NewsController {
    constructor(private articleService:ArticleService){}

    @Get()
    async index(){
        var result=await this.articleService.findAll({"title":"互联网+++"});
        return result;
    }
}
