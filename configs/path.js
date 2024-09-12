
function path_config(application, express, path)
{

    application.use(express.static(path.join(__dirname, './../assets')));

}

module.exports = path_config;