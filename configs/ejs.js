
const ejs = require('ejs');

function ejs_config(application, path) 
{

    application.engine('html', ejs.renderFile);
    application.set(    'view engine', 'html');

    application.set('views', path.join(__dirname, './../views'));

}

module.exports = ejs_config;