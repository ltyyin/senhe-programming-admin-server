import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { VerifyModule } from './common/verify/verify.module';
import { AuthModule } from './modules/auth/auth.module';
import { UsersModule } from './modules/users/users.module';
import { ArticlesModule } from './read-manage/articles/articles.module';
import { CategoriesModule } from './read-manage/categories/categories.module';
import { LabelsModule } from './read-manage/labels/labels.module';
import { CoursesModule } from './course-manage/courses/courses.module';
import { MenusModule } from './system-manage/menus/menus.module';
import { RolesModule } from './system-manage/roles/roles.module';
import { UsersMModule } from './system-manage/users-m/users-m.module';
import { AuthMiddleware } from './middleware/auth.middleware';
import { HomeModule } from './home/home.module';
import { BannerModule } from './banner-manage/banner/banner.module';

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
    CoursesModule,
    MenusModule,
    RolesModule,
    UsersMModule,
    HomeModule,
    BannerModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .exclude('api/auth/login', 'api/auth/refresh/token')
      .forRoutes('*');
  }
}
