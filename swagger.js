const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Travel Locations API',
        description: 'Api showing various locations to travel to.'
    },
    host: 'https://cse-341-project2-lvub.onrender.com',
    schemes: ['http', 'https']
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);