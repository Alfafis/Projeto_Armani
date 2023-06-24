const { execSync } = require('child_process')
const fs = require('fs')

fs.writeFileSync('./server.js', console.log("Criando artefato..."))

fs.mkdirSync('dist')

process.chdir('dist')

execSync('git init')