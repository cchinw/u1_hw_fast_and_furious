let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
]

window.onload = function (event) {
  // Random quote of the day generator
  const randomQuote = function () {
    document.querySelector('#quote-of-the-day').textContent = `"${
      quotes[Math.floor(Math.random() * quotes.length)]
    }"`
  }
  randomQuote()

  // Do all of your work inside the window.onload function (in other words, here!)

  // Part 1

  document.getElementById('main-title').innerHTML = "Weldome to Dom's World"

  // Part 2

  document.body.style.backgroundColor = 'grey'

  // Part 3

  // const domsFavs = document.getElementById('#favorite-things')
  // let item = document.getElementById('remove')
  // let removeFav = domsFavs.removeChild(item)

  const lastList = document.getElementById('favorite-things').lastElementChild
  console.log(lastList)

  document.getElementById('favorite-things').removeChild(lastList)
  console.log(lastList)

  // Part 4

  let specialFont = document.getElementsByClassName('special-title')

  for (let i = 0; i < specialFont.length; i++) {
    specialFont[i].style.fontSize = '2rem'
  }

  // Part 5

  let noChicago = document.getElementById('past-races').children
  for (let i = 0; i < noChicago.length; i++) {
    if (noChicago[i].innerText === 'Chicago') {
      document.getElementById('past-races').removeChild(noChicago[i])
    }
  }
  console.log(noChicago)

  // Part 6

  let ul = document.getElementById('past-races')
  let li = document.createElement('li')
  // let lagosText = document.createTextNode('Lagos')
  li.innerText = 'Lagos'
  // li.appendChild(lagosText)
  ul.appendChild(li)

  // Part 7
  //Really tried, couldn't figure this out :(

  let ogDiv = document.getElementById('dom-adventures')
  let newDiv = document.createElement('div')
  newDiv.classList.add('blog-post')
  newDiv.classList.add('purple')

  let newHeader = document.createElement('h1')
  newHeader.innerHTML = 'Lagos'

  let newP = document.createElement('p')
  let pText = document.createTextNode(
    'I got stuck in traffic and had to bribe SARS'
  )

  newP.appendChild(pText)
  newHeader.appendChild(newP)

  newDiv.appendChild(newHeader)
  ogDiv.append(newDiv)
}
