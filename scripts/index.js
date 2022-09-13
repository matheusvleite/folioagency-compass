(function () {
    const menu = document.querySelector('.burguer-menu')
    const navMenu = document.querySelector('.nav__mobile')
    menu.addEventListener('click', () => {
        navMenu.classList.toggle('active')
    })

    const closeMenu = document.querySelector('.close-menu')
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('active')
    })

}())
