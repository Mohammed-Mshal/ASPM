document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('nav .popup-menu')
    const toggleMenu = document.querySelector('nav .options .toggle-menu')
    const toggleInnerList = document.querySelectorAll('nav .popup-menu .list-menu li .toggle-inner-list')
    toggleMenu.addEventListener('click', () => {
        menu.classList.add('show')
    })
    toggleInnerList.forEach((btn) => {
        btn.addEventListener('click', () => {
            toggleInnerList.forEach((e) => e.classList.remove('show'))
            btn.classList.add('show')
        })
    })
})