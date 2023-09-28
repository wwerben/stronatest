
const header = document.querySelector('.sticky-header');
const logo = document.querySelector('.logoo');


const headerHeight = header.clientHeight;
const scrollTrigger = 100; 

window.addEventListener('scroll', () => {

  const scrollDistance = window.scrollY;

  if (scrollDistance > scrollTrigger) {
    
    header.classList.remove('lg:text-xl');
    header.classList.add('lg:text-lg');
    header.classList.remove('bg-transparent');
    header.classList.add('bg-blue2');
    logo.classList.remove('lg:h-16');
    logo.classList.add('lg:h-10');
  } else {
  
    header.classList.remove('lg:text-lg');
    header.classList.add('lg:text-xl');
    header.classList.remove('bg-blue2');
    header.classList.add('bg-transparent');
    logo.classList.add('lg:h-16');
    logo.classList.remove('lg:h-10');
  }
});


const btn = document.querySelector('button.mobile-menu-button');
const menu = document.querySelector('.mobile-menu');

btn.addEventListener('click', (event) => {
event.stopPropagation(); 
menu.classList.toggle('hidden');
});

document.addEventListener('click', (event) => {
if (!menu.contains(event.target)) { 
  menu.classList.add('hidden'); 
}
});

document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.my-element');

  window.addEventListener('scroll', function() {
    elements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const threshold = 0.8; 

      
      if (elementTop < windowHeight * threshold) {
        element.classList.remove('opacity-0', 'translate-y-10');
        element.classList.add('opacity-100', 'translate-y-0');
      }
    });
  });
});


