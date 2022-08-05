import express from 'express'
import ejs from 'ejs'
import mongoose from 'mongoose'
import Post from './models/AddPost.js'
const app = express()
const port = 3000

mongoose.connect('mongodb://localhost/cleanblog-test-db')

//TEMPLATE ENGINE
app.set("view engine", "ejs")

//MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({extended: true})) //body parser
app.use(express.json())

//ROUTES
app.get('/',async (req,res) => {
    const posts = await Post.find({})
    res.render('index', {posts})
})

app.get('/about',(req,res) => {
    res.render('about')
})

app.get('/add_post',(req,res) => {
    res.render('add_post')
})

app.get('/post', (req, res) => {
    res.render('post');
  });

app.post('/add_post', async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
  });

  
app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})