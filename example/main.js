// require jQuery and attach it to the window (eww).
window.$ = window.jQuery = require("jquery");

// Since there is a number of files, we'll make use of require.context to make it more readable.
var req = require.context("jquery.i18n/src");

// Quick and dirty way to require all the nessarry files. We do it this way to maintain require order.
var files = ["js", "messagestore", "fallbacks", "parser", "emitter", "language"];
files.forEach(function(module) {
    req("./jquery.i18n." + module);
});

// Require the locale file using the jquery-i18n loader.
require("jquery-i18n!./locale/en.json");

// Alert the user to show it's working.
alert('$.i18n("hello-world") -> ' + $.i18n("hello-world"));
alert('$.i18n("greetings", "Lewis") -> ' + $.i18n("greetings", "Lewis"));
