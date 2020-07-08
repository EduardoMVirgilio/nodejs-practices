// Esta constante requiere el modulo nativo de HTTP de Nodejs
const http = require("http");

// creamos un Request Manager
const requestManger = (req,res) => {
    
    let path = req.url;
    
    let method= req.method;
    
    switch (method) {

        case "GET":
            
            switch (path) {

                case "/":
                    res.writeHead(200, {'Content-Type': 'text/html'});

                    res.write("<h1>Bienvenido al home</h1>");

                    res.end();
                break;
                
                case "/about":
                    res.writeHead(200, {'Content-Type': 'text/html'});

                    res.write("<h1>Asi soy yo</h1>");

                    res.end()             
                break;

                default:
                    res.writeHead(404, {'Content-Type': 'text/plain'});

                    res.write("No se encontro la ruta");
                    
                    res.end();
                break;
            }
        break;
    
        default:
            res.write("No se encontro la ruta");
            res.end();
        break;
    }
}

// creamos un servidor usando el modulo de http
const server = http.createServer(requestManger)

// configuramos nuestro puerto 
server.listen(3000,"localhost",null, () => console.log("Server Run in port 3000"))
