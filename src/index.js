const express = require('express')

const server = express()

server.get('/', (req, res) => {
    return res.json({ ok: true, message: 'Hello world' })
})

server.listen(3333, () => console.log('server up 3333'))