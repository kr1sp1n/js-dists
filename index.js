const ghpages = require('gh-pages')
const path = require('path')

const libs = [
  'choo'
]

const handleError = (err) => {
  if (err) console.log(err)
}

ghpages.publish(__dirname, { src: '*.md' }, (err) => {
  if (err) return handleError(err)
  libs.forEach((lib) => ghpages.publish(path.join(__dirname, 'node_modules', lib, 'dist'), handleError))
})
