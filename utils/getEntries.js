const path = require("path");
const glob = require("glob");
const resolve = (dir) => path.resolve(__dirname, dir);

function getEntries(filePath) {
  let resolvePath = resolve(filePath);
  let componentPath = glob.sync(resolvePath);
  let entries = {};
  componentPath.forEach((dirPath) => {
    const splits = dirPath.split("/");
    const name = splits[splits.length - 2];
    entries[name] = dirPath;
  });
  entries["index"] = path.resolve("./packages/index.js");
  return entries;
}
module.exports = getEntries("../packages/*/index.js");
