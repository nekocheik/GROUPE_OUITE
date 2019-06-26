import { maxHeaderSize } from 'http';

require('./scrollToPluging');
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;


class scrollControlled {

  constructor( scrollSpeed , page , delay = 2000 ){
    setTimeout( ()=>{
      this.scrollSpeed = scrollSpeed;
      this.canWheel = true;
      this.index = 1;
      this.element = page;
      this.pageLength = page.innerHeight ;
      this.newPosition  = page.innerHeight ;
      this.maxPageLength = this.getMaxLength();
      TweenMax.set( window ,{scrollTo: 0});
      this.memo = 0;
      // this.newPosition = null;
      this.delay = delay;
      this.view();
    } , 100 )

  }
  
  view(){
  
    window.onresize = (e)=> { 
      this.resize();
     };

    window.fullscreenchange = (e)=> { 
      this.resize();
     };

    document.querySelector('#app').addEventListener('wheel' , (e)=>{
      e.preventDefault();
      this.memo +=  Math.sign(e.deltaY) ;
      if( this.memo < 30 || this.memo < -30 ){
        this.scroll( Math.sign(e.deltaY) );

      }else{
        return
      }
    });
   }
  
  scroll( direction ){
    if( ( this.index <= 0 && -1 === direction  )  || ( this.maxPageLength <= this.newPosition && 1 === direction  )   ){ return };

    if ( direction > 0 ) {
      this.index++;
      this.newPosition += this.pageLength  ;
    }else{
      this.index--;
      this.newPosition -= this.pageLength ; 
    }

    TweenMax.to( window , this.scrollSpeed ,{ scrollTo : this.newPosition , ease: Power3.easeOut });
  }



  resize(){
    this.pageLength =  this.element.innerHeight ;
    this.newPosition =  this.pageLength * this.index ;
    this.maxPageLength = this.getMaxLength();
    TweenMax.to( window , this.scrollSpeed ,{ scrollTo :  this.newPosition , ease: Power3.easeOut });
   }


   getMaxLength(){
     let body = document.querySelector('body')
     return body.getBoundingClientRect().height 
   }

   scrollDown(){
    this.index++;
    this.newPosition += this.pageLength ;
    TweenMax.to( window , this.scrollSpeed ,{ scrollTo : this.newPosition , ease: Power3.easeOut });
   }
    
}

// new scrollControlled( 1.2  , window.innerHeight )

export {  scrollControlled }