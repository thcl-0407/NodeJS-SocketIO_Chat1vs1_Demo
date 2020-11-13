const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

io.sockets.on('connection', (socket) => { 
    console.log('Co Nguoi Ket Noi: ' + socket.id)

    socket.on('DANG_KY_PHONG', (dang_ky)=>{
        socket.join(dang_ky.TenPhong)
        socket.Phong = dang_ky.TenPhong
    })

    socket.on('CLIENT_GUI_TIN_NHAN', (data)=>{        
        socket.broadcast.to(socket.Phong).emit('SERVER_GUI_TIN_NHAN', {
            TinNhan: data
        })
    })
});

server.listen(3000, ()=>{
    console.log('Sever Dang Chay Port ' + 3000)
});
