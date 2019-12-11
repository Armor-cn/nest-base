import { Controller, Get, Query, Inject } from '@nestjs/common';
import { ApiUseTags } from '@nestjs/swagger';
import { CommonService } from '@app/common';
import { SearchDto } from 'libs/common/Dto/search.dto';
@ApiUseTags('网易云音乐接口Api')
@Controller()
export class MusicCloudController {
  constructor(@Inject() private readonly commonService: CommonService) {
  }
  @Get('/search')
  async Search(@Query() searchDto: SearchDto) {
      return this.commonService.Search(searchDto);
  }
}
