const settings = Object.freeze({
  identifier: 'https://c13-fs-demo2.vercel.app',
  // identifier: 'http://localhost:3000',
  rolesPath: '/roles',
  permissionsPath: '/user_authorization',
  roles: {
    admin: 'Design Shop Admin',
  },
  permissions: {
    baskets: {
      create: 'baskets:create',
      read: 'baskets:read',
      update: 'baskets:update',
      remove: 'baskets:delete',
    },
    orders: {
      create: 'orders:create',
      read: 'orders:read',
      update: 'orders:update',
      remove: 'orders:delete',
    },
    products: {
      create: 'products:create',
      read: 'products:read',
      update: 'products:update',
      remove: 'products:delete',
    },
  },
});

export default settings;
