import { Inject, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Hwday3Module } from './hwday3/hwday3.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { User } from './user/entities/user.entity';
import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { ConfigModule, ConfigService } from '@nestjs/config/dist';
import { AuthModule } from './auth/auth.module';

dotenv.config();

const entitiesPath = __dirname + '/**/*.entity{.ts,.js}';
@Module({
  imports: [ 
    Hwday3Module,
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
     // imports: [ConfigModule],
       type: 'mysql',
       host: process.env.DB_HOST,
       port: 3306,
       username: process.env.DB_USERNAME,
       password: process.env.DB_PASSOWORD,
       database:process.env.DB_DATABASE,
       autoLoadEntities: true,
       entities: [entitiesPath],
       synchronize: true,
    }),
    AuthModule,
   
  ],//im
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {

constructor(private dataSource: DataSource) {}
  }
