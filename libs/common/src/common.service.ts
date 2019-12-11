import { Injectable, Inject, HttpService } from '@nestjs/common';
import { BaseService } from './base.service';
import { SearchDto } from '../Dto/search.dto';

@Injectable()
export class CommonService extends BaseService {
    constructor(@Inject(HttpService) private readonly httpService: HttpService) {
        super();
    }
    async Search(searchDto: SearchDto) {
        const data = {
            keywords: searchDto.name,
        };
        const res =  await this.httpService.get( encodeURI(this.BaseUrl + `search?keywords=${data.keywords}`)).toPromise();
        return res.data;
    }
}
