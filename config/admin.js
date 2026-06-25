module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'VpbAWs3qH7rt52h6oZRuW0J1G1eJBCFY'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT', '0wZNu3A5SoY1bmqIUpk6xaRPVev74Lk8'),
  },
});