import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { Logger } from '@nestjs/common';

const logger = new Logger('main.ts');
const PORT = process.env.SERVICE_PORT || 3000;
const HOSt = process.env.HOST || 'localhost';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /* 开启全局路由前缀 */
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('森和编程后台管理系统')
    .setDescription('后台管理系统API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);

  await app.listen(PORT);
  logger.log(`listen in http://${HOSt}:${PORT}/docs`);
}
bootstrap();
