const router = require('express').Router();
const { Post, User, Animal } = require('../models');
const withAuth = require('../utils/auth');
//const server = require('../server');


router.get('/', async (req, res) => {
  try {
    // Get all posts and JOIN with user data
    const postData = await Post.findAll({
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model: Comment,
        //   attributes: ['id', 'text', 'user_id', 'post_id'],
        //   include: [
        //     {
        //       model: User,
        //       attributes: ['name'],
        //     },
        //   ]
        // }
      ],
    });


    // Serialize data so the template can read it
    const posts = postData.map((post) => post.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('homepage', { 
      posts, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/comment/:id', async (req, res) => {
//   try {
//     const commentData = await Comment.findByPk(req.params.id, {
//       include: { model: User, attributes: ['name'] }
//     });

//     const comment = commentData.get({ plain: true });

//     res.render('comment', {
//       ...comment,
//       logged_in: req.session.logged_in
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// })

router.get('/post/:id', async (req, res) => {
  try {
    const postData = await Post.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['name'],
        },
        // {
        //   model: Comment,
        //   attributes: ['id', 'text', 'user_id', 'post_id'],
        //     include: [
        //       {
        //         model: User,
        //         attributes: ['name'],
        //       },
        //     ]
        // }
      ],
    });

    const post = postData.get({ plain: true });

    res.render('post', {
      ...post,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: [
        { 
          model: Post,
          attributes: ['id', 'title', 'text', 'user_id'],
            include: [
              {
                model: User,
                attributes: ['name'],
              }
            ]
        },
        // { 
        //   model: Comment,
        //   attributes: ['id', 'text', 'user_id', 'post_id'],
        // },
        { 
          model: Animal
        }
      ],
    });

    const user = userData.get({ plain: true });
    // console.log(user);

    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
