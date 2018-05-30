const { environment } = require('@rails/webpacker')
const typescript = require('./loaders/typescript')
const html = require('./loaders/html')
const svg = require('./loaders/svg')
const style = require('./loaders/style')
for(let key of environment.loaders.keys()) {
  environment.loaders.delete(key)
}
environment.loaders.append('typescript', typescript)
environment.loaders.append('html', html)
environment.loaders.append('svg', svg)
environment.loaders.append('style', style)
module.exports = environment