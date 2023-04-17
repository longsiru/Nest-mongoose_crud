import { ArticleService } from '../../../../service/article/article.service';
export declare class NewsController {
    private articleService;
    constructor(articleService: ArticleService);
    index(): Promise<any>;
}
