const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "API Docs",
    customfavIcon: "/assets/favicon.png",
  };

const Doc = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '0.0.1',
            description:
                'This is the API documentation',
        },
        servers: [
            {
                url: 'http://localhost:3000',
                description: 'Current server',
            },
        ],
    },
    apis: ['./routes/*.js'],
};

const swaggerDoc = swaggerJSDoc(Doc);

module.exports = { swaggerDoc, swaggerOptions, swaggerUi };