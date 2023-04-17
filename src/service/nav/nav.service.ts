import { Injectable } from '@nestjs/common';

import { InjectModel } from '@nestjs/mongoose';
//service里面要对数据进行约束的话，要做一个对应的interface
//引入interface。
import { Nav } from '../../interface/nav.interface';

@Injectable()
export class NavService {
  constructor(@InjectModel('Nav') private navModel) {}

  //查找全部数据
  async findAll(json: Nav = {}, fields?: String) {
    //json: Nav = {}，用来校验，方法中传入的参数必要要在Nav里面。表示要符合nav，interface。
    //= {},表示等于空，表示可以不写条件。
    var result = await this.navModel.find(json, fields).exec();
    return result;
  }

  //增加数据
  async add(json: Nav) {
    //json: Nav，用来校验。方法中传入的参数必要要在Nav里面，传入其他参数直接报错。
    var nav = new this.navModel(json);
    var result = await nav.save();
    return result;
  }

  //修改数据
  async update(json1: Nav, json2: Nav) {
    var result = await this.navModel.updateOne(json1, json2);
    return result;
  }

  //删除数据
  async delete(json: Nav) {
    var result = await this.navModel.deleteOne(json);
    return result;
  }
}
