const express = require('express')
const path = require('path')
const { type } = require('express/lib/response')
const hbs = require('hbs')
const app = express()
const port = 3000

// view engine ------------------
app.set('views', path.join(__dirname));
app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname,'/partials'))
// ----------------

// body-parser----------
var bodyParser = require('body-parser') 
app.use(bodyParser.urlencoded({extended:true}))

// ------------------




app.get('/', (req, res,) => {
    res.render('index')
    // api
    // console.log(path.join(__dirname,'/views'));
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