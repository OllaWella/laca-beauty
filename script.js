window.addEventListener('DOMContentLoaded', () => {
    // burger menu
    const nav = document.querySelector('.nav'),
          burger = document.querySelector('.nav-burger'),
          navParent = document.querySelector('.nav__list');


    burger.addEventListener('click', function(){
        nav.classList.toggle('active');
        document.querySelector('body').classList.toggle('overflow');
        navParent.addEventListener('click', function() {
            nav.classList.remove('active');
            document.querySelector('body').classList.remove('overflow');
        });
    })
// smooth scroll
    const smoothLinks = document.querySelectorAll('a[href^="#"]');
    for (let smoothLink of smoothLinks) {
        smoothLink.addEventListener('click', function (e) {
            e.preventDefault();
            const id = smoothLink.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    };

    // scroll to the top of the page
    const btnUp = {
        el: document.querySelector('.btn-up'),
        show() {
          // удалим у кнопки класс btn-up_hide
          this.el.classList.remove('btn-up_hide');
        },
        hide() {
          // добавим к кнопке класс btn-up_hide
          this.el.classList.add('btn-up_hide');
        },
        addEventListener() {
          // при прокрутке содержимого страницы
          window.addEventListener('scroll', () => {
            // определяем величину прокрутки
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
            scrollY > 400 ? this.show() : this.hide();
          });
          // при нажатии на кнопку .btn-up
          document.querySelector('.btn-up').onclick = () => {
            // переместим в начало страницы
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: 'smooth'
            });
          }
        }
      }
      
      btnUp.addEventListener();
    // tabs
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

          function hideTabContent() {
            tabsContent.forEach(item => {
                item.classList.add('hide');
                item.classList.remove('show', 'fade');
            });
    
            tabs.forEach(item => {
                item.classList.remove('tabheader__item_active');
            });
        }
    
        function showTabContent(i = 0) {
            tabsContent[i].classList.add('show', 'fade');
            tabsContent[i].classList.remove('hide');
            tabs[i].classList.add('tabheader__item_active');
        }
    
        hideTabContent();
        showTabContent();
    
        tabsParent.addEventListener('click', (event) => {
            const target = event.target;
    
            if (target && target.classList.contains('tabheader__item')) {
                tabs.forEach((item, i) => {
                    if (target == item) {
                        hideTabContent();
                        showTabContent(i);
                    }
                });
            }
        });
        // swiper
        var swiper = new Swiper(".mySwiper", {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 30,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            750: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            1100: {
              slidesPerView: 3,
              spaceBetween: 30
            }
          }
        });
})