const router = require('express').Router();
const { BlogPost, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newBlogPost = await BlogPost.create({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(newBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedBlogPost = await BlogPost.update({
            ...req.body,
            user_id: req.session.user_id
        });

        res.status(200).json(updatedBlogPost);
    } catch (err) {
        res.status(400).json(err);
    }
})

router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findByPk({
            where: {
                id: req.params.id
            },
            include: [
                Comment
            ]
        });

        if (!blogPostData) {
            res.status(404).json({ message: 'This is not the blog post you are looking for'});
            return;
        }

        res.render('blogpost', { blogPostData })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
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