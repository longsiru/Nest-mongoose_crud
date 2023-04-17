import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';

import {Nav} from '../../interface/nav.interface'

@Injectable()
export class NavService {

    constructor(@InjectModel('Nav') private navModel) { }
    
    //查找数据
    async findAll(json:Nav={},fields?:String) {
        var result = await this.navModel.find(json,fields).exec();
        return result;
    }

    //增加数据
    async add(json:Nav) {        
        var nav=new this.navModel(json);
        var result=await nav.save();
        return result;
    }

    //修改数据
    async update(json1:Nav,json2:Nav) {       
        
        var result=await this.navModel.updateOne(json1,json2);
        return result;
    }

     //删除数据
     async delete(json:Nav) {       
        
        var result=await this.navModel.deleteOne(json);
        return result;
    }





}
