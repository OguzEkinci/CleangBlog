import Post from '../models/AddPost.js'

const postController = () => {
}

const getAllPosts = async (req, res) => {
    const posts = await Post.find({}).sort('-dateCreated')
    res.render('index', { posts })
}

const getPost = async (req, res) => {
    const post = await Post.findById(req.params.id)
    res.render('post', { post })
}

const updatePost =  async (req, res) => {
    const post = await Post.findById(req.params.id)
    post.title = req.body.title
    post.detail = req.body.detail
    post.save()
    res.redirect(`/posts/${req.params.id}`)
}

const deletePost = async (req,res) => {
    await Post.findByIdAndDelete(req.params.id)
    res.redirect('/')
}

const addPost = async (req, res) => {
    await Post.create(req.body)
    res.redirect('/')
}

export default { postController, getAllPosts, getPost,updatePost,deletePost, addPost }