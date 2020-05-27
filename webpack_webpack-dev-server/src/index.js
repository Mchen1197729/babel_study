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


if (module.hot) {
  // module.hot.check(true).then(outdatedModules => {
  //   // 超时的模块……
  // }).catch(error => {
  //   // 捕获错误
  // });
  console.dir(module.hot)
  module.hot.accept('./add.js', () => {

  })
}
