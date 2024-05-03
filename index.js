const bgVideo = document.getElementById('bg-video');
const muteButton = document.getElementById('mute-button');

muteButton.addEventListener('click', () => {
    if (bgVideo.muted) {
        bgVideo.muted = false; // Unmute the background video
        muteButton.textContent = 'Mute Background';
    } else {
        bgVideo.muted = true; // Mute the background video
        muteButton.textContent = 'Unmute Background';
    }
});


gsap.to('.text', {
    x:150,
    duration: 2,
    opacity:1,
    
})

gsap.to('#text-p', {
    x:-550,
    duration:2,
    delay:1,
    opacity:1,
    Eases: "power1"
})

// gsap.to('.heads',{
//     y:100,
//     duration:2,
//     delay:2,
//     opacity:1
// })

// gsap.to('.para',{
//     y:100,
//     duration:2,
//     delay:2,
//     opacity:1
// })

gsap.to(".Aboutus .heads",{
    y: -140,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".Aboutus .t1",
        scroller:"body",
        markers:false,
        start:"top 100%"
    }
 })


 gsap.to(".screen-2 .heads",{
    y: -50,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".screen-2 .heads",
        scroller:"body",
        markers:false,
        start:"top 70%"
    }
 })

 gsap.to(".screen-2 .para",{
    y: -150,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".screen-2 .para",
        scroller:"body",
        markers:false,
        start:"top 70%"
    }
 })
 gsap.to(".Aboutus .t1",{
    y: -150,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".Aboutus .t1",
        scroller:"body",
        markers:false,
        start:"top 90%"
    }
 })

 gsap.to(".Aboutus .t2",{
    y: -150,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".Aboutus .t2",
        scroller:"body",
        markers:false,
        start:"top 95%"
    }
 })
 
 gsap.to(".Aboutus .t3",{
    y: -150,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".Aboutus .t3",
        scroller:"body",
        markers:false,
        start:"top 100%"
    }
 })
 gsap.to(".Aboutus .t4",{
    y: -150,
    opacity:1,
    duration:1,
    scrollTrigger:{
        trigger:".Aboutus .t4",
        scroller:"body",
        markers:false,
        start:"top 100%"
    }
 })








// gsap.to(".screen-2 .containt",{
//     x: 300,
//     opacity:1,
//     duration: 2,
//     scrollTrigger:{
//         trigger:".screen-2 .containt",
//         scroller:"body",
//         markers:falsee,
//         start: "top 50%"


//     }
// })


document.addEventListener('DOMContentLoaded', () => { 

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext('2d')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

let mouse = {
    x: null,
    y: null,
    radius: (canvas.height/80) * (canvas.width/80)
}

window.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
});

class particle {
    constructor(x, y, directionX, directionY, size , color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x,this.y,this.size,0,Math.PI*2, false);
        ctx.fillStyle = "08C5523"
        ctx.fill();
    }
    
 update() {
    if(this.x > canvas.width || this.x < 0) {
        this.directionX = -this.directionX;
    }
    if(this.Y > canvas.height || this.Y < 0) {
        this.directionY = -this.directionY;
    }

    let dx = mouse.x - this.x;
    let dy = mouse.y - this.y;
    let distance = Math.sqrt(dx*dx + dy*dy);
    if(distance < mouse.radius + this.size){
        if(mouse.x < this.x && this.x > this.size * 10){
            this.x -=10;
        }
        if(mouse.y < this.y && this.y < canvas.height - this.size * 10){
            this.y += 10;
        }
        if(mouse.y > this.y && this.y > this.size * 10) {
            this.y -= 10;
        }
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw();
}
}




function init() {
    particlesArray = [];
    let numberOfParticles = (canvas.height * canvas.width) / 9000;
    for(let i = 0; i < numberOfParticles; i++){
        let size = (Math.random() * 5) +1;
        let x = (Math.random() * ((innerWidth - size * 2 ) - (size *2)) + size * 2);
        let y = (Math.random() * ((innerHeight - size * 2 ) - (size *2)) + size * 2);
        let directionX = (Math.random() * 5 ) - 2.5;
        let directionY = (Math.random() * 5 ) - 2.5;
        let color = '8C5523';
        
        particlesArray.push(new particle(x,y,directionX,directionY,size,color));

    }
}

function animate() {
   requestAnimationFrame(animate);
   ctx.clearRect(0,0,innerWidth, innerHeight);

   for(let i = 0; i < particlesArray.length; i++){
    particlesArray[i].update();
   }
   connect();
}

 function  connect() {
  for( let a = 0; a < particlesArray.length; a++){
    for(let b = a ; b < particlesArray.length; b++) {
        let distance = ((particlesArray[a].x - particlesArray[b].x) * (particlesArray[a].x - particlesArray[b].x))
        + ((particlesArray[a].y - particlesArray[b].y) * (particlesArray[a].y - particlesArray[b].y));
       if(distance < (canvas.width/7) * (canvas.height/7)) {
        ctx.strokeStyle = 'rgb(140,85,31,1)';
        ctx.beginPath();
        ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
        ctx.moveTo(particlesArray[b].x, particlesArray[b].y);
        ctx.stroke();

       }
    }
  }
 }
init();
animate();

});