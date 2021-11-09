const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const getColors = require('get-image-colors')


const options = {
    count: 100,

}
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.post('/api', (req, res) => {

    // getColors(path.join(__dirname, 'image.jpg'),options).then(colors => {
    //     res.send(colors)
        
    
    // })
    res.send('Working')
    console.log(req);

    
  
})
app.get('/getapi', (req, res) => {

    // getColors(path.join(__dirname, 'image.jpg'),options).then(colors => {
    //     res.send(colors)
        
    
    // })
    res.send('Get Working')
    console.log(req);

    
  
})















app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 