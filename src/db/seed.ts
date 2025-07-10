import { reset, seed } from 'drizzle-seed';
import { db, sql } from './connection.ts'; // Note: sql também está sendo importado agora
import { schema } from './schema/index.ts';

await reset(db, schema); // Pode ter sido simplificado de { schema } para apenas schema

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 20,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
    },
  };
});

await sql.end(); // Nova linha para fechar a conexão SQL

// biome-ignore lint/suspicious/noConsole: only used in dev
console.log('Database seeded');
