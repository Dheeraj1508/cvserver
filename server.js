const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const getColors = require('get-image-colors')


const options = {
    count: 100,

}


app.get('/api', (req, res) => {

    // getColors(path.join(__dirname, 'image.jpg'),options).then(colors => {
    //     res.send(colors)
        
    
    // })
    res.send('Working')
    console.log(req.config);

    
  
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 