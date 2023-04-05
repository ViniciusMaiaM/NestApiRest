import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

/* Instead of importing prismaService at every file it can 
be exported to the hole project with the global decorator*/
@Global()
@Module({
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
