document.addEventListener("DOMContentLoaded", function() {
// Меню бургер
   const iconMenu = document.querySelector('.menu__icon');
   const menuBody = document.querySelector('.menu__body');
   if (iconMenu) {
      iconMenu.addEventListener("click", function (e) {
         document.body.classList.toggle('_lock');
         iconMenu.classList.toggle('_active');
         menuBody.classList.toggle('_active');
      });
   };

   
   let tabBtn = document.querySelectorAll('.tab__btn');
   let tabsContent = document.querySelectorAll('.tabs__content');
   

   if (menuBody) {
      menuBody.addEventListener('click', (e) => {
         if (e.target.classList.contains('tab__btn')) {
            const tabsPath = e.target.dataset.tabsPath;
            tabBtn.forEach(el => { el.classList.remove('tab__btn--active');});
            document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tab__btn--active'); 
            tabsHandler(tabsPath);
         }
      })
   }

   const tabsHandler = (path) => {
      tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
   };

   // Slider-1
   let slider_1 = new Swiper('.slider_1', {
      pagination: {
         el: '.swiper-pagination',
         clickable: true,
      },
   });
   //Slider-2
   let slider_2 = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 9,
   });
   let slider_22 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".my-button-next",
         prevEl: ".my-button-prev",
      },
      pagination: {
         el: '.my__pagin',
         clickable: true,
      },
      thumbs: {
         swiper: slider_2,
      },
   });
   
});





