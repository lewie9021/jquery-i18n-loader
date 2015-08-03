var Path = require("path");

module.exports = function(content) {
    var locale, name;
    
    this.cacheable && this.cacheable();

    try {
        // Attempt to parse it to ensure it's valid JSON.
        locale = JSON.parse(content);
    } catch(e) {
        throw new Error("Failed to parse locale file. (" + this.resourcePath + ")");
    }

    // Parse the resourcePath to determine the locale name.
    name = Path.basename(this.resourcePath, ".json");

    // Assuming jQuery and the i18n library has already been attached to the window, we pass the JSON inline.
    return "$.i18n().load(" + JSON.stringify(locale) + ", '" + name + "');";
};
