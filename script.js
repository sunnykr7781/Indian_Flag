var t = gsap.timeline();

t.from("#main #lower3,#main #lower2,#main #lower ", {
  y: 200,
  duration: 1,
  delay: 0.8,
  stagger: 0.15,
  opacity: 0,
});
t.from("#stand ", {
  y: -200,
  duration: 0.7,
  opacity: 0,
});
t.from("#orange , #white, #green", {
  x: 200,
  duration: 0.8,
  opacity: 0,
  stagger: 0.15,
});

t.from(" #circle , .line", {
  x: 200,
  duration: 1.1,

  stagger: 0.1,
  opacity: 0,
});

t.from("  #a , #d , #b , #c  ", {
  duration: 1.8,
  delay: 1,
  opacity: 0,
  stagger: 0.2,
  repeat: -1,
  yoyo: true,
});
