import './index.css'

import {add} from './add'
import {bye} from './bye'


const button = document.getElementById('btn')
const number = add(20, 20)
button.addEventListener('click', e => {
  console.log('click button')
  number()
  bye()
})
const cache = [];

const files = require.context('.', false, /\.js$/)
console.dir(files)
files.keys().forEach(file => cache.push(files.id))

console.log(cache)

if (module.hot) {
  // console.dir(module.hot)
  module.hot.accept(cache, () => {

  })
}
