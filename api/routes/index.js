"use strict";
const userRoutes = require('../src/features/usuarios/router/index')
const modalidadesRoutes = require('../src/features/modalidades/router/index')
const userModalidadesRoutes = require('../src/features/usuariosModalidades/router/index')

exports.routes = (app)=>{
  app.use('/api', userRoutes)
  app.use('/api', modalidadesRoutes)
  app.use('/api', userModalidadesRoutes)
}



