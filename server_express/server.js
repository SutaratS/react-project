const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use((req,res,next)=> {
    console.log('middle ware for order')
    next()
})

/*app.get('/',(req,res)=>{
    res.send('Root Page')
})*/

app.get('/member',(req,res)=>{
    console.log('member page')
    res.send('Member Page')
})

app.get('/order',(req,res)=>{
    console.log('Order Page')
    res.send('Order Page')
})

app.listen(8000,() =>{
    console.log('ready on http://localhost:8000')
})
