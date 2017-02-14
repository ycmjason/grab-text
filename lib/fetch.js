var fetch = require('node-fetch');

exports.get = function(url){
  return fetch(url).then((res) => res.text());
};
