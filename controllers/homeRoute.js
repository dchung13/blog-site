const router = require('express').Router();
const { User, BlogPost } = require('../models');
const withAuth = require('../utils/auth');

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

router.get('/signup', (req, res) => {
    res.render('signup');
});

router.get("/createblogpost", withAuth, async (req, res) => {
  try {
    res.render('createblogpost', {
        logged_in: req.session.user_id
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get("/editblogpost", withAuth, async (req, res) => {
  try { 
    res.render('editblogpost', {
        logged_in: req.session.user_id
    })
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
