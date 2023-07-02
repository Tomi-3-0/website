  /*Downloaded from https://www.codeseek.co/ezra_siton/mixitup-fancybox3-JydYqm */
  // 1. querySelector
  var containerEl = document.querySelector(".portfolio-item");
  // 2. Passing the configuration object inline
  //https://www.kunkalabs.com/mixitup/docs/configuration-object/
  var mixer = mixitup(containerEl, {
      animation: {
          effects: "fade translateZ(-100px)",
          effectsIn: "fade translateY(-100%)",
          easing: "cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
  });
  // fancybox insilaze & options //
  $("[data-fancybox]").fancybox({
      loop: true,
      hash: true,
      transitionEffect: "slide",
      /* zoom VS next////////////////////
      clickContent - i modify the deafult - now when you click on the image you go to the next image - i more like this approach than zoom on desktop (This idea was in the classic/first lightbox) */
      clickContent: function(current, event) {
          return current.type === "image" ? "next" : false;
      }
  });