const path = require('path');

function createYargsTemplate(yargs) {
  return yargs
    .help()
    .option('url', {
      alias: 'u',
      type: 'string',
      description: 'The URL of the video to save'
    }).option('output', {
      alias: ['o'],
      coerce: (it) => it === null ? it : path.resolve(it),
      description: 'The file to save the video\n If default the file contents will be printed to stdout',
      default: null
    })
}

module.exports = {
  createYargsTemplate
}
