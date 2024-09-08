var crsr = document.querySelector(".cursor");


let currentVideoSource = "";

function setCursorVideo(videoUrl) {
  var video = document.querySelector(".cursor-video")
  var source = document.querySelector("#videoSource")

  if (source.src !== videoUrl && videoUrl !== "") {
    source.src = videoUrl
    video.load()
    video.play()
  }
}



function cursor(q, s, c, bw, bc, bg, br, v, type) {
  var object = typeof q === "string" ? document.querySelector(q): q;

  var video = document.querySelector(".cursor-video");

  object.addEventListener("mousemove", () => {
    if (type === "video") {
      if (v !== currentVideoSource) {
        setCursorVideo(v);
        currentVideoSource = v;
      }
      video.style.opacity = 1;
    }

    gsap.to(crsr, {
      scale: s !== "none" ? s: 1,
      backgroundColor: c !== "none" ? c: "#000",
      backgroundImage: bg ? `url(${bg})`: "none",
      borderWidth: bw !== "none" ? bw + "vw": "0vw",
      borderColor: bc !== "none" ? bc: "transparent",
      borderRadius: br+"%"
    });
  });

  object.addEventListener("mouseleave",
    () => {
      if (type === "video") {
        video.style.opacity = 0;
        currentVideoSource = "";
      }
      gsap.to(crsr,
        {
          scale: 1,
          backgroundColor: "#000",
          backgroundImage: "none",
          borderWidth: "0vw",
          borderColor: "transparent",
          borderRadius: "50%"

        });
    });
}








window.addEventListener("mousemove", (dets) => {
  gsap.to(crsr,
    {
      x: dets.clientX - 10,
      y: dets.clientY - 10,
    });
});

cursor(".home_hire_btn", 3, "white", "none", "none", "none", 50, "none", "none")
cursor(".main .page1 .arrow", 2, "transparent", .1, "white", "none", "none", "none")


cursor(".page1 h2", 6, "transparent", "none", "none", "none", 50, "./images/fps.mp4", "video")



var hire_btn = document.querySelector("#hire_btn")

cursor(hire_btn, 5, "rgba(255,255,255,0.065)", "none", "none", "none", "none", "none", "")


hire_btn.addEventListener("mouseenter", () => {
  gsap.to(hire_btn, {
    scale: 1.1,
    boxShadow: "1vw 1vw 0vw #FFE6C7"
  })
})
hire_btn.addEventListener("mouseleave", () => {
  gsap.to(hire_btn, {
    scale: 1,
    boxShadow: "none"
  })
})


var card_elems = document.querySelectorAll(".card", 50)

card_elems.forEach(function(card) {
  var bg_vid = card.getAttribute("data-video")
  cursor(card,
    7,
    "transparent",
    0,
    "none",
    "none",
    50,
    bg_vid,
    "video")
})





var member_elems = document.querySelectorAll(".member")

member_elems.forEach(function(member) {
  var bg_img = member.getAttribute("data-img")
  cursor(member,
    9,
    "transparent",
    0,
    "none",
    bg_img,
    5,
    "none",
    "none")
})




var menu_btn = document.querySelector("#menu_btn");
var menu_btn_div = document.querySelector(".menu_btn_div");


menu_btn_div.addEventListener("mousemove", (e) => {
  gsap.to(menu_btn,
    {
      color: "#fff",
      duration: 0.2,
      ease: "power2.out"
    });

  gsap.to(crsr,
    {
      scale: 2,
      duration: 0.2,
      ease: "power2.out"
    });

  let x = e.offsetX;
  let y = e.offsetY;
  let menuwidth = menu_btn_div.clientWidth;
  let menuheight = menu_btn_div.clientHeight;

  let movex = (x - menuwidth);
  let movey = (y - menuheight / 2) / 10;

  gsap.to(menu_btn_div,
    {
      x: movex,
      y: movey,
      duration: 0.3,
      ease: "power2.out"
    });
});

menu_btn_div.addEventListener("mouseout", (e) => {
  gsap.to(menu_btn_div,
    {
      x: 0,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    });

  gsap.to(menu_btn,
    {
      color: "#000",
      duration: 0.2,
      ease: "power2.out"
    });

  gsap.to(crsr,
    {
      scale: 1,
      duration: 0.2,
      ease: "power2.out"
    });
});





gsap.to(".nav", {
  backgroundColor: "#ffffff00",
  duration: 0.5,
  height: "4.5vh",
  scrollTrigger: {
    trigger: ".nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 3
  }
})

gsap.to(".main", {
  backgroundColor: "#000",
  duration: 0.1,
  scrollTrigger: {
    trigger: ".main",
    scroller: "body",
    start: "top -20%",
    end: "top -100%",
    scrub: 1
  }
})

/*
gsap.to(".page1 h2, .page1 p", {
  x: -100,
  y: -20,
  scrollTrigger: {
    trigger: ".page1 h2, .page1 p",
    scroller: "body",
    start: "top 10%",
    end: "top 0%",
    scrub: 2
  }
}, "text-anim")


gsap.to(".page1 h3", {
  x: 100,
  y: -20,
  scrollTrigger: {
    trigger: ".page1 h3",
    scroller: "body",
    start: "top 10%",
    end: "top 0%",
    scrub: 2
  }
}, "text-anim")
*/

gsap.to(".page1 button", {
  opacity: 0.1,
  scrollTrigger: {
    trigger: ".page1 button",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 0.2
  }
})



gsap.to(".page2", {
  backgroundColor: "rgb(27,27,27)",
  scrollTrigger: {
    trigger: ".page2",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 4
  }
})



/*
gsap.to(".page2 .info h3", {
  scale: 0.8,
  scrollTrigger: {
    trigger: ".page2 .info h3",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 2
  }
})

gsap.to(".page2 .info #l-quote", {
  scale: 1,
  x: 60,
  y: 20,
  scrollTrigger: {
    trigger: ".page2 .info #l-quote",
    scroller: "body",
    start: "top 70%",
    end: "top 40%",
    scrub: 2
  }
})
gsap.to(".page2 .info #r-quote", {
  scale: 1,
  x: -65,
  y: -35,
  scrollTrigger: {
    trigger: ".page2 .info #r-quote",
    scroller: "body",
    start: "top 100%",
    end: "top 70%",
    scrub: 2
  }
})
*/

gsap.to(".page3", {
  backgroundColor: "#fff",
  scrollTrigger: {
    trigger: ".page3",
    scroller: "body",
    start: "top 80%",
    end: "top 40%",
    scrub: 3
  }
})


gsap.to(".page3 .info h2", {
  x: -150,
  duration: 0.2,
  scrollTrigger: {
    trigger: ".page3 .info h2",
    scroller: "body",
    start: "top 50%",
    end: "top 0%",
    scrub: 1
  }
})

gsap.to(".services_div .fps-video", {
  width: "clamp(40vw, 50%, 40%)",
  left: "3%",
  top: "3%",
  borderRadius: "1vh",
  duration: 1,
  scrollTrigger: {
    trigger: ".services_div .fps-video",
    scroller: "body",
    start: "top 30%",
    end: "top 5%",
    scrub: 1
  }
})
/*gsap.to(".services_div .survival-video", {
  width: "clamp(40vw, 50%, 40%)",
  height: "clamp(30vw, 25%, 50%)",
  right: "3%",
  top: "30%",
  borderRadius: "1vh",
  duration: 1,
  scrollTrigger: {
    trigger: ".services_div .survival-video",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 1
  }
})*/



gsap.from(".services_div .projects-about", {
  x: "60%",
  y: "50%",
  right: "3%",
  top: "4%",
  duration: 1,
  scrollTrigger: {
    trigger: ".services_div .projects-about",
    scroller: "body",
    start: "top 50%",
    end: "top 20%",
    scrub: 1
  }
})


/*gsap.from(".page4", {
  scale: 1.1,
  scrollTrigger: {
    trigger: ".page4",
    scroller: "body",
    start: "top 100%",
    end: "top 60%",
    scrub: 3
  }
})*/

gsap.from(".page4 .elem", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".page4 .elem",
    scroller: "body",
    start: "top 100%",
    end: "top 20%",
    scrub: 2
  }
})
/*gsap.from(".page4 .elem2 h2", {
  y: -50,
  scrollTrigger: {
    trigger: ".page4 .elem2 h2",
    scroller: "body",
    start: "top 120%",
    end: "top 100%",
    scrub: 1,
  }
})

gsap.from(".page4 .elem3 h2", {
  y: 50,
  scrollTrigger: {
    trigger: ".page4 .elem3 h2",
    scroller: "body",
    start: "top 120%",
    end: "top 100%",
    scrub: 1,
  }
})
gsap.from(".page4 .elem4 h2", {
  y: -50,
  scrollTrigger: {
    trigger: ".page4 .elem4 h2",
    scroller: "body",
    start: "top 120%",
    end: "top 100%",
    scrub: 1,
  }
})*/

gsap.from(".page5 h2", {
  x: -100,
  scrollTrigger: {
    trigger: ".page5 h2",
    scroller: "body",
    start: "top 90%",
    end: "top 30%",
    scrub: 3
  }
})

gsap.from(".member", {
  scale: 0.5,
  scrollTrigger: {
    trigger: ".member",
    scroller: "body",
    start: "top 80%",
    end: "top 30%",
    scrub: 3
  }
})


/* partners profile part */

/*
var member_elems = document.querySelectorAll(".member")

member_elems.forEach(function(member) {
  var profile_elem = member.querySelector(".profile-card")
  var profile_img = member.querySelector(".member img")
  member.addEventListener("mouseenter", function() {
    member.style.backgroundColor = "rgb(66,66,66)"
    var title = member.getAttribute("data-title")
    var desc = member.getAttribute("data-desc")
    var img = member.getAttribute("data-img")

    var title_text = profile_elem.querySelector("#title")

    var desc_text = profile_elem.querySelector("#desc")

    profile_elem.style.display = "flex"
    profile_elem.style.backgroundImage = `url(${img})`
    profile_img.style.display = "none"
    title_text.innerText = title
  })
  member.addEventListener("mouseleave", function() {
    member.style.backgroundColor = "transparent"

    profile_elem.style.display = "none"
    profile_img.style.display = "flex"
  })
})
*/




/* for page 4 elements */
var elems = document.querySelectorAll(".elem")
var page4 = document.querySelector(".page4")
elems.forEach(function(ele) {
  var moving = ele.querySelector(".elem-moving")
  var text = ele.querySelector("h2")
  ele.addEventListener("mouseenter",
    function() {
      var bgimg = ele.getAttribute("data-img")
      page4.style.backgroundImage = `url(${bgimg})`
      text.style.fontStyle = "italic"
      moving.style.opacity = 1
      text.style.fontSize = "8vw"
      text.style.color = "transparent"

      text.style.webkitTextStroke = "0.3vw white"
      /*text.style.boxShadow = "5px 5px 20px black"*/
    })
  ele.addEventListener("mouseleave",
    function() {
      var bgimg = "./images/team-bg.jpg"
      page4.style.backgroundImage = `url(${bgimg})`
      moving.style.opacity = 0
      text.style.fontSize = "7vw"
      text.style.color = "white"
      text.style.fontStyle = ""
      text.style.webkitTextStroke = "0vw white"
      /*text.style.boxShadow = "none"*/
    })
})


/* main div black again */

gsap.to(".page6", {
  backgroundColor: "#000",
  scrollTrigger: {
    trigger: ".page6",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    scrub: 3
  }
})




gsap.to(".page7", {
  backgroundColor: "#2a2a2a",
  duration: .2,
  scrollTrigger: {
    trigger: ".page7",
    scroller: "body",
    start: "top 60%",
    end: "top 30%",
    scrub: 3
  }
})

gsap.from(".page7 .heading_div h3", {
  y: -300,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page7 .heading_div h3",
    scroller: "body",
    start: "top 40%",
    end: "top 5%",
    scrub: 5
  }
})
gsap.from(".page7 .heading_div h2", {
  y: -100,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page7 .heading_div h2",
    scroller: "body",
    start: "top 50%",
    end: "top 10%",
    scrub: 3
  }
})


gsap.from(".page7 .info_div .linfo p", {
  y: 200,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page7 .info_div .linfo p",
    scroller: "body",
    start: "top 80%",
    end: "top 50%",
    scrub: 5
  }
})

gsap.from(".page7 .info_div .rinfo button", {
  y: 130,
  opacity: 0,
  scrollTrigger: {
    trigger: ".page7 .info_div .rinfo button",
    scroller: "body",
    start: "top 100%",
    end: "top 80%",
    scrub: 3
  }
})

var VanillaTilt = (function () {
  'use strict';

  /**
  * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
  * Original idea: https://github.com/gijsroge/tilt.js
  * MIT License.
  * Version 1.8.1
  */

  class VanillaTilt {
    constructor(element,
      settings = {}) {
      if (!(element instanceof Node)) {
        throw ("Can't initialize VanillaTilt because " + element + " is not a Node.");
      }

      this.width = null;
      this.height = null;
      this.clientWidth = null;
      this.clientHeight = null;
      this.left = null;
      this.top = null;

      // for Gyroscope sampling
      this.gammazero = null;
      this.betazero = null;
      this.lastgammazero = null;
      this.lastbetazero = null;

      this.transitionTimeout = null;
      this.updateCall = null;
      this.event = null;

      this.updateBind = this.update.bind(this);
      this.resetBind = this.reset.bind(this);

      this.element = element;
      this.settings = this.extendSettings(settings);

      this.reverse = this.settings.reverse ? -1: 1;
      this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
      this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
      this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
      this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
      this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
      this.gyroscopeSamples = this.settings.gyroscopeSamples;

      this.elementListener = this.getElementListener();

      if (this.glare) {
        this.prepareGlare();
      }

      if (this.fullPageListening) {
        this.updateClientSize();
      }

      this.addEventListeners();
      this.reset();

      if (this.resetToStart === false) {
        this.settings.startX = 0;
        this.settings.startY = 0;
      }
    }

    static isSettingTrue(setting) {
      return setting === "" || setting === true || setting === 1;
    }

    /**
    * Method returns element what will be listen mouse events
    * @return {Node}
    */
    getElementListener() {
      if (this.fullPageListening) {
        return window.document;
      }

      if (typeof this.settings["mouse-event-element"] === "string") {
        const mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);

        if (mouseEventElement) {
          return mouseEventElement;
        }
      }

      if (this.settings["mouse-event-element"] instanceof Node) {
        return this.settings["mouse-event-element"];
      }

      return this.element;
    }

    /**
    * Method set listen methods for this.elementListener
    * @return {Node}
    */
    addEventListeners() {
      this.onMouseEnterBind = this.onMouseEnter.bind(this);
      this.onMouseMoveBind = this.onMouseMove.bind(this);
      this.onMouseLeaveBind = this.onMouseLeave.bind(this);
      this.onWindowResizeBind = this.onWindowResize.bind(this);
      this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);

      this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
      this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
      this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);

      if (this.glare || this.fullPageListening) {
        window.addEventListener("resize", this.onWindowResizeBind);
      }

      if (this.gyroscope) {
        window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
      }
    }

    /**
    * Method remove event listeners from current this.elementListener
    */
    removeEventListeners() {
      this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
      this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
      this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);

      if (this.gyroscope) {
        window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
      }

      if (this.glare || this.fullPageListening) {
        window.removeEventListener("resize", this.onWindowResizeBind);
      }
    }

    destroy() {
      clearTimeout(this.transitionTimeout);
      if (this.updateCall !== null) {
        cancelAnimationFrame(this.updateCall);
      }

      this.element.style.willChange = "";
      this.element.style.transition = "";
      this.element.style.transform = "";
      this.resetGlare();

      this.removeEventListeners();
      this.element.vanillaTilt = null;
      delete this.element.vanillaTilt;

      this.element = null;
    }

    onDeviceOrientation(event) {
      if (event.gamma === null || event.beta === null) {
        return;
      }

      this.updateElementPosition();

      if (this.gyroscopeSamples > 0) {
        this.lastgammazero = this.gammazero;
        this.lastbetazero = this.betazero;

        if (this.gammazero === null) {
          this.gammazero = event.gamma;
          this.betazero = event.beta;
        } else {
          this.gammazero = (event.gamma + this.lastgammazero) / 2;
          this.betazero = (event.beta + this.lastbetazero) / 2;
        }

        this.gyroscopeSamples -= 1;
      }

      const totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
      const totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;

      const degreesPerPixelX = totalAngleX / this.width;
      const degreesPerPixelY = totalAngleY / this.height;

      const angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
      const angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);

      const posX = angleX / degreesPerPixelX;
      const posY = angleY / degreesPerPixelY;

      if (this.updateCall !== null) {
        cancelAnimationFrame(this.updateCall);
      }

      this.event = {
        clientX: posX + this.left,
        clientY: posY + this.top,
      };

      this.updateCall = requestAnimationFrame(this.updateBind);
    }

    onMouseEnter() {
      this.updateElementPosition();
      this.element.style.willChange = "transform";
      this.setTransition();
    }

    onMouseMove(event) {
      if (this.updateCall !== null) {
        cancelAnimationFrame(this.updateCall);
      }

      this.event = event;
      this.updateCall = requestAnimationFrame(this.updateBind);
    }

    onMouseLeave() {
      this.setTransition();

      if (this.settings.reset) {
        requestAnimationFrame(this.resetBind);
      }
    }

    reset() {
      this.onMouseEnter();

      if (this.fullPageListening) {
        this.event = {
          clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
          clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
      } else {
        this.event = {
          clientX: this.left + ((this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width),
          clientY: this.top + ((this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height)
        };
      }

      let backupScale = this.settings.scale;
      this.settings.scale = 1;
      this.update();
      this.settings.scale = backupScale;
      this.resetGlare();
    }

    resetGlare() {
      if (this.glare) {
        this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
        this.glareElement.style.opacity = "0";
      }
    }

    getValues() {
      let x,
      y;

      if (this.fullPageListening) {
        x = this.event.clientX / this.clientWidth;
        y = this.event.clientY / this.clientHeight;
      } else {
        x = (this.event.clientX - this.left) / this.width;
        y = (this.event.clientY - this.top) / this.height;
      }

      x = Math.min(Math.max(x, 0), 1);
      y = Math.min(Math.max(y, 0), 1);

      let tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
      let tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
      let angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);

      return {
        tiltX: tiltX,
        tiltY: tiltY,
        percentageX: x * 100,
        percentageY: y * 100,
        angle: angle
      };
    }

    updateElementPosition() {
      let rect = this.element.getBoundingClientRect();

      this.width = this.element.offsetWidth;
      this.height = this.element.offsetHeight;
      this.left = rect.left;
      this.top = rect.top;
    }

    update() {
      let values = this.getValues();

      this.element.style.transform = "perspective(" + this.settings.perspective + "px) " +
      "rotateX(" + (this.settings.axis === "x" ? 0: values.tiltY) + "deg) " +
      "rotateY(" + (this.settings.axis === "y" ? 0: values.tiltX) + "deg) " +
      "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";

      if (this.glare) {
        this.glareElement.style.transform = `rotate(${values.angle}deg) translate(-50%, -50%)`;
        this.glareElement.style.opacity = `${values.percentageY * this.settings["max-glare"] / 100}`;
      }

      this.element.dispatchEvent(new CustomEvent("tiltChange", {
        "detail": values
      }));

      this.updateCall = null;
    }

    /**
    * Appends the glare element (if glarePrerender equals false)
    * and sets the default style
    */
    prepareGlare() {
      // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
      if (!this.glarePrerender) {
        // Create glare element
        const jsTiltGlare = document.createElement("div");
        jsTiltGlare.classList.add("js-tilt-glare");

        const jsTiltGlareInner = document.createElement("div");
        jsTiltGlareInner.classList.add("js-tilt-glare-inner");

        jsTiltGlare.appendChild(jsTiltGlareInner);
        this.element.appendChild(jsTiltGlare);
      }

      this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
      this.glareElement = this.element.querySelector(".js-tilt-glare-inner");

      if (this.glarePrerender) {
        return;
      }

      Object.assign(this.glareElementWrapper.style, {
        "position": "absolute",
        "top": "0",
        "left": "0",
        "width": "100%",
        "height": "100%",
        "overflow": "hidden",
        "pointer-events": "none",
        "border-radius": "inherit"
      });

      Object.assign(this.glareElement.style, {
        "position": "absolute",
        "top": "50%",
        "left": "50%",
        "pointer-events": "none",
        "background-image": `linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)`,
        "transform": "rotate(180deg) translate(-50%, -50%)",
        "transform-origin": "0% 0%",
        "opacity": "0"
      });

      this.updateGlareSize();
    }

    updateGlareSize() {
      if (this.glare) {
        const glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth: this.element.offsetHeight) * 2;

        Object.assign(this.glareElement.style, {
          "width": `${glareSize}px`,
          "height": `${glareSize}px`,
        });
      }
    }

    updateClientSize() {
      this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

      this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    }

    onWindowResize() {
      this.updateGlareSize();
      this.updateClientSize();
    }

    setTransition() {
      clearTimeout(this.transitionTimeout);
      this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
      if (this.glare) this.glareElement.style.transition = `opacity ${this.settings.speed}ms ${this.settings.easing}`;

      this.transitionTimeout = setTimeout(() => {
        this.element.style.transition = "";
        if (this.glare) {
          this.glareElement.style.transition = "";
        }
      },
        this.settings.speed);

    }

    /**
    * Method return patched settings of instance
    * @param {boolean} settings.reverse - reverse the tilt direction
    * @param {number} settings.max - max tilt rotation (degrees)
    * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
    * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
    * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
    * @param {string} settings.easing - Easing on enter/exit
    * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
    * @param {number} settings.speed - Speed of the enter/exit transition
    * @param {boolean} settings.transition - Set a transition on enter/exit
    * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
    * @param {boolean} settings.glare - if it should have a "glare" effect
    * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
    * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
    * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
    * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
    * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
    * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
    * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
    * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
    * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
    */
    extendSettings(settings) {
      let defaultSettings = {
        reverse: false,
        max: 15,
        startX: 0,
        startY: 0,
        perspective: 1000,
        easing: "cubic-bezier(.03,.98,.52,.99)",
        scale: 1,
        speed: 300,
        transition: true,
        axis: null,
        glare: false,
        "max-glare": 1,
        "glare-prerender": false,
        "full-page-listening": false,
        "mouse-event-element": null,
        reset: true,
        "reset-to-start": true,
        gyroscope: true,
        gyroscopeMinAngleX: -45,
        gyroscopeMaxAngleX: 45,
        gyroscopeMinAngleY: -45,
        gyroscopeMaxAngleY: 45,
        gyroscopeSamples: 10
      };

      let newSettings = {};
      for (var property in defaultSettings) {
        if (property in settings) {
          newSettings[property] = settings[property];
        } else if (this.element.hasAttribute("data-tilt-" + property)) {
          let attribute = this.element.getAttribute("data-tilt-" + property);
          try {
            newSettings[property] = JSON.parse(attribute);
          } catch (e) {
            newSettings[property] = attribute;
          }

        } else {
          newSettings[property] = defaultSettings[property];
        }
      }

      return newSettings;
    }

    static init(elements, settings) {
      if (elements instanceof Node) {
        elements = [elements];
      }

      if (elements instanceof NodeList) {
        elements = [].slice.call(elements);
      }

      if (!(elements instanceof Array)) {
        return;
      }

      elements.forEach((element) => {
        if (!("vanillaTilt" in element)) {
          element.vanillaTilt = new VanillaTilt(element, settings);
        }
      });
    }
  }

  if (typeof document !== "undefined") {
    /* expose the class to window */
    window.VanillaTilt = VanillaTilt;

    /**
    * Auto load
    */
    VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
  }

  return VanillaTilt;

}());