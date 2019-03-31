const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('.'))

console.log(path.join(__dirname, 'index.html'))
app.use('*', (_, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log('\x1b[32m%s\x1b[0m', `[App] running http:localhost:${PORT}`))