
global.router.get('/', (request, response) => 
{

    response.render('index', { chats: global.chats });

});