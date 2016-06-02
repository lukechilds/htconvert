# htconvert [![Build Status](https://travis-ci.org/lukechilds/htconvert.svg?branch=master)](https://travis-ci.org/lukechilds/htconvert) [![Coverage Status](https://coveralls.io/repos/github/lukechilds/htconvert/badge.svg?branch=master)](https://coveralls.io/github/lukechilds/htconvert?branch=master)

Convert .htaccess redirects to nginx.conf redirects.

## Install

```shell
npm install --global htconvert
```

## Usage

`.htaccess`

```apacheconf
# Frontend Redirects
Redirect 301 /deleted-page/ https://website.com/new-page/
Redirect 302 /new-feature/ https://website.com/coming-soon/

# Admin Redirects
Redirect 301 /admin/ https://website.com/?login=true
```

```shell
$ cat .htaccess | htconvert > nginxRedirects.conf
# or
$ htconvert -f .htaccess > nginxRedirects.conf
```

`nginxRedirects.conf`

```
# Frontend Redirects
location /deleted-page/ {
  return 301 https://website.com/new-page/;
}
location /new-feature/ {
  return 302 https://website.com/coming-soon/;
}

# Admin Redirects
location /admin/ {
  return 301 https://website.com/?login=true;
}
```

### Options

```shell
$ htconvert --help

  Usage: htconvert [options]

  Options:

    -h, --help              output usage information
    -V, --version           output the version number
    -f, --file [.htaccess]  File containing .htaccess redirects
```

### Node

If you want to you can also use this as a node module

```shell
npm install --save htconvert
```

```js
var htconvert = require('htconvert');
var htaccess = 'Redirect 301 /deleted-page/ https://website.com/new-page/';

htconvert(htaccess);
// `location /deleted-page/ {
//   return 301 https://website.com/new-page/;
// }`
```

## License

MIT © Luke Childs
