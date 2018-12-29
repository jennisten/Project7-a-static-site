//require express and declare router
const express = require('express');
const router = express.Router();

//require json data from the root of the directory
const data = require('../data.json');
const projects = data;

//the 'index' route should render index.pug content and inject project data
router.get('/', (req, res) => {
 res.locals.data = projects;
 res.render('index', data);
});

module.exports = router;
