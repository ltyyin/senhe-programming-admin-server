import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerifyModule } from './common/verify/verify.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ArticlesModule } from './read-manage/articles/articles.module';
import { CategoriesModule } from './read-manage/categories/categories.module';
import { LabelsModule } from './read-manage/labels/labels.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    VerifyModule,
    AuthModule,
    UsersModule,
    ArticlesModule,
    CategoriesModule,
    LabelsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
