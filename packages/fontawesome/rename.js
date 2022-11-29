/** Renames `package/package.json` from `@fortawesome/fontawesome-pro` to the package name specified in this repo */

const { writeFileSync } = require("fs");

const __package = __dirname + '/package/package.json';
const desiredName = require(__dirname + '/package.json').name;

const pkg = require(__package);
pkg.name = desiredName;
writeFileSync(__package, JSON.stringify(pkg, null, ' '));