const router = require('express').Router();
const { BlogPost } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll();

        const blogPosts = blogPostData.map((fuckthisshit) => fuckthisshit.get({ plain: true}));

        res.render('homepage', {
            blogPosts
        });
            
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    if (req.session.logged_in) {
        res.redirect('/');
        return;
    }

    res.render('login');
});

module.exports = router;
