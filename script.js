const section = document.querySelector('body > div > section')
const button = document.querySelector('body > div > button')
const getFruits = async () => {
  try{
    /*Start Client/Server Communication */
    const response = await fetch('http://localhost:3000/fruits/json') // nasty string
    const data = await response.json() // pretty js
    /*End Client/Server Communication */
    /*Start Client-Side Rendering */
    section.innerHTML = data.map((fruit) => {
      return (`<div>${fruit.name}</div>`)
    }).join('')
    /*End Client-Side Rendering */
    /*Start Client-Side Routing */
    window.history.pushState('data', 'title', '/index')
    /*End Client-Side Routing */
  }catch(err){
    console.error(err)
  }
}
button.addEventListener('click', getFruits)
