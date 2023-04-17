import { NavService } from '../../../../service/nav/nav.service';
export declare class NavController {
    private navService;
    constructor(navService: NavService);
    index(): Promise<any>;
    doAdd(): Promise<any>;
    doUpdate(): Promise<any>;
    doDelete(): Promise<any>;
}
