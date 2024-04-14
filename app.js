const http = require('http');
const {mainRouteController, gameRouteController, voteRouteController, defaultRouteController} = require("./controllers");

const server = http.createServer((req, res) => {
    const url = req.url;
    switch (url) {
        case "/":
            mainRouteController(res, "/index.html", ".html").catch((err) => console.error(err));
            break;
        case "/game":
            gameRouteController(res).catch((err) => {console.error(err)});
            break;
        case "/vote":
            voteRouteController(req, res).catch((err) => {console.error(err)});
            break;
        default:
            defaultRouteController(res, url).catch((err) => {console.error(err)});
    }
});

server.listen(3005);