tl = gsap.timeline();

tl.from(".mynavbar, .myherosec ", {
    y: '20',
    opacity: 0,
    duration: 1.5,
    ease: Expo.easeInOut,
})
.from(".mylogoimg", {
    y: '20',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
})
.from(".gsaponlinks", {
    y: '20',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    stagger: 0.2
})
.from(".herosecimg", {
    opacity: 0,
    duration: 1,
    scale: 0.5,
    stagger: 0.2,
})
.from(".herosec", {
    y: '20',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    stagger: 0.2,
    delay: '-1'
})

gsap.from(".mycards", {
    y: '20',
    opacity: 0,
    duration: 1,
    ease: Expo.easeInOut,
    scrollTrigger: {
        trigger: ".mycards",
        start: "50%",
        markers: true
    }
})