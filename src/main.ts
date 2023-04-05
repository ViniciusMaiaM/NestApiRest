import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // App that's being instantiated
  const app = await NestFactory.create(AppModule);
  // Enabling the validation pipe to the hole project
  app.useGlobalPipes(
    new ValidationPipe({
      // In this way the validation pipe strips out the element that are not defined at the dto
      whitelist: true,
    }),
  );
  // Port of the server
  await app.listen(3000);
}
bootstrap();
