// let controller=new ScrollMagic.Controller();
// let timeline=new TimelineMax();

// timeline
// .to('.titlecontrol',2,{x:150})
// .to('.fjcontrol',2,{y:-50},'-=2')
// // .to('.bgcontrol',2,{y:-100},'-=2')


//按鈕active判定
let activeNavItem = $('.nav-item');

activeNavItem.click(function(){
  activeNavItem.removeClass('active');
  $(this).addClass('active');  
});

// let activeNavItem = $('.nav-item');
// const sections=document.querySelectorAll('section');
// const navLi=document.querySelectorAll(activeNavItem);
// window.addEventListener('scroll',()=>{
//   let current = '';
//   sections.forEach(section=>{
//     const sectionTop=section.offsetTop;
//     const sectionHeight=section.clientHeight;
//     if(pageYOffset>=(sectionTop-sectionHeight/5)){
//       current=section.getAttribute('id');
//     }
//   })
  
//   navLi.forEach(activeNavItem=>{
//     activeNavItem.removeClass('active');
//     if(activeNavItem.contains(current)){
//       activeNavItem.addClass('active');
//     }
//   })
// })

//視差滾動
let titlecontrol = document.getElementById('titlecontrol');
let bgcontrol = document.getElementById('bgcontrol');
let fjcontrol = document.getElementById('fjcontrol');
let treehouse = document.getElementById('treehouse');


window.addEventListener('scroll',function(){
  let value = window.scrollY;

  titlecontrol.style.left=value*0.35+'px';
  bgcontrol.style.top=value*0.8+'px';
  fjcontrol.style.top=value*0.25+'px';
  treehouse.style.top=value*0.5+'px';
})

//翻牌
$(document).ready(function(){
  $('.hover').hover(function(){
    $(this).addClass('flip');
  },function(){
    $(this).removeClass('flip');
  });
});

