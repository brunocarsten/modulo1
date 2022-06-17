var scopackager = require('simple-scorm-packager')
var path = require('path')

const config = {
  version: '1.2',
  organization: 'Faros Educacional',
  title: 'Módulo 1',
  language: 'en-US',
  masteryScore: 80,
  startingPage: 'index.html',
  source: path.join(__dirname, 'build'),
  package: {
    version: process.env.npm_package_version,
    zip: true,
    author: 'Área Local',
    outputFolder: path.join(__dirname, 'scorm_packages'),
    description: 'CONHECENDO AS COMUNIDADES E OS POVOS TRADICIONAIS',
    keywords: ['scorm', 'course'],
    typicalDuration: 'PT0H5M0S',
    rights: `©${new Date().getFullYear()} Área Local. All right reserved.`
  }
}

scopackager(config, function (msg) {
  console.log(msg)
  process.exit(0)
})
