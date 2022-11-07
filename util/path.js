const path = require('path'); // path module

// dirname : Return the directory name of a path. Similar to the Unix dirname command.
// process.mainModule.filename => require.main.path
module.exports = path.dirname(require.main.path);
