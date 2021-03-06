//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
   let tab = tabs[index];
   let tabs_items = tab.querySelectorAll("._tabs-item");
   let tabs_blocks = tab.querySelectorAll("._tabs-block");
   for (let index = 0; index < tabs_items.length; index++) {
      let tabs_item = tabs_items[index];
      tabs_item.addEventListener("click", function (e) {
         for (let index = 0; index < tabs_items.length; index++) {
            let tabs_item = tabs_items[index];
            tabs_item.classList.remove('_active');
            tabs_blocks[index].classList.remove('_active');
         }
         tabs_item.classList.add('_active');
         tabs_blocks[index].classList.add('_active');
         e.preventDefault();
      });
   }
}
//Swiper
new Swiper('.image-slider', {
   pagination: {
      el: '.swiper-pagination',
      clickable: true,
   },
   observer: true,
   observeParents: true,
   observeSlideChildren: true,
});

//Header-fixed
window.onscroll = function () {

   let header = document.querySelector('.header');

   if (window.pageYOffset > 300) {
      header.classList.add('header-fixed');
   } else {
      header.classList.remove('header-fixed');
   }

}