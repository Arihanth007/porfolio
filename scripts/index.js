const tl = gsap.timeline({defaults: {ease: "power1.out"}})


tl.fromTo('.dashboard', {opacity: 0}, {opacity: 1, duration: 2.5});
tl.fromTo('.contact', {opacity: 0}, {opacity: 1, duration: 2.5}, '-=2.5');
tl.fromTo('.glass', {y:'100%'}, {y:'0%', duration:0.5}, '-=2.5');
tl.fromTo('.circle1', {x:'1000%'}, {x:'0%', duration:1.5}, '-=2.5');
tl.fromTo('.circle2', {x:'-1000%'}, {x:'0%', duration:1.5}, '-=1.5');