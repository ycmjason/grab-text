var grab_text = require('./grab_text');

var url = process.argv[2];
if(!url){
  console.error('No URL is given.');
  process.exit();
}

grab_text(url).then(text => {
  console.log(text);
});
