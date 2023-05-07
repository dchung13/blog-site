const router = require('express').Router();
const { BlogPost } = require('../../models');

router.post('/', async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newBlogPost);
    } catch (res) {
        res,status(400).json(err);
    }
});

router.post('/:id', async (req, res) => {
    try {
        const updatedBlogPost = await BlogPost.update({
            
        })
    }
})

router.get('/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk({
            where: {
                id: req.params.id
            }
        });

        if (!blogPostData) {
            res.status(404).json({ message: 'This is not the blog post you are looking for'});
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const blogPostData = await BlogPost.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id
            }
        });

        if (!blogPostData) {
            res.status(404).json({ message: 'This is not the blog post you are looking for'});
            return;
        }

        res.status(200).json(blogPostData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;