import { Nav } from '../../interface/nav.interface';
export declare class NavService {
    private navModel;
    constructor(navModel: any);
    findAll(json?: Nav, fields?: String): Promise<any>;
    add(json: Nav): Promise<any>;
    update(json1: Nav, json2: Nav): Promise<any>;
    delete(json: Nav): Promise<any>;
}
