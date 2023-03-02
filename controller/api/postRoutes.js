const router = require('express').Router();
const { Post } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newPost = await Post.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newPost);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const postData = await Post.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!postData) {
      res.status(404).json({ message: 'No post found with this id!' });
      return;
    }

    res.status(200).json(postData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// // update product
// router.put('/:id', (req, res) => {
//   // update product data
//   Post.update(req.body, {
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((post) => {
//       // find all associated tags from ProductTag
//       return Post.findOne({ where: { user_id: req.params.id } });
//     })
//     .then((postData) => {
//       // get list of current tag_ids
//       const postCommentIds = this.post.map(({ user_id }) => user_id);
//       // create filtered list of new tag_ids
//       const newPostComment = req.body.user_id
//         .filter((user_id) => !postCommentIds.includes(user_id))
//         .map((user_id) => {
//           return {
//             post_id: req.params.id,
//             user_id,
//           };
//         });
//       // figure out which ones to remove
//       const postCommentToRemove = Comment
//         .filter(({ user_id }) => !req.body.userIds.includes(user_id))
//         .map(({ id }) => id);

//       // run both actions
//       return Promise.all([
//         Post.destroy({ where: { id: postCommentToRemove } }),
//         Post.bulkCreate(newPostComment),
//       ]);
//     })
//     .then((updatedPost) => res.json(updatedPost))
//     .catch((err) => {
//       // console.log(err);
//       res.status(400).json(err);
//     });
// });


module.exports = router;