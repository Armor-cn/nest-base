import { Module, HttpModule } from '@nestjs/common';
import { CommonService } from './common.service';

@Module({
  imports: [HttpModule.register({
    timeout: 6000,
    maxRedirects: 5,
  })],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule { }
