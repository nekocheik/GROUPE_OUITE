
require('./scrollToPluging');
const gsap = require('gsap');
const TweenMax = gsap.TweenMax;


class scrollControlled {
  constructor( scrollSpeed , pageLength , delay = 2000 ){
    this.scrollSpeed = scrollSpeed;
    this.canWheel = true;
    this.index = 1;
    this.pageLength = pageLength ;
    this.newPosition  = pageLength;
    TweenMax.set( window ,{scrollTo: 0});
    this.newPosition = null;
    this.delay = delay;
    this.view();
  }
  
  view(){
    document.querySelector('#app').addEventListener('wheel' , (e)=>{
      e.preventDefault();
      if( this.canWheel ){
        this.canWheel = false;
        setTimeout( () =>{ this.canWheel = true } , this.delay  );
        this.scroll( Math.sign(e.deltaY) );
      }else{
        return
      }
    });
   }
    
  
  scroll( direction ){
    
    if( ( ( this.index <= 1 ) && !direction ) ){ return };

    if ( direction > 0 ) {
      this.index++;
      this.newPosition += this.pageLength  ;
    }else{
      this.index--;
      this.newPosition -= this.pageLength ; 
    }

    TweenMax.to( window , this.scrollSpeed ,{ scrollTo : this.newPosition , ease: Power3.easeOut });
  }
  
}

// new scrollControlled( 1.2  , window.innerHeight )

export {  scrollControlled }