const express = require('express')
const app = express()
const port = 3000
const path = require('path')
const getColors = require('get-image-colors')


const options = {
    count: 100,

}


app.get('/', (req, res) => {

    // getColors(path.join(__dirname, 'image.jpg'),options).then(colors => {
    //     res.send(colors)
        
    
    // })
    res.send('This is working')
    
  
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 