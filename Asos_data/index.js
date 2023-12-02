const jsonServer = Require("json-server")   //Importing json-server library
const server = jsonServer.create()
const router = jsonServer.router("db.json")
const middlewares = jsonServer.default()
const port = process.env.PORT || 8000;    //choose port from here like 8000, 8080, 5000

server.use(middlewares);
server.use(router);

server.listen(port);