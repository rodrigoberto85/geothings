process.title = 'geothings';
  var args = process.argv,
    port = args[2] || 7070,
    webserver = require('./server');

  webserver.listen(port, function() {
    console.log('Server started at port' + port);
  });
