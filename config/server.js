module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: ['EIJHiUMD79fnX0TpzYdjka4s63hBmytK', '0wZNu3A5SoY1bmqIUpk6xaRPVev74Lk8'],
  },
});