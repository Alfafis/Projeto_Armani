"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const morgan = require('morgan');
const generalRoutes = require('./routes/index')
const { logger } = require('./shared/log/logger');
const app = express();

//Carrega todas as rotas

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

generalRoutes.routes(app);

app.use('/api/*', (req, res, next) => {
    const error = new Error('URL not found');
    error.status = 404;
    logger.error(error);
    next(error);
  });

  app.use((error, req, res) => {
    logger.error(error);
    res.status(error.statusCode || error.status || 500);
    res.json({
      error: {
        message: error.message,
        status: error.statusCode || error.status || 500,
      },
    });
  });

module.exports = app;
