'use strict';

module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/products',
      handler: 'product.find',
    },
    {
      method: 'GET',
      path: '/products/:id',
      handler: 'product.findOne',
    },
    {
      method: 'POST',
      path: '/products',
      handler: 'product.create',
    },
    {
      method: 'PUT',
      path: '/products/:id',
      handler: 'product.update',
    },
    {
      method: 'DELETE',
      path: '/products/:id',
      handler: 'product.delete',
    },
  ],
};