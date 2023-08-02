import { Router } from "express";
import { posts } from "../../data/posts.js"

const postRouter = Router();

postRouter.get("/", (req, res) => {

    res.json({
        data: posts
    })
})

postRouter.get("/post-detail", (req, res) => {

    const id = req.query.id;
    const post = posts.find((el) => el.id === parseInt(id));

    if (!id || !post) {
        res.json({
            message: 'Post not found by id'
        })
    }

    res.json(post)
})

postRouter.post("/", (req, res)=>{

    //lấy body
    const data = req.body;

    if(!data){
        res.json({
            message:'Not data'
        })
    }
    posts.push(data);

    res.json({
        message: 'Add new post successfully!',
        data
    })
})

export default postRouter;