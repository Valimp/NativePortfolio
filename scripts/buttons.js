const burger = document.getElementById('burger-button')
const links = document.getElementById('nav-links')
const link = document.getElementsByClassName('nav-link')
let burgerState = false

// Change state of burger button
const handleBurgerState = () => {
    burgerState = !burgerState
}

// onClick => add or remove 'show-links' class to links id element
burger.addEventListener('click', handleBurgerState)
burger.addEventListener('click', () => {
    if (burgerState) {
        links.classList.add('show-links')
    } else {
        links.classList.remove('show-links')
    }
    
})
// onClick => remove 'show-link' class to links id element
for (let i=0; i<link.length; i++) {
    link[i].addEventListener('click', () => {
        links.classList.remove('show-links')
        burgerState = false
    })
}