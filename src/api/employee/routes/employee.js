'use strict';

/**
 * employee router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::employee.employee');

//Acceder al departamento del jefe del empleado
//http://localhost:1337/api/employees?filters[name][$eq]=oscar&populate[boss][populate][0]=department
