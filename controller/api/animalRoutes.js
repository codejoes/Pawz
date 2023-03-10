const router = require('express').Router();
const { Animal } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newAnimal = await Animal.create({
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(200).json(newAnimal);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const animalData = await Animal.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!animalData) {
        res.status(404).json({ message: 'No animal found with this id!' });
        return;
      }
  
      res.status(200).json(animalData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  router.put('/:id', withAuth, async (req, res) => {
    console.log(req.body);
    try {
      const updatedAnimal = await Animal.update( req.body, {
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      console.log(updatedAnimal);
      if (!updatedAnimal) {
        res.status(404).json({ message: 'No animal found with this id!' });
        return;
      }
      res.status(200).json(updatedAnimal);
    } catch (err) {
      res.status(500).json(err)
    }
  });


  module.exports = router
