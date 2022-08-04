module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ee5e1a6f0fa5d14f6f0a275dd5707e9a'),
  },
});
