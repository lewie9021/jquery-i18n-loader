# jQuery i18n Loader

---

A loader for Webpack that injects locale files for use with [wikimedia/jquery.i18n](https://github.com/wikimedia/jquery.i18n).

### Motivation

There doesn't seem to be any loaders that support the jQuery.i18n internationalization library. So I decided I would create one. I plan to soon fork wikimedia/jquery.i18n in the near future and implement support for module systems such as Webpack.

### Example

Below is a simple Webpack configuration (webpack.config.js).

```javascript
var Path = require("path");

module.exports = {
    entry: "./app/main.js",
    output: {
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.locale.json$/,
            loader: "jquery-i18n"
        }]
    }
};
```

Next we need to create a locale file.

```json
{
    "@metadata" : {
	"authors" : [
	    "Lewis"
	],
	"last-updated": "2015-08-03",
	"locale": "en"
    },
    
    "hello-world": "Hello World!",
    "greetings": "Greetings $1!"
}
```

Lastly, we'll require jQuery.i18n and the locale file.

```javascript
// TODO
```
