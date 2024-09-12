
function socket_io_config(sio) 
{

    sio.on('connection', (socket) => 
    {

        socket.emit('chats', global.chats);

        socket.on('message', (message) => 
        {

            const m = { chat_identifier: message.chat_identifier, user: message.user, message: message.message };

            global.chats[m.chat_identifier].messages.push(m);
            global.chats[m.chat_identifier].messages_quantity += 1;

            socket.broadcast.emit('broadcast_message', m);

        });

    });

}

module.exports = socket_io_config;