import express from 'express'
import mongoose from 'mongoose'
import MethodOverride from 'method-override'

import postController from './Controllers/postController.js'
import pageController from './Controllers/pageController.js'

const app = express()
const port = 3000

//DB
mongoose.connect('mongodb://localhost/cleanblog-test-db')

//TEMPLATE ENGINE
app.set("view engine", "ejs")

//MIDDLEWARES
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true })) //body parser
app.use(express.json())
app.use(MethodOverride('_method', {
    methods: ['POST', 'GET']
}))
//ROUTES
app.get('/', postController.getAllPosts)
app.get('/posts/:id', postController.getPost)
app.post('/add_post', postController.addPost );
app.put('/posts/:id', postController.updatePost)
app.delete('/posts/:id', postController.deletePost )

app.get('/about', pageController.getAboutPage)
app.get('/add_post', pageController.getAddPostPage)
app.get('/post', pageController.getPostPAge);
app.get('/posts/edit/:id', pageController.getPostEditPage);

app.listen(port, () => {
    console.log(`Sunucu ${port} portunda başlatıldı`)
})