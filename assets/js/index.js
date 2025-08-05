document.addEventListener('DOMContentLoaded', () => {

    const menu = document.querySelector('nav .popup-menu')
    const toggleMenu = document.querySelector('nav .options .toggle-menu')
    const toggleInnerList = document.querySelectorAll('nav .popup-menu .list-menu li .toggle-inner-list')
    
    toggleMenu.addEventListener('click', () => {
        menu.classList.toggle('show')
    })
    toggleInnerList.forEach((btn) => {
        btn.addEventListener('click', () => {
            if (btn.classList.contains('show')) {
                btn.classList.toggle('show')

            }
            else {
                toggleInnerList.forEach((e) => e.classList.remove('show'))
                btn.classList.toggle('show')
            }
        })
    })


    const currentYear = document.querySelector('footer .current-year')
    currentYear.innerHTML=new Date(Date.now()).getFullYear()
})