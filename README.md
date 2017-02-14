# Grab text

This module is made for grabbing the largest piece of text from a website. Mainly use to grab lyrics from lyrics websites. For example AZLyrics, mojim...

## Installation

Use as module:
```
npm install --save grab-text
```

Use as command:
```
npm install -g grab-text
```

## Usage
You can use this module as a library or a command. The usage is really simple.

### Library
```javascript
var grab_text = require('./grab_text');

grab_text('http://www.azlyrics.com/lyrics/johnmayer/xo.html').then(text => {
  /* text here contains `
  Your love is bright as ever
  Even in the shadows
  Baby kiss me
  Before they turn the lights out
  Your heart is glowing
  And I'm crashing into you
  Baby kiss me, kiss me
  Before they turn the lights out
  Before they turn the lights out
  Baby love me lights out

  In the darkest night hour
  I'll search through the crowd
  Your face is all that I see
  I'll give you everything
  Baby, love me lights out
  Baby, love me lights out

  We don't have forever
  Baby daylight's wasting
  You better kiss me
  Before our time is run out
  Nobody sees what we see
  They're just hopelessly gazing
  Baby take me, take me
  Before they turn the lights out
  Before time is run out
  Baby love me lights out

  In the darkest night hour
  I'll search through the crowd
  Your face is all that I see
  I'll give you everything
  Baby, love me lights out
  Baby, love me lights out
  You can turn my lights out

  I love you like XO
  You love me like XO
  You kill me girl XO
  You love me like XO
  Is all that I see
  I'll give you everything
  Baby love me lights out
  Baby love me lights out
  You can turn my lights out

  In the darkest night hour
  I'll search through the crowd
  Your face is all that I see
  I'll give you everything
  Baby, love me lights out
  Baby, love me lights out
  You can turn my lights out` */
});
```
### Command
```
> grab_text http://www.azlyrics.com/lyrics/johnmayer/xo.html
```
Then the output would be as expected.


## Licence
MIT
