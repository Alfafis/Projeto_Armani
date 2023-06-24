"use strict";
const userRoutes = require('../src/features/usuarios/router/index')

exports.routes = (app)=>{
  app.use('/api', userRoutes)
}



