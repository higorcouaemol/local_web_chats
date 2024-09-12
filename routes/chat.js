
global.router.get('/chat/:chat_identifier', (request, response) => 
{

    const chat_identifier = request.params.chat_identifier;
    const user            =             request.query.user;

    if ((global.chats.hasOwnProperty(chat_identifier) == false) || (!user)) { response.redirect('/'); return; }

    response.render('index', { chats: global.chats, chat: global.chats[chat_identifier], user: user });

});