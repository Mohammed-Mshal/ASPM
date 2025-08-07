document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('scroll', () => {
        window.scrollY >= 50 ?
            document.querySelector('nav').classList.add('scrolling')
            :
            document.querySelector('nav').classList.remove('scrolling')

    })
    const menu = document.querySelector('nav .popup-menu')
    const toggleMenu = document.querySelector('nav .options .toggle-menu')
    const toggleInnerList = document.querySelectorAll('nav .popup-menu .list-menu li .toggle-inner-list')

    toggleMenu.addEventListener('click', () => {
        menu.classList.toggle('show');
        const nav = document.querySelector('nav');
        const containerPopup = menu.querySelector('.container-popup');
        function handleClickOutside(e) {
            if (e.target.closest('.popup-menu') && !e.target.closest('.container-popup') && !e.target.closest('.toggle-menu')) {
                menu.classList.remove('show');
                document.removeEventListener('click', handleClickOutside);
            }
        }
        setTimeout(() => {
            document.addEventListener('click', handleClickOutside);
        }, 0);
    });
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
    document.querySelectorAll('select').forEach(function (select) {
        if (select.hasAttribute('data-placeholder')) {
            NiceSelect.bind(select, { placeholder: select.getAttribute('data-placeholder') });
        } else {
            NiceSelect.bind(select);
        }
    });

    const currentYear = document.querySelector('footer .current-year')
    currentYear.innerHTML = new Date(Date.now()).getFullYear()
    if ($("#datepicker").length) {
        $("#datepicker").datepicker();
    }
    if ($("#timepicker").length) {
        $("#timepicker").timepicker({
            timeFormat: 'H:i',
            interval: 30,
            minTime: '0:00',
            maxTime: '24:00',
            dynamic: false,
            dropdown: true,
            scrollbar: true,
        });
    }
})