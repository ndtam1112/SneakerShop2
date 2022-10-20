window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-text",
        start: "center center",
        end: "bottom top",
        markers: true,
        scrub: true,
        pin: true
        }
})

.from(".text-1", { opacity: 0})
.from(".text-2", { opacity: 0})
.from(".img-1", { 
    y : innerHeight * 1,
    rotate: 360,
    opacity: 0
})




