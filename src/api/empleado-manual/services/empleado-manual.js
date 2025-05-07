'use strict';

/**
 * empleado-manual service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::empleado-manual.empleado-manual');
