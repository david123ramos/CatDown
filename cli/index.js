const ytdl = require('ytdl-core');
const yargs = require('yargs');
const fs = require('fs');
const { createYargsTemplate } = require('./input');

const args = createYargsTemplate(yargs).argv;

function isSavingInFile() {
  return args.output !== null
}

function output() {
  if (isSavingInFile()) {
    return fs.createWriteStream(String(args.output))
  } else {
    return process.stdout;
  }
}

if (ytdl.validateURL(args.url)) {

  if (isSavingInFile()) {
    console.log(`Downloading ${args.url}`)
  }

  const stream = ytdl(args.url, {
    filter: format => format.container === args.format,
    format: args.format,
  })

  stream.pipe(output())

  if (isSavingInFile()) {
    stream.on('progress', (_, a, b) => {
      if (a === b) {
        console.log(`Done! Video saved in ${args.output}`)
      } else {
        console.log(`${(a/1048576).toFixed(2)}MB/${(b/1048576).toFixed(2)}MB`)
      }
    })
  }

} else {
  console.error(`${args.url} is not valid`)
}
