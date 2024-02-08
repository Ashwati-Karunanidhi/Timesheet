import express from "express";

const path = require('path');
const PORT = process.env.PORT || 3002;

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));
app.get("/api", (req, res) => {
    console.log('[TEST]');
    res.send({ message: "Hello from server!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

//app.listen(PORT, () => {
//    console.log(`Server listening on ${PORT}`);
//});
