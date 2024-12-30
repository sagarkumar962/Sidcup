var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");
var h4all = document.querySelectorAll("#nav h4")
document.addEventListener("mousemove",function(dets){
    crsr.style.left=dets.x+30+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-150+"px"
    blur.style.top=dets.y-150+"px"
    
})


h4all.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    crsr.style.scale=3;
    crsr.style.border="1px solid #fff";
    crsr.style.backgroundColor="transparent";
  })

  elem.addEventListener("mouseleave",function(){
    crsr.style.scale=1;
    crsr.style.border="0px solid #95c11E";
    crsr.style.backgroundColor="#95c11e";
  })
})


gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  
  gsap.to("#main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });



gsap.from("#about-us img,#about-us-in",{
  y:50,
  opacity:0,
  duration:1,
  stagger:0.5,
  scrollTrigger:{
    trigger:"#about-us",
    scroller:"body",
    start:"top 50%",
    end:"top 50%",
    scrub:3,
  }})


  gsap.from(".card",{
    scale:0.5,
    opacity:0,
    duration:1,
    stagger:0.5,
    scrollTrigger:{
      trigger:"#about-us",
      scroller:"body",
      start:"top 60%",
      end:"top 50%",
      scrub:3,
    }})

  gsap.from("#colon1" ,{
    y:-70,
    x:-70,
    scrollTrigger:{
      trigger:"#colon1",
      scroller:"body",
      start:"top 55%",
      end:"top 47%",
      scrub:3,
    }})

    gsap.from("#colon2" ,{
      y:70,
      x:70,
      scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        start:"top 55%",
        end:"top 47%",
        scrub:3,
      }})

gsap.from("#page4 h1",{
  y:60,
  // x:70,
  scrollTrigger:{
    trigger:"#page4 h1",
        scroller:"body",
        start:"top 75%",
        end:"top 150%",
        scrub:3,
  }
})