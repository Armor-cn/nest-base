import { ApiModelProperty } from '@nestjs/swagger';

export class SearchDto {
    @ApiModelProperty({ description: '搜索音乐', required: false })
    name: string;
}
