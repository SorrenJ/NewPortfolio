var tween1 = new TimelineMax()
.from(".animation1", 1.5, {rotationY: 180, scale: 0.7, opacity: 0})
.to(".animation1", 1.5, {rotationY: 180, scale: 0.7, opacity: 0, delay: 7});


const controller1 = new ScrollMagic.Controller();

const scene1= new ScrollMagic.Scene({
    triggerElement: ".animation1",
    duration:3000,
    triggerHook:0
})
.setTween(tween1)
.addIndicators()
.setPin('.animation1')//forces animation to finish
.addTo(controller1);