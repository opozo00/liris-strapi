'use strict';

/**
 * empleado service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::empleado.empleado');
