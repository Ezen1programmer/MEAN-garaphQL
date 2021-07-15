export const environment = {
    production: false,
    connection: (configService) => ({
      type: 'postgres' as 'aurora-data-api',
      url: process.env.DATABASE_URL,
      autoLoadEntities: true,
      synchronize: true,
      logging: false,
      dropSchema: false,
    }),
    jwt: {
      secrete: process.env.JWT_SECRET,
      expiresIn: Number(process.env.JWT_EXPIRES_IN),
    },
    entities: [
      'dist/apps/backend/api/src/**/*.entity{.ts, .js}',
    ],
    migrations: [
      'dist/apps/backend/api/migrations/*{.ts, .js}',
    ],
    cli: {
      'migrationsDir': 'db/migrations',
    },
  };
