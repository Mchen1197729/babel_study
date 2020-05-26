const button = document.getElementById('btn')

button.addEventListener('click', async e => {
  const {sayHi} = await import(/* webpackChunkName: "sayHi" */'./sayHi')
  const {add} = await import(/* webpackChunkName: "add" */'./add')
  sayHi()
  console.log(add(10, 20))
})
