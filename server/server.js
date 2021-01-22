const path = require("path");

const socketIO = require("socket.io");
const express = require("express");
const app = express();
const httpServer = require("http").Server(app);
const io = socketIO(httpServer);
const apiRouter = require("./api");

const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', apiRouter);

app.get('/*', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

httpServer.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});