const {Router} = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/',(req,res)=>res.send('Welcome to Dani'));

router.post('/space', controllers.createDato);
router.get('/space', controllers.getAllDatos);

module.exports = router;
