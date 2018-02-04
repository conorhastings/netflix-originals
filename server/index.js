const { send } = require("micro");
const { router, get } = require('microrouter');
const fs = require('fs');
const path = require("path");
const getLaunchDates = require('./utils/get-launch-dates');


module.exports = router(
  get('/launches', req =>  getLaunchDates({ year: req.params.year, month: req.params.month })),
  get('/', req => fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), "utf-8")),
  get('/calendar/:year/:month', req => fs.readFileSync(path.join(__dirname, '..', 'dist', 'index.html'), "utf-8")),
  get('/*', (req, res) => {
    try {
      return fs.readFileSync(path.join(__dirname, '..', req.url), "utf-8"); 
    }
    catch(e) {
      console.error(e);
      send(res, 404, "file not found");
    }
  })
);