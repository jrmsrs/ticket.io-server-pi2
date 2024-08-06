import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const config = new DocumentBuilder()
    .setTitle('Nest Server CRUD Api Template')
    .setDescription(
      `\
![logo](https://raw.githubusercontent.com/jrmsrs/ticket.io-server-pi2/main/logo-light.png)

Aplicação web com soluções de gerenciamento de problemas voltados para desenvolvedores divididos em 
grupos solucionadores. Backend contruído usando Nest framework TypeScript starter repository.

- Ready for [Vercel](https://vercel.app/) deploy
- Check [Nest Docs](https://docs.nestjs.com/)
- Check [Swagger Nest Docs](https://docs.nestjs.com/openapi/introduction)

Todo:
- Effectively implement CRUD in-memory or using a database. 
  - Check: [YouTube/@mguay: NestJS + TypeORM Tutorial | Repositories, Relations, Migrations & More
](https://www.youtube.com/watch?v=9MGKKJTwicM)
- Fork and modify as you want :)`,
    )
    .setVersion('1.0')
    .addTag('Users', 'CRUD de Usuário')
    .addTag('Groups', 'CRUD de Grupo Solucionador')
    .addTag('TPs', 'CRUD de Ticket de Problema')
    .addTag('Solutions', 'CRUD de Soluções de Causa-Raiz')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
