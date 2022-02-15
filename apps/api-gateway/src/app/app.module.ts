import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      typePaths: ['api/graphql/schema/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/app/shared/graphql/model/graphql.ts'),
      },
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
