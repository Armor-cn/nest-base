import { Controller, Get, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { SearchDto } from 'libs/common/Dto/search.dto';
import { CommonService } from '@app/common';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private readonly commonService: CommonService) { }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('search')
  async Search(@Query() searchDto: SearchDto) {
    console.log(searchDto);
    return await this.commonService.Search(searchDto);
  }
}
