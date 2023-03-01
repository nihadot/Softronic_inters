const express = require('express')
const path = require('path')
const { type } = require('express/lib/response')
const app = express()
const port = 3000

// view engine ------------------
app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');
// ----------------

// body-parser----------
var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({extended:true}))

// ------------------




app.get('/', (req, res,) => {
    res.render('index')
})

app.post('/submit', (req, res,) => {

    if(req.body.name && req.body.password){
        res.render('home',{ name:req.body.name })
    }else{
        res.render('error',{err:''})
    }
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})