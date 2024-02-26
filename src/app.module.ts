import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
import { NewsModule } from './news/news.module';
import { LikeModule } from './like/like.module';
import { CommentModule } from './comment/comment.module';
import * as dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

@Module({
  imports: [
    AuthModule,
    MongooseModule.forRoot(process.env.MONGODB_URI),
    NewsModule,
    LikeModule,
    CommentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
