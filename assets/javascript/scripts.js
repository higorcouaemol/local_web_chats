
const user = document.getElementById('user_id');

function join() 
{

    const chat_identifier = document.getElementById('chat_identifier_id').value;

    if ((!user.value) || (chat_identifier == 'chat_identifier')) 
    {

        alert('Enter user and select a chat'); return;

    }

    window.location.href = `/chat/${chat_identifier}?user=${user.value}`;

}

user.addEventListener('keydown', (event) => { if (event.key === 'Enter') { event.preventDefault(); join(); } });