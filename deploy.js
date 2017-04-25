var ghpages = require('gh-pages');
var path = require('path');

ghpages.publish(path.join(__dirname, 'build'), {
    repo: 'https://github.com/triforkse/triforkse.github.io.git'
  }, function(err) { console.error(err) }
);
