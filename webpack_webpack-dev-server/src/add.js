export function add(x, y) {
  let number = 0
  return () => {
    number++
    console.log(number, x, y)
    console.log('Hello~')
  }
}
