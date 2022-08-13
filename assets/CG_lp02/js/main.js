document.addEventListener('DOMContentLoaded', () => {
    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    .to('.daynightBG', 2, {y:'8%', ease:Power0.easeNone})
    .from('.content-wrapper', 1, {autoAlpha:0,ease:Power0.easeNone},0.5);
    
    let scene = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax',
        duration: '100%',
        triggerHook: 1
    })
    .setTween(timeline)
    .addTo(controller);

    let timeline2 = new TimelineMax();
    timeline2
    .to('.AnimalBG', 2, {y:'18%', ease:Power0.easeNone})
    .from('.content-wrapper2', 1, {autoAlpha:0,ease:Power0.easeNone},0.5);
    
    let scene2 = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax2',
        duration: '100%',
        triggerHook: 1
    })
    .setTween(timeline2)
    .addTo(controller);

    
    let timeline3 = new TimelineMax();
    timeline3
    .to('.Point3BG', 3, {y:'20%', ease:Power0.easeNone})
    .from('.content-wrapper3', 1, {autoAlpha:0,ease:Power0.easeNone},1);
    
    let scene3 = new ScrollMagic.Scene({
        triggerElement: '.bcg-parallax3',
        duration: '100%',
        triggerHook: 1
    })
    .setTween(timeline3)
    .addTo(controller);


})