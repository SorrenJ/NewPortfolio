

const flightPath = {
    curviness:1,
    autoRotate: true,
    values: [
        {x: 100, y: -20},
        {x:300, y:10}, 
{x: 500, y:100}, {x:750, y:-100},
{x:350, y:-50},{x:600, y:100},{x:800, y:200},
{x:window.innerWidth, y:-120}
    ]
};

const flightPath1 = {
    curviness:1.25,
    autoRotate: true,
    values: [  {x: 5, y: -20},
        {x: 5, y: -20},
        {x:-10, y:10}, 
{x: -50, y:100}, {x:-150, y:-100, scale: 10},
{x:-35, y:-50},{x:14, y:100},{x:10, y:0},
{x:window.innerWidth, y:-250}
    ]
};
const tween  = new TimelineLite();

if ($(window).width() > 800){


tween.add(
    TweenLite.to('.blossom-anime',1, {
        bezier: flightPath,
        ease: Power1.easeInOut
    })

    
    );
    // console.log("desktop");             
  
const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
    triggerElement: ".animation",
    duration:3000,
    triggerHook:0
})
.setTween(tween)

// .addIndicators()
.setPin('.animation')//forces animation to finish
.addTo(controller);

}    