'use strict';

/**
 * manual-employee service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::manual-employee.manual-employee');
