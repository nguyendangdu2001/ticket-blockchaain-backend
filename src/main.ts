import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import passport from 'passport';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import helmet from 'helmet';
import { ValidationPipe } from '@nestjs/common';
import cookieSession from 'cookie-session';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { UsersService } from './users/users.service';
// import * as requestIp from 'request-ip';
// import { UsersService } from './users/users.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const userService = app.get(UsersService);
  await userService.initUserServer();
  app.enableCors({ origin: true, credentials: true });
  app.use(helmet({ contentSecurityPolicy: false }));
  app.use(compression());
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
      // whitelist: true,
      // forbidNonWhitelisted: true,
    }),
  );
  app.setGlobalPrefix('/api');
  app.use(
    cookieSession({
      name: configService.get('COOKIE_NAME'),
      keys: ['dffdfdfdf', 'dsdss'],
      sameSite: 'lax',
      httpOnly: true,
    }),
  );
  app.use(cookieParser());
  app.use(passport.initialize());
  const options = new DocumentBuilder()
    .setTitle('Sms')
    .setDescription('LiveChap Application')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(configService.get('PORT') || 5000);
}
bootstrap();
