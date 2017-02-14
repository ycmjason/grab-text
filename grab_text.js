var fetch = require('./lib/fetch');
var grab_text = require('./lib/grab_text');


module.exports = function(url){
  return fetch.get(url).then((body) => grab_text(body));
};
