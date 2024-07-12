var tl = gsap.timeline()

tl.from("#nav h1,#nav h2,#nav img",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
    stagger:0.5
})
tl.from("#main h3,#main h4",{
    x:-200,
    opacity:0,
})
tl.from("#main p",{
    x:200,
    opacity:0
})
tl.from("#main #img1",{
    x:-200,
    opacity:0
})
tl.from("#main #img2",{
    x:200,
    opacity:0
})
tl.from("#main i",{
    x:200,
    opacity:0,
    
})