import { GraphQLDefinitionsFactory } from '@nestjs/graphql';
import { join } from 'path';

const definitionsFactory = new GraphQLDefinitionsFactory();
definitionsFactory.generate({
    typePaths: ['./**/*.graphql'],
    path: join(process.cwd(), 'apps/api-gateway/src/app/shared/graphql/model/graphql.ts'),
    outputAs: 'class',
});