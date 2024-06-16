//select dom element
const form= document.getElementById('form');
const input=document.getElementById('input');

//create instance
const socket= io()

//3 Attached event listner to the form

form.addEventListener('submit',e => {
    e.preventDefault();

    if(input.value) {
        // 4. providing data to server
        socket.emit('chat message',input.value);
        input.value="";
    }
});

//5 recieving data from server

socket.on('chat message',(msg)=> {
    const item=document.createElement('li')
    item.textContent=msg;
    document.getElementById('messages').appendChild(item);
})


socket.on('disconnect', () => {
    console.log('disconnected from server');
});

