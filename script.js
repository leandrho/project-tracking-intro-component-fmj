const menubtn = document.querySelector('.nav-menu-btn');
menubtn.addEventListener('click',()=>{
    const navbarnav = document.querySelector('.navbar-nav');
    navbarnav.classList.toggle('active');
});