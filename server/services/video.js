
// class   imgPlayPause {
//   constructor(){
//     this.element = document.createElement('img'),
//     this.img = require('../assets/téléchargement.jpeg')
//     this.render();
//     this.addStyle();
//   }
//   render(){
//     this.element.src = this.img;
//   }


//   addStyle(){
//     TweenMax.to( this.element , 0 , { position : "absolute", 
//     top : '0px', bottom : '0px' , left : '0px' , right : '0px' , margin : 'auto', 
//   });
//   }

// }


// class playPause {

//   constructor( audioPlayer , video ){
//     this.controleBaree = audioPlayer;
//     this.video = video ;
//     this.element = audioPlayer.element.querySelector('.playPause');
//     this.view();
//   }

//   view(){
//     this.element.addEventListener('click', ()=>{
//      this.video.render();
//      this.render();
//     })
//   }

//   render(){
//     let inner;
//     if ( this.video.onPlay  ) {
//       inner = 'Pause'
//     }else{
//       inner = 'Play'
//     } 
//     this.element.innerHTML = inner;
//   }

// }



// class audioPlayer {

//   constructor( parent , onPlay , video ){
//     this.parent = parent;
//     this.element = document.createElement('section');
//     this.element.classList.add('svg__container')
//     this.svg = this.getSvg();
//     this.videoOnPlay = onPlay  ;
//     this.video = video ; 


//     this.render();
//     this.timeSpent = this.element.querySelector('.timeSpent');
//     this.renderTime();
//     this.buttonPlayPause = new playPause(  this , video  );
//     this.view();
//   }



//   getSvg(){
//     return `<svg width="523" height="43" viewBox="0 0 523 43" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <rect x="1" y="1" width="521" height="41" rx="4" stroke="white" stroke-width="2"/>
//     <rect x="92" y="19" width="374" height="2" fill="white"/>
//     <path d="M487.059 20.3613C487.059 21.6309 486.842 22.5742 486.408 23.1914C485.975 23.8086 485.297 24.1172 484.375 24.1172C483.465 24.1172 482.791 23.8164 482.354 23.2148C481.916 22.6094 481.689 21.707 481.674 20.5078V19.0605C481.674 17.8066 481.891 16.875 482.324 16.2656C482.758 15.6562 483.438 15.3516 484.363 15.3516C485.281 15.3516 485.957 15.6465 486.391 16.2363C486.824 16.8223 487.047 17.7285 487.059 18.9551V20.3613ZM485.975 18.8789C485.975 17.9609 485.846 17.293 485.588 16.875C485.33 16.4531 484.922 16.2422 484.363 16.2422C483.809 16.2422 483.404 16.4512 483.15 16.8691C482.896 17.2871 482.766 17.9297 482.758 18.7969V20.5312C482.758 21.4531 482.891 22.1348 483.156 22.5762C483.426 23.0137 483.832 23.2324 484.375 23.2324C484.91 23.2324 485.307 23.0254 485.564 22.6113C485.826 22.1973 485.963 21.5449 485.975 20.6543V18.8789ZM488.523 23.4316C488.523 23.2441 488.578 23.0879 488.688 22.9629C488.801 22.8379 488.969 22.7754 489.191 22.7754C489.414 22.7754 489.582 22.8379 489.695 22.9629C489.812 23.0879 489.871 23.2441 489.871 23.4316C489.871 23.6113 489.812 23.7617 489.695 23.8828C489.582 24.0039 489.414 24.0645 489.191 24.0645C488.969 24.0645 488.801 24.0039 488.688 23.8828C488.578 23.7617 488.523 23.6113 488.523 23.4316ZM488.529 18.2578C488.529 18.0703 488.584 17.9141 488.693 17.7891C488.807 17.6641 488.975 17.6016 489.197 17.6016C489.42 17.6016 489.588 17.6641 489.701 17.7891C489.818 17.9141 489.877 18.0703 489.877 18.2578C489.877 18.4375 489.818 18.5879 489.701 18.709C489.588 18.8301 489.42 18.8906 489.197 18.8906C488.975 18.8906 488.807 18.8301 488.693 18.709C488.584 18.5879 488.529 18.4375 488.529 18.2578ZM495.93 21.1348H497.113V22.0195H495.93V24H494.84V22.0195H490.955V21.3809L494.775 15.4688H495.93V21.1348ZM492.186 21.1348H494.84V16.9512L494.711 17.1855L492.186 21.1348ZM503.441 20.3613C503.441 21.6309 503.225 22.5742 502.791 23.1914C502.357 23.8086 501.68 24.1172 500.758 24.1172C499.848 24.1172 499.174 23.8164 498.736 23.2148C498.299 22.6094 498.072 21.707 498.057 20.5078V19.0605C498.057 17.8066 498.273 16.875 498.707 16.2656C499.141 15.6562 499.82 15.3516 500.746 15.3516C501.664 15.3516 502.34 15.6465 502.773 16.2363C503.207 16.8223 503.43 17.7285 503.441 18.9551V20.3613ZM502.357 18.8789C502.357 17.9609 502.229 17.293 501.971 16.875C501.713 16.4531 501.305 16.2422 500.746 16.2422C500.191 16.2422 499.787 16.4512 499.533 16.8691C499.279 17.2871 499.148 17.9297 499.141 18.7969V20.5312C499.141 21.4531 499.273 22.1348 499.539 22.5762C499.809 23.0137 500.215 23.2324 500.758 23.2324C501.293 23.2324 501.689 23.0254 501.947 22.6113C502.209 22.1973 502.346 21.5449 502.357 20.6543V18.8789Z" fill="white"/>
//     <text class="timeSpent" x="45" y="27" font-size="16px" fill="white">0:00</text>
//     <class="play" d="M19 31.2285V11.9786C19 10.3345 20.8736 9.39268 22.1931 10.3735L35.7393 20.4427C36.8445 21.2642 36.8082 22.9308 35.6682 23.7034L22.1221 32.8841C20.794 33.7841 19 32.8328 19 31.2285Z" stroke="white" stroke-width="2"/>
//     <text class="playPause" x="10" y="25" font-size="12px" fill="white">Play</text>
//     </svg>
//     `
//   }

//   view(){
//     this.element.addEventListener('mouseover', ()=>{
//       this.renderOver( true );
//     })
//   }

//   renderOver( over ){
//     if ( over ) {
//       TweenMax.to( this.element.querySelector('svg') , 1 , {  opacity : '1' });
//     }else{
//       TweenMax.to( this.element.querySelector('svg') , 1 , {  opacity : '0' });
//     }
//   }

//   render(){
//     this.element.innerHTML = this.svg;
//     this.parent.appendChild( this.element );
//     TweenMax.to( this.element.querySelector('svg') , 5 , { position: 'absolute' ,  bottom: '23px' ,  left: '0px' , right: '0px' , margin: 'auto' , opacity : '0' });
//   }

//   renderTime(){
//     setInterval( () =>{
//       if ( this.onPlay ) {
//         let currentTime = Math.floor( this.video.element.currentTime )  ;
//         let number = 1 ;
//         while( currentTime > number * 60  ) {
//           number++;
//         }
//         if ( currentTime > 60  ) { 
//           currentTime = Math.floor(  currentTime /  ( 60 * number )  * 100  ) / 100  ; 
//           currentTime = currentTime.toString()  ;
//           currentTime = currentTime.replace(".", ":");
//           console.log( currentTime.length )
//           if (currentTime.length === 3 ) {
//             currentTime += 0 ;
//           }
//         }else{
//           currentTime = `0:${currentTime}` 
//         }
//          this.timeSpent.innerHTML = currentTime ;
//       }
//     }, 1);
//   }

// }








// class Video {

//   constructor( element , parentVideo  ){
//     this.parentVideo = parentVideo;
//     this.element = element;
//     this.height = element.clientHeight;
//     this.width = element.clientWidth ;
//     this.onPlay = false;
    
//     this.imgPlayPause = new imgPlayPause();
//     this.audioPlayer = new audioPlayer( parentVideo , this.onPlay , this );
//     this.addStyle()
//     this.view();
//     this.element.currentTime = 59;
//     console.log(element.volume = 0.1 )
//     console.log({element})
    
//   }
  
//   view(){
//     this.element.addEventListener('click', ()=>{
//       this.render();
//       this.audioPlayer.buttonPlayPause.render()
//     }) 

//     this.element.addEventListener('mouseenter', ()=>{
//       this.audioPlayer.renderOver(true);
//     })

//     this.element.addEventListener('mouseleave', ()=>{
//       this.audioPlayer.renderOver(false);
//     })
//   }

//   render(){
//     if ( this.onPlay ) {
//       this.element.pause();
//       this.parentVideo.prepend(this.imgPlayPause.element);
//       TweenMax.to( this.imgPlayPause.element , 2, { opacity : '1' });
//     }else{
//       this.element.play()
//       TweenMax.to( this.imgPlayPause.element , 2, { opacity : '0' });
//     }
//     this.onPlay = this.onPlay ?  false : true ;
//     this.audioPlayer.onPlay = this.onPlay;
//   }


//   addStyle(){
//     TweenMax.to( this.element , 0 , {  borderRadius: '5%' });
//     TweenMax.to( this.parentVideo , 2, { width : `${this.width}`, height : `${this.height}`, position : 'relative' });
//   }

// }



// class Videos {
  
//   constructor(){
//     this.parentsVideo = document.querySelectorAll('.parentVideo')
//     this.videos = document.querySelectorAll('video');
//     this.view();
//   }
  
//   view(){
//     this.videos.forEach( ( video , i ) => {
//       new Video(video ,  this.parentsVideo[i] )
//     });
//   }
// }new Videos();