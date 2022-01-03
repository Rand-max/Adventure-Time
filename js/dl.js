//視差滾動
let titlecontrol = document.getElementById('titlecontrol');
let bgcontrol = document.getElementById('bgcontrol');
let fjcontrol = document.getElementById('treebranchcontrol');
let backcontrol= document.getElementById('backcontrol');


window.addEventListener('scroll',function(){
  let value = window.scrollY;

  titlecontrol.style.top=value*0.9+'px';
  bgcontrol.style.top=value*0.8+'px';
  treebranchcontrol.style.top=value*0.55+'px';
  backcontrol.style.top=value+'px';
})
