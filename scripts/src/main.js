const { alpacaToURI, downloadURI } = require('./download.js')

const Vue = require('vue/dist/vue.js')
const app = new Vue({
  el: '#app',
  data: {
    categories: [
      'accessories',
      'ears',
      'hair',
      'eyes',
      'mouth',
      'neck',
      'leg',
      'backgrounds'
    ],
    category: '',
    styles: {
      accessories: ['earings', 'flower', 'glasses', 'headphone'],
      ears: ['default', 'tilt-backward', 'tilt-forward'],
      hair: ['bang', 'curls', 'default', 'elegant', 'fancy', 'quiff', 'short'],
      eyes: ['angry', 'default', 'naughty', 'panda', 'smart', 'star'],
      mouth: ['astonished', 'default', 'eating', 'laugh', 'tongue'],
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
      accessories: 'headphone',
      ears: 'default',
      hair: 'default',
      eyes: 'default',
      mouth: 'default',
      neck: 'default',
      leg: 'default',
      backgrounds: 'default'
    }
  },
  computed: {
    getAccessoriesImgSrc () {
      return this.selectedStyle.accessories ? `./assets/accessories/${this.selectedStyle.accessories}.png` : ''
    },
    getErasImgSrc () {
      return this.selectedStyle.ears ? `./assets/ears/${this.selectedStyle.ears}.png` : ''
    },
    getHairImgSrc () {
      return this.selectedStyle.hair ? `./assets/hair/${this.selectedStyle.hair}.png` : ''
    },
    getEyesImgSrc () {
      return this.selectedStyle.eyes ? `./assets/eyes/${this.selectedStyle.eyes}.png` : ''
    },
    getMouthImgSrc () {
      return this.selectedStyle.mouth ? `./assets/mouth/${this.selectedStyle.mouth}.png` : ''
    },
    getNeckImgSrc () {
      return this.selectedStyle.neck ? `./assets/neck/${this.selectedStyle.neck}.png` : ''
    },
    getLegImgSrc () {
      return this.selectedStyle.leg ? `./assets/leg/${this.selectedStyle.leg}.png` : ''
    },
    getBackgroundsImgSrc () {
      return this.selectedStyle.backgrounds ? `./assets/backgrounds/${this.selectedStyle.backgrounds}.png` : ''
    }
  },
  methods: {
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
