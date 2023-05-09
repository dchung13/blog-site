const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');


//renders the dashboard with blogposts with the user_id
router.get('/', withAuth, async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            where: [{
                user_id: req.params.user_id
            }]
        })

        if (!blogPostData) {
            res.status(404).json({ message: 'This is not the blog post you are looking for'});
            return;
        }

        const blogPosts = blogPostData.map((qwerty) => qwerty.get({ plain: true}));

        res.render('dashboard', { 
            layout: 'main',
            blogPosts,
            logged_in: req.session.logged_in 
         })
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
