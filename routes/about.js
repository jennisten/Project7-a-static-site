//require express and declare router
const express = require('express');
const router = express.Router();

//the 'about' route should render about.pug content
router.get('/', (req,res) => {
	res.render('about');
});

module.exports = router;
