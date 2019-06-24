//CHANGE SCROLL SPEED
let scrollSpeed = 1.2;

function scroll(){
  let index = 0;
  let canWheel = true;

  TweenMax.set(window,{scrollTo: 0});

  let nbPage = document.querySelectorAll("section").length;

  function setIndex(newIndex){

    if(canWheel){
      if(newIndex >= 0 && newIndex < nbPage){
        index = newIndex;
      }else{
        return;
      }

      canWheel = false;
      setTimeout(()=>{ canWheel = true },1000);
      
      let tween = TweenMax.to(window, scrollSpeed ,{scrollTo: index * window.innerHeight, ease: Power3.easeOut});
      tween.eventCallback("onStart",function(){
        animation(index);
      });
    }
   
  }

  //SCROLL
  window.onwheel = function(e){
    e.preventDefault();
    setIndex(index + Math.sign(e.deltaY));
  }

  setIndex(0);
}