const router = require('express').Router();
const { Part, Word } = require('../models');

router.get('/:word', (req, res) => {
  Word.findOne({
    where: {
      word: req.params.word
    },
    include: [
      {
        model: Part,
        attributes: ['part', 'definition', 'root', 'transliteral']
      }
    ]
  })
  .then(dbWordData => {
    if (!dbWordData) {
      res.status(404).json({ message: 'No word found'});
      return;
    }
    res.json(dbWordData);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;