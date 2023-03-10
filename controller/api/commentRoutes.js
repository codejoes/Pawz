// const router = require('express').Router();
// const { Comment } = require('../../models');
// const withAuth = require('../../utils/auth');

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const postId = window.location.toString().split('/')[
//       window.location.toString().split('/').length - 1
//     ];

//     console.log(postId);

//     const newComment = await Comment.create({
//       ...req.body,
//       user_id: req.session.user_id,
//       post_id: postId,
//     });

//     console.log(newComment);

//     res.status(200).json(newComment);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const getComments = await Comment.findAll();
//     res.status(200).json(getComments);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/:id', withAuth, async (req, res) => {
//   try {
//     const getComments = await Comment.findByPk(req.params.id);
//     res.status(200).json(getComments);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.delete('/:id', async (req, res) => {
//   try {
//     const commentData = await Comment.destroy({
//       where: {
//         id: req.params.id,
//         // user_id: req.session.user_id,
//         // post_id: req.session.post_id,
//       },
//     });

//     if (!commentData) {
//       res.status(404).json({ message: 'No comment found with this id!' });
//       return;
//     }

//     res.status(200).json(commentData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// module.exports = router;