//require and declare app express
const express = require('express');
const app = express();

//set view engine to pug
app.set('view engine', 'pug');
//serve the static files
app.use('/static', express.static('public'));


//Set route variables using routes folder
const indexRoute = require('./routes');
const aboutRoute = require('./routes/about');
const projectRoute = require('./routes/project');

//Set route paths
app.use(indexRoute);
app.use('/about', aboutRoute);
app.use('/project', projectRoute);


//Error handling
//check that you have an error logging to the console
app.use((req, res, next) => {
  const err = new Error('Page not Found');
  err.status = 404;
  next(err);
})

app.use((err, req, res, next) => {
  res.locals.error = err;
  console.log(`${err.message}`);
  res.status(err.status);
  res.render('error', err);
})


//start server listening to port 3000
app.listen(3000, () => {
  console.log('The Application is running on localhost:3000');
});
