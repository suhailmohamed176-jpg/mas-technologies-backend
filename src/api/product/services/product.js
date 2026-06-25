'use strict';

module.exports = {
  async find(params) {
    return await strapi.db.query('api::product.product').findMany(params);
  },
  async findOne(id) {
    return await strapi.db.query('api::product.product').findOne({ where: { id } });
  },
  async create(data) {
    return await strapi.db.query('api::product.product').create({ data });
  },
  async update(id, data) {
    return await strapi.db.query('api::product.product').update({
      where: { id },
      data,
    });
  },
  async delete(id) {
    return await strapi.db.query('api::product.product').delete({ where: { id } });
  },
};