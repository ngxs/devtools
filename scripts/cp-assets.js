
const chokidar = require('chokidar');
const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

const buildPath = path.join(process.cwd(), 'dist/devtools');
const watcher = chokidar.watch(['dist/**/*', 'manifest.json']);

const cpFile = () => {
  mkdirp('dist/devtools', (err) => {
    if (err) {
      console.error(err);
      process.exit(2);
    }

    fs.createReadStream('src/manifest.json').pipe(fs.createWriteStream('dist/devtools/manifest.json'))
    fs.createReadStream('src/devtools.html').pipe(fs.createWriteStream('dist/devtools/devtools.html'))
    fs.createReadStream('src/devtools.js').pipe(fs.createWriteStream('dist/devtools/devtools.js'))
    fs.createReadStream('src/ngxs-logo.png').pipe(fs.createWriteStream('dist/devtools/ngxs-logo.png'))
  });
};

// copy once
cpFile();

if (process.argv[2] === 'watch') {
  console.log('starting watch mode');
  watcher.on('add', cpFile);
  watcher.on('addDir', cpFile);
  watcher.on('change', cpFile);
}
