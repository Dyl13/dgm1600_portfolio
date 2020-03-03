import { films } from '../data/films.js'
import { people } from '../data/people.js'

console.log(people.length)

console.log(document.querySelector('.greeting'))

let greetingDiv = document.querySelector('.greeting')



let castList = document.createElement("ul")

const maleCharacters = people.filter(person => person.gender === "male")
console.log(maleCharacters)

const femaleCharacters = people.filter(person => person.gender === "female")
console.log(femaleCharacters)

const otherCharacters = people.filter(person => person.gender === "n/a" || person.gender === "none" || person.gender === "hermaphrodite")
console.log(otherCharacters)

let maleButton = document.querySelector('#maleButton')
let femaleButton = document.querySelector('#femaleButton')
let otherButton = document.querySelector('#otherButton')

maleButton.addEventListener("click", function( event ) {
  console.log('Thanks for clicking!')
})

let counter = 1

function populateDOM() {
  people.forEach(person => {
  let nameItem = document.createElement("li")
  nameItem.textContent = person.name
  castList.appendChild(nameItem)
  
  let personAnchor = document.createElement("a")
  personAnchor.href = "#"
  let personImg = document.createElement("img")
  personImg.src = `https://starwars-visualguide.com/assets/img/characters/${counter}.jpg`

  personImg.addEventListener('error', (event) => {
    personImg.hidden = true
    //personImg.src = '../images/uvu.png'
  })



  personImg.addEventListener("click", function( event ) {
    console.log('Thanks for clicking!')
  })

  personImg.addEventListener("mouseleave", function( event ) {
    console.log('Thanks for mouse leaving!')
  })

  personAnchor.appendChild(personImg)
  greetingDiv.appendChild(personAnchor)
  counter++
})

greetingDiv.appendChild(castList)