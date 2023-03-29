const burger = document.getElementById('burger-button')
const links = document.getElementById('nav-links')
let burgerState = false

const handleBurgerState = () => {
    burgerState = !burgerState
}

burger.addEventListener('click', handleBurgerState)
burger.addEventListener('click', () => {
    if (burgerState) {
        links.classList.add('show-links')
    } else {
        links.classList.remove('show-links')
    }
    
})