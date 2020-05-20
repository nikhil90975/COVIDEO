class ChatEngine{
    constructor(chatBoxId,userEmail){
        

        this.socket = io.connect('http://localhost:5000');
        connectionHandler();
    }
    connectionHandler(){
        this.socket.on('add-users',function(data){
            for(var i=0;i<data.users.length;i++){
                var el = $('<div>');
                var id = data.users[i];
                el.addclass(id);
                $('id')
                
                $('#container').append(el);
            }
        })
    }
}