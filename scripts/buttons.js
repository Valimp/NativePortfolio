const burger = document.getElementById('burger-button')
const links = document.getElementById('nav-links')
let burgerState = false

// Change state of burger button
const handleBurgerState = () => {
    burgerState = !burgerState
}

// onClick => add or remove 'show-links' class to burger-button id element
burger.addEventListener('click', handleBurgerState)
burger.addEventListener('click', () => {
    if (burgerState) {
        links.classList.add('show-links')
    } else {
        links.classList.remove('show-links')
    }
    
})