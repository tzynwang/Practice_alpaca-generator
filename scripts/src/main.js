const { alpacaToURI, downloadURI } = require('./download.js')

const Vue = require('vue/dist/vue.js')
const app = new Vue({
  el: '#app',
  data: {
    canvas: [
      'backgrounds',
      'leg',
      'ears',
      'neck',
      'nose',
      'mouth',
      'hair',
      'eyes',
      'accessories'
    ],
    categories: [
      'accessories',
      'ears',
      'hair',
      'eyes',
      'mouth',
      'nose',
      'neck',
      'leg',
      'backgrounds'
    ],
    selectedCategory: '',
    styles: {
      accessories: ['earings', 'flower', 'glasses', 'default'],
      ears: ['default', 'tilt-backward', 'tilt-forward'],
      hair: ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'],
      eyes: ['angry', 'default', 'naughty', 'panda', 'smart', 'star'],
      mouth: ['astonished', 'default', 'eating', 'laugh', 'tongue'],
      nose: ['beard', 'default'],
      neck: ['bend-backward', 'bend-forward', 'default', 'thick'],
      leg: ['bubble-tea', 'cookie', 'default', 'game-console', 'tilt-backward', 'tilt-forward'],
      backgrounds: [
        'blue50', 'blue60',
        'blue70', 'darkblue30',
        'darkblue50', 'darkblue70',
        'green50', 'green60', 'green70',
        'grey40', 'grey70',
        'grey80', 'red50',
        'red60', 'red70',
        'yellow50', 'yellow60', 'yellow70'
      ]
    },
    selectedStyle: {
      accessories: 'default',
      ears: 'default',
      hair: 'default',
      eyes: 'default',
      mouth: 'default',
      nose: 'default',
      neck: 'default',
      leg: 'default',
      backgrounds: 'default'
    },
    handler: {
      get: function (target, bodyPart) {
        return target[bodyPart] ? `./assets/${bodyPart}/${target[bodyPart]}.png` : ''
      }
    }
  },
  methods: {
    imgProxy (category) {
      const imgSrcProxy = new Proxy(this.selectedStyle, this.handler)
      return imgSrcProxy[category]
    },
    shuffle () {
      for (const key in this.selectedStyle) {
        this.selectedStyle[key] = this.styles[key][Math.floor(Math.random() * this.styles[key].length)]
      }
    },
    async download () {
      const URI = await alpacaToURI()
      downloadURI(`data:${URI}`, 'alpaca.png')
    }
  }
})
