const path = require('path');

const formats = ['3gp', 'aac', 'flv', 'm4a', 'mp3', 'mp4', 'ogg', 'wav', 'webm']

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
    }).option('format', {
      alias: ['f'],
      type: 'string',
      choices: formats,
      coerce: (it) => it.toLowerCase(),
      description: 'The format to save the video',
      default: 'mp4'
  })
}

module.exports = {
  createYargsTemplate
}
