let menuBtn = document.querySelector(".mMenu");
let mobile_menu = document.querySelector(".mobileMenu");
let close= document.querySelector("#close");

menuBtn.addEventListener('click', ()=>{
	mobile_menu.classList.add('open');

})

close.addEventListener('click', function(){
	mobile_menu.classList.remove('open');

})