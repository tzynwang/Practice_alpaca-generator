const { readdirSync } = require('fs')
const source = 'C:\\Projects\\practice_alpaca-generator\\assets'

const getDirectories = source =>
  readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)

console.log(getDirectories(source))
