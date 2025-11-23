import { createRequire } from 'module'
import path from 'path'

const require = createRequire(import.meta.url)
const ghpages = require('gh-pages')

const distPath = path.resolve(process.cwd(), 'dist')

ghpages.publish(distPath, { dotfiles: true }, (err) => {
  if (err) {
    console.error('gh-pages publish error:')
    console.error(err)
    process.exit(1)
  }
  console.log('Successfully published dist to gh-pages')
})
