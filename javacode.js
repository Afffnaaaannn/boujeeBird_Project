const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav-toggle");
const navClose=document.getElementById("nav-close");

//show menu
if(navToggle)
{
    navToggle.addEventListener('click',()=>
    {
         navMenu.classList.add('show-menu');
    });
}

if(navClose)
{
    navClose.addEventListener('click',()=>
    {
        navMenu.classList.remove('show-menu');
    });
}

//remove menu mobile

const navLink= document.querySelectorAll('.nav__link');

const LinkAction =()=>
{
const navMenu=document.getElementById("nav-menu");
navMenu.classList.remove("show-menu");
}

navLink.forEach(n=> n.addEventListener('click',LinkAction));


//Shadow header

const showHeader=()=>
{
    const header=document.getElementById("header");
    if(this.scrollY>=50)
    {
        header.classList.add('shadow-header');
    }
    else
    {
        header.classList.remove('shadow-header');
    }
}
window.addEventListener('scroll',showHeader)
//SCROLL UP
const scrollup=()=>
{
    const scrollup=document.getElementById("scroll-up");
    if(this.scrollY>=350)
    {
        scrollup.classList.add('show-scroll');
    }
    else
    {
        scrollup.classList.remove('show-scroll');
    }
}
window.addEventListener('scroll',scrollup)


//Scroll sections active link
const sections=document.querySelectorAll('section[id]');

const scrollActive=()=>
{
    const scrollDown=window.scrollY;

    sections.forEach(current=>
        {
            const sectionHeight=current.offsetHeight,
                sectionTop=current.offsetTop - 58,
                sectionid=current.getAttribute('id'),
                sectionClass=document.querySelector('.nav__menu a[href*=' + sectionid + ']' );

                if(scrollDown>sectionTop && scrollDown <= sectionTop + sectionHeight)
                {
                    sectionClass.classList.add('active-link');
                }
                else
                {
                    sectionClass.classList.remove ('active-link');
                }
        })
}
window.addEventListener('scroll', scrollActive)

//========ANIMATION==========
const sr=ScrollReveal(
    {
        origin:'top',
        distance:'60px',
        duration:1000,
        delay:300,
    })

    sr.reveal(`.home__data`)
    sr.reveal(`.home__images`,{delay:600})
    sr.reveal(`.home-dam-1`,{delay:1000, scale:10, rotate:{z:65}})
    sr.reveal(`.home-dam-2, .home-dam-3`,{delay:1400, scale:0, rotate:{z:45}})
    sr.reveal(`.home-dam-4`,{delay:1000, scale:0, rotate:{z:45}})
    sr.reveal(`.home-dam-5`,{delay:1100, scale:0, rotate:{z:45}})
    sr.reveal(`.about__img-1`,{delay:600, origin:'right'})
    sr.reveal(`.about__img-2`,{delay:800, origin:'left'})
    sr.reveal(`.about__tooltip-1`,{delay:1600, origin:'left'})
    sr.reveal(`.about__tooltip-2`,{delay:1800, origin:'right'})
    sr.reveal(`.order__card::nth-child(1)`,{ origin:'right'})
    sr.reveal(`.order__card::nth-child(2)`,{ origin:'left'})
    sr.reveal(`.order__tooltip-1`,{delay:800, origin:'right'})
    sr.reveal(`.order__tooltip-2`,{delay:800, origin:'left'})
    sr.reveal(`.home__titles`,{origin:'bottom'})
    sr.reveal(`.combo__img`,{delay:1000})
    sr.reveal(`.home__data`,{delay:1600})
    sr.reveal(`.home__numbers`,{delay:1600, origin:'bottom'})
    sr.reveal(`.contact__data`,{origin:'right'})
    sr.reveal(`.contact__info`,{origin:'left'})
    sr.reveal(`.contact__img-1`,{delay:1000,distance:0, scale:0, rotate:{z:-45}})
    sr.reveal(`.contact__img-2`,{delay:1000,distance:0, scale:0, rotate:{z:45}})
    sr.reveal(`.contact__dam-1`,{delay:1400, scale:0, rotate:{z:45}})
    sr.reveal(`.contact__img-4`,{delay:2000, scale:0, rotate:{z:45}})
    sr.reveal(`.contact__dam-2`,{delay:1800, scale:0, rotate:{z:45}})
    sr.reveal(`.contact__dam-3`,{delay:1600, scale:0, rotate:{z:45}})
