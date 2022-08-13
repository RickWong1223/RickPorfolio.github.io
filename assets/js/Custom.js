gsap.registerPlugin(ScrollTrigger);

let FVtl = gsap.timeline({
    scrollTrigger: {
        trigger: '.FV',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
    }
});
FVtl.from(".middleContain p",{
   yPercent:20,
   opacity:0,
   stagger:0.5,
   rotateX:"-1rad",
   scale:1.05
})

let FvScroll = gsap.timeline({
    scrollTrigger: {
        trigger: '.header img',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
        // markers: true,
        scrub:1,
    }
});
FvScroll.from(".middleContain", {duration: 1,yPercent:25},0)
FvScroll.from(".Nav", {duration: 1,yPercent:60},0)

let title1Scroll = gsap.timeline({
    scrollTrigger: {
        trigger: '#GDtitle',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
        // markers: true,
        scrub:1,
    }
});

let title2Scroll = gsap.timeline({
    scrollTrigger: {
        trigger: '#Amtitle',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
        // markers: true,
        scrub:1,
    }
});

let title3Scroll = gsap.timeline({
    scrollTrigger: {
        trigger: '#VDtitle',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
        // markers: true,
        scrub:1,
    }
});

let title4Scroll = gsap.timeline({
    scrollTrigger: {
        trigger: '#LGtitle',
        start: "top bottom", // position of trigger meets the scroller position
        end: "bottom top",
        // markers: true,
        scrub:1,
    }
});
title1Scroll.from("#GDtitle", {duration: 0.5,yPercent:25,opacity:0},0)
title2Scroll.from("#Amtitle", {duration: 0.5,yPercent:25,opacity:0},0)
title3Scroll.from("#VDtitle", {duration: 0.5,yPercent:25,opacity:0},0)
title3Scroll.from("#LGtitle", {duration: 0.5,yPercent:25,opacity:0},0)
gsap.from('#text',{
    scrollTrigger:{
    trigger:'#text',
    toggleActions:"restart pause reverse pause"
    },
    duration:0.5,
    opacity:0,
    yPercent:20,
})

$( '.js-input' ).keyup(function() {
    if( $(this).val() ) {
       $(this).addClass('not-empty');
    } else {
       $(this).removeClass('not-empty');
    }
  });