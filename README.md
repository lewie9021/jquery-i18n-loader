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

Next we need to create a locale file (en.locale.json).

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
// require jQuery and attach it to the window (eww).
window.$ = window.jQuery = require("jquery");

// Since there is a number of files, we'll make use of require.context to make it more readable.
var req = require.context("jquery.i18n/src");

// Quick and dirty way to require all the necessary files. We do it this way to maintain require order.
var files = ["js", "messagestore", "fallbacks", "parser", "emitter", "language"];
files.forEach(function(module) {
    req("./jquery.i18n." + module);
});

// Require the locale file.
require("./en.locale.json");

// Alert the user to show it's working.
alert('$.i18n("hello-world") -> ' + $.i18n("hello-world"));
alert('$.i18n("greetings", "Lewis") -> ' + $.i18n("greetings", "Lewis"));
```
