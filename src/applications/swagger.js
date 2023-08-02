import swaggerJsdoc from 'swagger-jsdoc';

const options = {
 failOnErrors: true, // Whether or not to throw when parsing errors. Defaults to false.
 definition: {
  openapi: '3.0.0',
  info: {
   title: 'API TEST FOLKATECH',
   version: '1.0.0',
  },
 },
 apis: ['./**/docs/*.js'],
};

const swaggerDocs = swaggerJsdoc(options);

export default swaggerDocs;
