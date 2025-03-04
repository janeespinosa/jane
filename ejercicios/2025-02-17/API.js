// Simulamos una base de datos simple con un array de objetos
const datos = [
    { id: 1, nombre: "Juan", edad: 25 },
    { id: 2, nombre: "Ana", edad: 30 },
    { id: 3, nombre: "Luis", edad: 28 }
];

// Función para manejar las solicitudes GET
function manejarGet(req) {
    const url = new URL(req.url, "http://${req.headers.host}");
    const id = url.searchParams.get("id")
 }

    if (id) {
        const usuario = datos.find(u => u.id === parseInt(id));
        if (usuario) {
            return new Response(JSON.stringify(usuario), {
                headers: { "Content-Type": "application/json" }
            });
        } else {
            return new Response(JSON.stringify({ error: "Usuario no encontrado" }), {
                status: 404,
                headers: { "Content-Type": "application/json" }
            });
        }
    } else {
        return new Response(JSON.stringify(datos), {
            headers: { "Content-Type": "application/json" }
        });
    }


// Función para manejar las solicitudes POST
function manejarPost(req) {
    return req.json().then(body => {
        const nuevoUsuario = {
            id: datos.length + 1,
            nombre: body.nombre,
            edad: body.edad
        };
        datos.push(nuevoUsuario);
        return new Response(JSON.stringify(nuevoUsuario), {
            status: 201,
            headers: { "Content-Type": "application/json" }
        });
    });
}

// Función principal que maneja todas las solicitudes
function manejarSolicitud(req) {
    if (req.method === "GET") {
        return manejarGet(req);
    } else if (req.method === "POST") {
        return manejarPost(req);
    } else {
        return new Response(JSON.stringify({ error: "Método no permitido" }), {
            status: 405,
            headers: { "Content-Type": "application/json" }
        });
    }
}

// Escuchar las solicitudes HTTP
if (typeof window === "undefined") {
    // Este bloque solo se ejecutará en un entorno de servidor
    const http = require("http");
    const server = http.createServer((req, res) => {
        const respuesta = manejarSolicitud(req);
        res.writeHead(respuesta.status, respuesta.headers);
        respuesta.body.pipe(res);
    });

    server.listen(3000, () => {
        console.log("Servidor escuchando en http://localhost:3000");
    });
}