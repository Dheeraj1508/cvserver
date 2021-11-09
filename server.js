const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const getColors = require('get-image-colors')


const options = {
    count: 100,

}
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});


app.post('/api', (req, res) => {

    // getColors(path.join(__dirname, 'image.jpg'),options).then(colors => {
    //     res.send(colors)
        
    
    // })
    res.send('Working')
    console.log(req);

    
  
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 