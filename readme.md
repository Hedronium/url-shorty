# url-shorty
A dependency less url shortner for nodejs

## Installation
> Grab it using npm

```bash
npm install url-shorty
```

## Usage
### Generate short url

```js
url_shorty = require('url-shorty');
url_shorty.encodeUrl('https://example.com/', 125); // => https://example.com/b9
```

### Decode short url

```js
url_shorty.decodeUrl('https://example.com/b9'); // => 125
```

### Generate Slug
```js
url_shorty.encode64(125); // b9
```

### Decode Slug
```js
url_shorty.decode64('b9');  // 125
```
