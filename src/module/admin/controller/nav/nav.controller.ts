import { Controller, Get } from '@nestjs/common';

import { NavService } from '../../../../service/nav/nav.service';

@Controller('admin/nav')
export class NavController {
  constructor(private navService: NavService) {}

  //查找
  @Get()
  async index() {
    /*
    var result = await this.navService.findAll(
      { _id: '5aea853a418a7d26d499d623' },
      'title url',
    );*/ //只返回title url
    var result = await this.navService.findAll(); //findAll()里面的参数必须符合接口。
    return result;
  }

  //增加数据
  @Get('add')
  async doAdd() {
    var result = await this.navService.add({
      title: '新增的导航222',
      url: 'http://sayo.com',
      status: 1,
    });

    return result;
  }

  //修改数据
  @Get('update')
  async doUpdate() {
    var result = await this.navService.update(
      {
        _id: '5af96dbf34cdff24b88a2053', //第一个条件
      },
      {
        title: '大地专栏',
        url: 'http://bbs.itying.com', //要更新的数据。
      },
    );

    return result;
  }

  //删除数据。
  @Get('delete')
  async doDelete() {
    var result = await this.navService.delete({
      _id: '5aea853a418a7d26d499d623 ',
    });

    return result;
  }
}
