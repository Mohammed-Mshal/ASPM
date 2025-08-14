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
    if (currentYear) {
        currentYear.innerHTML = new Date(Date.now()).getFullYear()
    }
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
    const infoYearSliderEle = document.querySelector('.info-year-swiper')
    const historySliderEle = document.querySelector('.swiper.history-slider')
    if (historySliderEle && infoYearSliderEle) {
        const historySlider = new Swiper(historySliderEle, {
            spaceBetween: 30,
            centeredSlides: true,
            watchSlidesProgress: true,
            allowTouchMove: false,
            breakpoints: {
                1200: {
                    slidesPerView: 5,
                },
                778: {
                    slidesPerView: 4,
                },
                300: {
                    slidesPerView: 3,
                },
            },
        });
        const infoYearSlider = new Swiper(infoYearSliderEle, {
            spaceBetween: 30,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            thumbs: {
                swiper: historySlider,
            },
        });
    }
    const gallerySliderEleS = document.querySelectorAll('.gallery .gallery-container .swiper')
    let swipersGallery = []
    gallerySliderEleS.forEach((gallerySliderEle) => {
        const gallerySlider = new Swiper(gallerySliderEle, {
            grabCursor: true,
            centeredSlides: true,
            effect: 'coverflow',
            breakpoints: {
                800: {
                    coverflowEffect: {
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },
                    slidesPerView: 3,

                },
                300: {
                    slidesPerView: 1,
                    spaceBetween: 24,
                    coverflowEffect: {
                        rotate: 0,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    },
                }
            }
        });
        swipersGallery.push(gallerySlider)
    });


    const galleryTabs = document.querySelectorAll('.gallery .gallery-tabs .tab-item')
    galleryTabs.forEach((galleryTab) => {
        galleryTab.addEventListener('click', () => {
            galleryTabs.forEach((e) => e.classList.remove('active'))
            galleryTab.classList.add('active')
            const tabs = document.querySelectorAll('.gallery .wrapper-tap .gallery-container')
            swipersGallery.forEach((e) => e.destroy())
            tabs.forEach((e) => {
                if (e.id === galleryTab.getAttribute('data-tab')) {
                    e.classList.add('active')
                    const gallerySliderEle = document.querySelector(`.gallery .gallery-container#${e.id} .swiper`)
                    new Swiper(gallerySliderEle, {
                        grabCursor: true,
                        effect: 'coverflow',
                        centeredSlides: true,
                        breakpoints: {
                            800: {
                                coverflowEffect: {
                                    rotate: 50,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                },
                                slidesPerView: 3,

                            },
                            300: {
                                slidesPerView: 1,
                                spaceBetween: 24,
                                coverflowEffect: {
                                    rotate: 0,
                                    stretch: 0,
                                    depth: 100,
                                    modifier: 1,
                                    slideShadows: true,
                                },
                            }
                        }
                    });
                }
                else {
                    e.classList.remove('active')
                }
            })
        })
    })


    const questions = document.querySelectorAll('.faq-question');
    const answers = document.querySelectorAll('.faq-answer');
    // Initialize all answers as closed
    answers.forEach(function(ans) {
        ans.classList.remove('open');
    });
    questions.forEach(function(btn) {
        btn.addEventListener('click', function() {
            var answer = btn.nextElementSibling;
            var isOpen = answer.classList.contains('open');
            // Close all answers
            answers.forEach(function(ans) {
                ans.classList.remove('open');
            });
            questions.forEach(function(q) {
                q.classList.remove('active');
            });
            // Toggle current
            if (!isOpen) {
                answer.classList.add('open');
                btn.classList.add('active');
            }
        });
    });
})