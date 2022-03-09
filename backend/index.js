const express = require('express')
const app = express()
const port = 3000
const {names} = require("./src/routes/names")


app.use(express.json())
names(app)  
app.listen(port, () => console.log(`Example app listening on port ${port}!`))