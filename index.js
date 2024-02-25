const http = require('http');



const server = http.createServer((req, res) => {

    res.write('Ola mundo');
    res.end()

})

server.listen(3000, () => {
    console.log('started')
})