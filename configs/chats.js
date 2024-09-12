
function chats_config() 
{

    let chats = {};
    let cnames = ['Test', 'Amigos'];

    cnames.forEach( (cname) => 
    {

        const chat_identifier = Math.floor((Math.random() * (Math.floor(999999999) - Math.ceil(100000000))) + Math.ceil(100000000));

        chats[chat_identifier] = { identifier: chat_identifier, name: cname, messages: [], messages_quantity: 0 }

    });

    global.chats = chats;

}

module.exports = chats_config;