# url-shorty
A dependency less url shortner for nodejs

## Installation
> Grab it using npm

```bash
sudo npm install url-shorty
```

# Usage #

### create short url with links
```js
url_shorty = require('url-shorty');
url_shorty.encodeintstring62('https://google.com/',125);
```

### decode short urls with return links
```js
url_shorty = require('url-shorty');
url_shorty.decodeintstring62('https://google.com/','cb');
```


### create short integers only
```js
url_shorty = require('url-shorty');
url_shorty.encodeintstring62(125);
```

### decode short integers only
```js
url_shorty = require('url-shorty');
url_shorty.decodeintstring62('cb');
```