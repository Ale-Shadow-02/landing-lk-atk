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
   // Прокрутка при клике
   const anchors = document.querySelectorAll('a.menu__link')

   for (let anchor of anchors) {
   anchor.addEventListener('click', function (e) {
      e.preventDefault()
      if (iconMenu.classList.contains('_active')) {
         document.body.classList.remove('_lock');
         iconMenu.classList.remove('_active');
         menuBody.classList.remove('_active');
      }
      const blockID = anchor.getAttribute('href')
      
      document.querySelector(blockID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
   }
   // Tabs in headers
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
         el: '.my1__pagin',
         clickable: true,
      },
      navigation: {
         nextEl: ".my1-button-next",
         prevEl: ".my1-button-prev",
      },
      grabCursor: true,
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
      autoHeight: true,
      grabCursor: true,
   });
   //Slider-3 
   let slider_3 = new Swiper(".mySwiper3", {
      spaceBetween: 10,
      slidesPerView: 8,
   });
   let slider_33 = new Swiper(".mySwiper33", {
      spaceBetween: 10,
      navigation: {
         nextEl: ".my3-button-next",
         prevEl: ".my3-button-prev",
      },
      pagination: {
         el: '.my3__pagin',
         clickable: true,
      },
      thumbs: {
         swiper: slider_3,
      },
      autoHeight: true,
      grabCursor: true,
   });
   
   
   // Modal Open
   const popupLinks = document.querySelectorAll('.popup-link');
   const body = document.querySelector('body');
   const lockPadding = document.querySelectorAll(".lock-padding");

   let unlock = true;
   const timeout = 800;

   if (popupLinks.length > 0) {
      for (let index = 0; index < popupLinks.length; index++) {
         const popupLink = popupLinks[index];
         popupLink.addEventListener("click", function (e) {
            const popupName = popupLink.getAttribute('href').replace('#', '');
            const curentPopup = document.getElementById(popupName);
            popupOpen(curentPopup);
            e.preventDefault();
         });
      }
   }
   const popupCloseIcon = document.querySelectorAll('.close-popup');
   if (popupCloseIcon.length > 0) {
      for (let index = 0; index < popupCloseIcon.length; index++) {
         const el = popupCloseIcon[index];
         el.addEventListener('click', function (e) {
            popupClose(el.closest('.popup'));
            e.preventDefault();
         });
      }
   }

   function popupOpen(curentPopup) {
      if (curentPopup && unlock) {
         const popupActive = document.querySelector('.popup.open');
         if (popupActive) {
            popupClose(popupActive, false);
         } else {
            bodyLock();
         }
         curentPopup.classList.add('open');
         curentPopup.addEventListener("click", function (e) {
            if (!e.target.closest('.popup__content')) {
               popupClose(e.target.closest('.popup'));
            }
         });
      }
   }

   function popupClose(popupActive, doUnlock = true) {
      if (unlock) {
         popupActive.classList.remove('open');
         if (doUnlock) {
            bodyUnLock();
         }
      }
   }

   function bodyLock() {
      const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

      if (lockPadding.length > 0) {
         for (let index = 0; index < lockPadding.length; index++) {
            const el = lockPadding[index];
            el.style.paddingRight = lockPaddingValue;
         }
      }
      body.style.paddingRight = lockPaddingValue;
      body.classList.add('lock');

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }

   function bodyUnLock() {
      setTimeout(function () {
         if (lockPadding.length > 0) {
            for (let index = 0; index < lockPadding.length; index++) {
               const el = lockPadding[index];
               el.style.paddingRight = '0px';
            }
         }
         body.style.paddingRight = '0px';
         body.classList.remove('lock');
      }, timeout);

      unlock = false;
      setTimeout(function () {
         unlock = true;
      }, timeout);
   }
});





