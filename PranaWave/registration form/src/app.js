// console.log("Jay shree ram")

const express = require('express')
const app = express()
const path = require('path')
// app.use('/public',express.static('public'));
require('./db/db')
let port = 3000

// console.log(path.join(__dirname,'../'))

const yogaCollection = require('./model/model');
const template_path = path.join(__dirname, '../template/views')

// console.log(path.join(__dirname,'../template/views'))
// const static_path=path.join(__dirname, '../public')


//Making external css public inorder to use it anywhere
app.use(express.static('public'));
app.use(express.static('../assets'));
app.use(express.static('../TextToSpeech'));
app.use(express.static('../feedback'));
// app.use(express.static('public'));


app.set('view engine', 'hbs');
app.set('views', template_path);


// app.get("/",(req,res)=>
// {
//     res.send("Hello World");
// })

app.use(express.urlencoded({ extended: false }))

// Speech get
app.get('/speech', (req, res) => {
  res.render('speech')
})


//Feedback get
app.get('/feedback', (req, res) => {
  res.render('indexFeedback')
})

app.get('/home', (req, res) => {
  res.render('indexPranawave')
})
app.get('/signup', (req, res) => {
  res.render('signup')
})

app.post('/yoga', async (req, res) => {
  // console.log(req.body.name);
  // res.send(req.body.name)
  try {
    const password = req.body.password
    const cpassword = req.body.cpassword

    if (password === cpassword) {
      const yogadata = new yogaCollection({
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        password: req.body.password,
        cpassword: req.body.cpassword,
      })

      const postData = await yogadata.save()
      res.send(postData)
    } else {
      res.send('password not matching')
    }
  } catch (error) {
    res.send(error)
  }
})

app.get('/login', (req, res) => {
  res.render('login')
})

app.post('/loginPage', async (req, res) => {
  // console.log(getEmail);
  // res.send(getEmail);
  try {
    const email = req.body.email;
    const password = req.body.loginpassword;

    const getEmail = await yogaCollection.findOne({ email: email });

    if (getEmail.password === password) {
      res.render('index');
    } else {
      res.send('password not matching');
    }
  } catch (error) {
    res.send('error')
  }
});

// To get all asanas pages

app.get('/abdominal', (req, res) => {
  res.render('abdominal')
})
app.get('/arms', (req, res) => {
  res.render('arms')
})
app.get('/back', (req, res) => {
  res.render('back')
})
app.get('/chestandshoulders', (req, res) => {
  res.render('chestandshoulders')
})
app.get('/hamstring', (req, res) => {
  res.render('hamstring')
})
app.get('/hips', (req, res) => {
  res.render('hips')
})
app.get('/legs', (req, res) => {
  res.render('legs')
})

// app.get('/hips', asyn (req,res) =>
// {
//   res.render('hips')
// })

app.listen(port, () => {
  console.log(`listening to the port ${port}`)
})
