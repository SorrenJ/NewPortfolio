

 if ($(window).width() > 800){
    var tween_tree = new TimelineMax()
    .from(".animation_tree", 1, { scaleY: 0.25, scaleX: 1, opacity: 1})
    .to(".animation_tree", 1, {scaleY: 2,  scaleX: 1, opacity: 1})
    .to(".animation_tree", 1, {scaleY: 3, scaleX: 1,  opacity: 1});
    
    
 const controller_tree = new ScrollMagic.Controller();

const scene_tree= new ScrollMagic.Scene({
    triggerElement: ".tree_start",
    duration:3000,
    triggerHook:0
})


.setTween(tween_tree)
// .addIndicators()
.setPin('.tree_start')//forces animation to finish
.addTo(controller_tree);
 }
