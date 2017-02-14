var cheerio = require('cheerio');

module.exports = function(body){
  var $ = cheerio.load(body);
  // preprocessing
  $('head, script, style').remove();

  var texts = [];
  $('*').each((i, elem) => {
    var $elem = $(elem).clone();
    $elem.find('br').replaceWith('\n');
    $elem.find('*').remove();
    var t = $elem.text().trim();
    t = t.replace(/\r/g, '');
    t = t.replace(/\n\n/g, '\n');
    if(t.length > 0) texts.push(t); 
  });

  var largest = texts.reduce((acc, val) => {
    if(acc.length > val.length) return acc;
    else return val;
  });

  return largest;
};
