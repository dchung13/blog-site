const router = require('express').Router();
const { User, BlogPost } = require('../../models');

router.get('/', async (req, res) => {
    try {
        const blogPostData = await BlogPost.findAll({
            include: [
                {
                    model: User,
                    attributes: [
                        'name'
                    ]
                }

            ]
        });

        const blogPosts = blogPostData.map((qwerty) => qwerty.get({ plain: true}));

        res.render('homepage', {
            layout: 'main',
            blogPosts,
            logged_in: req.session.logged_in
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
