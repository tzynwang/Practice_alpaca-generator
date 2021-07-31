const html2canvas = require('html2canvas')

function downloadURI (uri, name) {
  const link = document.createElement('a')
  link.setAttribute('id', 'dynamicLink')
  link.download = name
  link.href = uri
  document.body.appendChild(link)
  link.click()
  document.querySelector('#dynamicLink').remove()
}

async function alpacaToURI () {
  const canvas = await html2canvas(document.querySelector('.app__canvas'))
  return canvas.toDataURL('image/png')
}

module.exports = { alpacaToURI, downloadURI }
