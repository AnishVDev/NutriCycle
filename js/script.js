(function($) {

  "use strict";

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  $(document).ready(function() {
      $('.fsElementSlideshow').slick({
        adaptiveHeight: true,
        arrows: true,
        autoplay: true,
        dots: true,
        fade: true,
        slidesToShow: 1
      });
    initChocolat();

  /* Video */
  var $videoSrc;  
    $('.play-btn').click(function() {
      $videoSrc = $(this).data( "src" );
    });

    $('#myModal').on('shown.bs.modal', function (e) {

    $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
  })

  $('#myModal').on('hide.bs.modal', function (e) {
    $("#video").attr('src',$videoSrc); 
  })
    
  var swiper = new Swiper(".slider", {
    effect: "fade",
    pagination: {
      el: ".slider-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".testimonial-swiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
      el: ".testimonial-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".services-swiper", {
    slidesPerView: 5,
    spaceBetween: 120,
    freeMode: true,
    pagination: {
      el: ".services-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      572: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
      1280: {
        slidesPerView: 5,
      },
    },
  });

        // product single page
  var thumb_slider = new Swiper(".product-thumbnail-slider", {
    autoplay: true,
    loop: true,
    spaceBetween: 8,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var large_slider = new Swiper(".product-large-slider", {
    autoplay: true,
    loop:true,
    spaceBetween: 10,
    effect: 'fade',
    thumbs: {
      swiper: thumb_slider,
    },
  });


  window.addEventListener("load", (event) => {
    //isotope
    $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry',
    });



    // Initialize Isotope
    var $container = $('.isotope-container').isotope({
      // options
      itemSelector: '.item',
      layoutMode: 'masonry',
    });

    $(document).ready(function () {
      //active button
      $('.filter-button').click(function () {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
      });
    });

    // Filter items on button click
    $('.filter-button').click(function () {
      var filterValue = $(this).attr('data-filter');
      if (filterValue === '*') {
        // Show all items
        $container.isotope({ filter: '*' });
      } else {
        // Show filtered items
        $container.isotope({ filter: filterValue });
      }
    });

  });
  // Revenue Model Pie Chart
  const revenueData = {
    labels: ["B2B Sales", "NGO Grants", "Environmental Donations", "Sponsorships"],
    datasets: [{
        data: [80, 6, 6, 7],
        backgroundColor: ["#4caf50", "#8bc34a", "#cddc39", "#ffeb3b"]
    }]
  };

  new Chart(document.getElementById("revenueChart"), {
    type: "pie",
    data: revenueData
  });

  // Industry Pie Chart
  const industryData = {
    labels: ["Packaging", "Automobile", "Healthcare", "Consumer Goods"],
    datasets: [{
        data: [30, 25, 20, 15],
        backgroundColor: ["#2e7d32", "#388e3c", "#4caf50", "#8bc34a"]
    }]
  };

  new Chart(document.getElementById("industryChart"), {
    type: "pie",
    data: industryData
  });

  // Startup Costs Bar Chart
  const startupCosts = {
    labels: ["Factory Setup", "Machinery", "Hiring", "Garbage Trucks"],
    datasets: [{
        label: "Start-Up Costs ($)",
        data: [700000, 2500000, 507000, 480000],
        backgroundColor: "#4caf50"
    }]
  };

  new Chart(document.getElementById("startupCostsChart"), {
    type: "bar",
    data: startupCosts
  });
  
});
})(jQuery);