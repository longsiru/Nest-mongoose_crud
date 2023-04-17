import { Controller, Get } from '@nestjs/common';

import { NavService } from '../../../../service/nav/nav.service';



@Controller('admin/nav')
export class NavController {

    constructor(private navService:NavService){}

    @Get()
    async index(){
        // var result=await this.navService.findAll({"_id":"5af966322dc5af0e806a3822"},'title url');
        var result=await this.navService.findAll();
        return result;

    }
    @Get('add')
    async doAdd(){
        var result=await this.navService.add({
            title:"新增的导航222",
            url:"http://itying.com",
            status:1
        })

        return result;
    }
    
    @Get('update')
    async doUpdate(){
        var result=await this.navService.update({
            _id:"5d8330c9aa16ed2f681cafb4"
        },{
            title:"大地专栏",
            url:"http://bbs.itying.com"
        })

        return result;
    }


    @Get('delete')
    async doDelete(){
        var result=await this.navService.delete({_id:"5aea853a418a7d26d499d623"})

        return result;
    }
}
