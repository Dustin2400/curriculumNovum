const router = require('express').Router();
const wordRoutes = require('./word-routes.js');
const partRoutes = require('./part-routes');

router.use('/word', wordRoutes);
router.use('/parts', partRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;