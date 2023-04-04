import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  // App that's being instantiated
  const app = await NestFactory.create(AppModule);
  // Port of the server
  await app.listen(3000);
}
bootstrap();
