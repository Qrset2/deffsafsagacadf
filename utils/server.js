const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('axixstats: \nonline')
})

function keepAlive(){
    server.listen(3000, ()=>{console.log('')});
}

module.exports = keepAlive;