import Post from '../models/AddPost.js'
const pageController = () => { }

const getAboutPage =
    (req, res) => {
        res.render('about')
    }


const getAddPostPage =
    (req, res) => {
        res.render('add_post')
    }


const getPostPAge =
    (req, res) => {
        res.render('post');
    }


const getPostEditPage =
    async (req, res) => {
        const post = await Post.findById(req.params.id)
        res.render('edit', { post })
    }


export default {
    pageController,
    getAboutPage,
    getAddPostPage,
    getPostPAge,
    getPostEditPage,
}