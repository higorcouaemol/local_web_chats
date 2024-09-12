
const body_parser = require('body-parser');

function body_parser_config(application) 
{

    application.use(body_parser.urlencoded({ extended: false }));
    application.use(                         body_parser.json());

}

module.exports = body_parser_config;