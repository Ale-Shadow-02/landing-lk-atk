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
            tabBtn.forEach(el => { el.classList.remove('tab__btn--active') });
            document.querySelector(`[data-tabs-path="${tabsPath}"]`).classList.add('tab__btn--active');
            tabsHandler(tabsPath);
         }
      })
   }



   const tabsHandler = (path) => {
      tabsContent.forEach(el => { el.classList.remove('tabs__content--active') });
      document.querySelector(`[data-tabs-target="${path}"]`).classList.add('tabs__content--active');
   };
});



