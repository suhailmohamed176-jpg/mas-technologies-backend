'use strict';

module.exports = {
  async find(ctx) {
    return await strapi.service('api::product.product').find(ctx.query);
  },
  async findOne(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::product.product').findOne(id);
  },
  async create(ctx) {
    return await strapi.service('api::product.product').create(ctx.request.body);
  },
  async update(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::product.product').update(id, ctx.request.body);
  },
  async delete(ctx) {
    const { id } = ctx.params;
    return await strapi.service('api::product.product').delete(id);
  },
};