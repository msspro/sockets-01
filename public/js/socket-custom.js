var socket = io();

        //Escuchar sucesos
        socket.on('connect',function(){
            console.log('Conectado al servidor');
        });

        socket.on('disconnect', function(){
            console.log('Perdimos coneccion con el servidor');
        });

        //los emitos son para enviar informacion
        socket.emit('enviarMensaje',{
            usuario:"Juan",
            mensaje:"Hola mundo"
        },function(resp){
            console.log('Se disparo el callback: RESP Server', resp);
        });

        //Escuchar informacion
        socket.on('enviarMensaje',function(mensaje){
            console.log('Server:',mensaje);
        });