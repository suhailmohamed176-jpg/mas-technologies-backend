module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      connectionString: env('DATABASE_URL', 'postgresql://strapi_db_ziyx_user:F6WMLh10nltnXDNfmbXHydcwuzMEQ8fo@dpg-d8rvmfsvikkc7392ju8g-a/strapi_db_ziyx'),
      ssl: { rejectUnauthorized: false },
    },
    debug: false,
  },
});