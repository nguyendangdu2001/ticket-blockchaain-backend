import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import Joi from 'joi';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TicketTypeModule } from './ticket-type/ticket-type.module';
import { TicketModule } from './ticket/ticket.module';
import { OnChainListenerModule } from './on-chain-listener/on-chain-listener.module';
import { EventsModule } from './events/events.module';
import { APP_GUARD } from '@nestjs/core';
import { AuthenticatedGuard } from './common/guards/authenticated';
import { MarketModule } from './market/market.module';

@Module({
  imports: [
    CacheModule.register({ isGlobal: true }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('MONGODB_URI'),
        useNewUrlParser: true,
        useUnifiedTopology: true,
        // useCreateIndex: true,
      }),
      inject: [ConfigService],
    }),
    ConfigModule.forRoot({
      envFilePath: ['.env.development.local', '.env.development', '.env'],
      isGlobal: true,
      validationOptions: Joi.object({
        EMAIL_SERVICE: Joi.string().required(),
        EMAIL_USER: Joi.string().required(),
        EMAIL_PASSWORD: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_SECRET: Joi.string().required(),
        JWT_VERIFICATION_TOKEN_EXPIRATION_TIME: Joi.string().required(),
        INVITE_EMAIL_CONFIRMATION_URL: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        PORT: Joi.string().required(),
        COOKIE_NAME: Joi.string().required(),
      }),
    }),
    {
      ...JwtModule.registerAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: { expiresIn: '100 days' },
        }),
        inject: [ConfigService],
      }),
      global: true,
    },

    // UsersModule,
    AuthModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'distClient'),
    }),
    TicketTypeModule,
    TicketModule,
    OnChainListenerModule,
    EventsModule,
    MarketModule,
  ],
  controllers: [AppController],
  providers: [AppService, { provide: APP_GUARD, useClass: AuthenticatedGuard }],
})
export class AppModule {}
