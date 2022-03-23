const http = require('http');


http.createServer((req, res) => {

        res.writeHead(200, { 'content-Type': 'application/json ' });
        let salida = {
            nombre: 'Mervin',
            edad: 32,
            url: req.url

        }
        res.write(JSON.stringify(salida));
        //res.write('hola');
        res.end();
    })
    .listen(8080);

console.log('escuchando el puerto 8080');