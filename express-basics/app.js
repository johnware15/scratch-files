const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express()

app.use(bodyParser.urlencoded({ extended: false}));
app.use(cookieParser())


app.set('view engine', 'pug')

//'.get' on app retrieves content from server
//'/' first param = location parameter
//second param => anonymous callback function
app.get('/', (req, res) => {
  const name = req.cookies.username;
            //'.send' sends string to client
  if(name) {
    res.render('index', , { name })
  } else {
    res.redirect('/hello')
  }
})


app.get('/cards', (req, res) => {
            //'.send' sends string to client
  res.locals.prompt = "Who is buried in Grant's tomb?"
  res.send('card')
  //OR
  res.render('card', { prompt: "Who is buried in Gran't tomb?", hint: "Think about whose tomb it is!", colors })
})

app.get('/hello', (req, res) => {
  if(name) {
    res.redirect('/')
  } else {
    res.render('hello')
  }
})

app.post('/hello', (req, res) => {
  res.cookie('username', req.body.username)
  res.redirect('/')
})

app.post('/goodbye', (req, res) => {
  res.clearCookie('username')
  res.redirect('/hello')
})

// /sandbox
//First Name | Last Name



app.listen(3000, () => {
  console.log('The application is running on localhost:3000!');
})
