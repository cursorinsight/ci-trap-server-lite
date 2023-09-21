const path = require('path');
const express = require('express');
const httpMiddleware = require('./src/http-middleware');
const wsMiddleware = require('./src/ws-middleware');

module.exports = {
  mode: 'development',

  devServer: {
    allowedHosts: 'all',
    host: '0.0.0.0',
    port: 3000,
    static: [
      { directory: path.resolve(__dirname, 'public') },
    ],

    setupMiddlewares: (middlewares, devServer) => {
      if (!devServer) {
        throw new Error('webpack-dev-server is not defined');
      }

      middlewares.unshift(express.raw({ limit: '50mb', type: '*/*' }));
      middlewares.unshift(express.urlencoded({ extended: true }));

      middlewares.push({
        path: '/',
        middleware: httpMiddleware({
          dataDirectory: path.resolve(__dirname, 'output'),
        }),
      });

      return middlewares;
    },

    onListening: (devServer) => {
      devServer.server.on('upgrade', wsMiddleware({
        dataDirectory: path.resolve(__dirname, 'output'),
      }));
    },

    webSocketServer: false,
  },
};
