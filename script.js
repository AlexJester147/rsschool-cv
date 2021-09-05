const checkbox = document.querySelector('.theme-switch__checkbox');
const burger = document.querySelector('.burger');
const burgerMenu = document.querySelector('.burger-menu');


console.log(burgerMenu)

checkbox.addEventListener('change', function (){
  transition();
  if (this.checked){
    document.documentElement.setAttribute('data-theme','light');
  } else {
    
    document.documentElement.setAttribute('data-theme','dark');
  }
})


function transition(){
document.documentElement.classList.add('transition');

setTimeout(() =>{
  document.documentElement.classList.remove('transition');
},500);
}


burger.addEventListener('click', () => {
burger.children[0].classList.toggle('active');
burger.children[1].classList.toggle('passive');
burger.children[2].classList.toggle('active');
// burger.classList.toggle('active')

burgerMenu.classList.toggle('active');
})


window.addEventListener('click', function(e) {

  var isClickInside1 = burgerMenu.contains(e.target);

  if (!isClickInside1 && e.target!=burger) {
    burgerMenu.classList.remove('active');
    burger.children[0].classList.remove('active');
burger.children[1].classList.remove('passive');
burger.children[2].classList.remove('active');
  }

    });