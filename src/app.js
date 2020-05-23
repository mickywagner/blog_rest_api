import 'dotenv/config'

import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Future Blog API here')
})

app.listen(3000, () => {
    console.log('App listening on port 3000')
})