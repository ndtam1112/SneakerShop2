window.addEventListener('scroll', function () {
    const header = document.querySelector('header')
    header.classList.toggle("sticky", window.scrollY > 0)
})

gsap.timeline({
    scrollTrigger: {
        trigger: ".intro-text",
        start: "center center",
        end: "bottom top",
        markers: false,
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

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".st-about",
//         start: "center bottom",
//         end: "center 80%",
//         markers: true,
//         scrub: true,
//         pin: true
//         }
// })
// .from(".h2-about", {y : innerHeight * 1})

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".h2-about",
//         start: "center bottom",
//         end: "top top",
//         markers: true,
//         scrub: true,
//         pin: true
//         }
// })
// .from(".item-product-1", {x : innerWidth * 1})

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".item-product-1",
//         start: "center bottom",
//         end: "top top",
//         markers: true,
//         scrub: true,
//         pin: true
//         }
// })
// .from(".item-product-2", {x : innerWidth * -1})

// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".item-product-2",
//         start: "center bottom",
//         end: "top top",
//         markers: true,
//         scrub: true,
//         pin: true
//         }
// })
// .from(".item-product-3", {x : innerWidth * 1})



