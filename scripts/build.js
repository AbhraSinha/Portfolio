const fs = require('fs');
const path = require('path');
const root = path.join(__dirname, '..');
const output = path.join(root, 'build');
fs.rmSync(output, { recursive: true, force: true });
fs.mkdirSync(output, { recursive: true });
fs.readdirSync(path.join(root, 'web')).forEach((file) => fs.copyFileSync(path.join(root, 'web', file), path.join(output, file)));
console.log('Built static portfolio in build/');
