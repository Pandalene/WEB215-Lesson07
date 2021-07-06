const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
  stripe_connect_test_client_id: 'ca_JnxyXwUTZUwq5t7hLkgfJXRFatngYpv1',
  stripe_test_secret_key: 'sk_test_51JAInTDs28V507S755Ji2SWqQoBM8kOpPwZqTOeRiZHips8o4WYKxnT763xQ9XHXMVK3juSEzS8S2t4J5ckAf6XA00QU5qmGku',
  stripe_test_api_key: 'pk_test_51JAInTDs28V507S75Q9cyvrAe6nHrGjsrxrIiGmr2qcElmY3PhcEzmRvp6aNSIKpbNL9wFUTcBGgiDZRYW1Wirve0094k3JWdv'
}

export default config
