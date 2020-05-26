import {add} from './add'

const button = document.getElementById('btn')
button.addEventListener('click', e => {
  setTimeout(() => {
    Promise.resolve(add(10, 30)).then(result => {
      console.log(result)
    })
  }, 3000)
})
