/** Shopify CDN: Minification failed

Line 6:0 Transforming let to the configured target environment ("es5") is not supported yet

**/
let items = document.querySelector(".header__inline-menu").querySelectorAll("details");
  console.log(items)
  items.forEach(item => {
    item.addEventListener("mouseover", () => {
      item.setAttribute("open", true);
      item.querySelector("ul").addEventListener("mouseleave", () => {
        item.removeAttribute("open");
      });
    item.addEventListener("mouseleave", () => {
      item.removeAttribute("open");
    });
  });
});
$('.testimonial_slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.6648 12.0062C8.67905 11.9129 8.71163 11.7823 8.80257 11.683L13.8026 6.22849C13.9372 6.08161 14.1143 6 14.3 6C14.4857 6 14.6628 6.08161 14.7974 6.22849C15.0673 6.52286 15.0675 6.96692 14.7982 7.26157L10.32 12.2531L14.7974 17.1376C15.0675 17.4322 15.0675 17.8769 14.7974 18.1715C14.6628 18.3184 14.4857 18.4 14.3 18.4C14.1143 18.4 13.9372 18.3184 13.8026 18.1715L8.84003 12.7578C8.78628 12.7326 8.74761 12.6915 8.72332 12.6532C8.68886 12.5989 8.67373 12.5385 8.66578 12.4952C8.64995 12.4088 8.64998 12.3118 8.65 12.2596L8.65 12.2515C8.65 12.1974 8.64999 12.1031 8.6648 12.0062Z"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="23" height="24" viewBox="0 0 23 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.1352 12.1938C15.121 12.2871 15.0884 12.4177 14.9974 12.517L9.99743 17.9715C9.86279 18.1184 9.68569 18.2 9.5 18.2C9.31432 18.2 9.13721 18.1184 9.00257 17.9715C8.73274 17.6771 8.73248 17.2331 9.0018 16.9384L13.48 11.9469L9.00257 7.06241C8.73248 6.76777 8.73248 6.32313 9.00257 6.02849C9.13721 5.88161 9.31432 5.8 9.5 5.8C9.68569 5.8 9.86279 5.88161 9.99743 6.02849L14.96 11.4422C15.0137 11.4674 15.0524 11.5085 15.0767 11.5468C15.1111 11.6011 15.1263 11.6615 15.1342 11.7048C15.1501 11.7912 15.15 11.8882 15.15 11.9404L15.15 11.9485C15.15 12.0026 15.15 12.0969 15.1352 12.1938Z"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
$('.transformation_slider').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow: '<button class="slick-prev slick-arrow" aria-label="Previous" type="button" style=""><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M8.6648 12.0062C8.67905 11.9129 8.71163 11.7823 8.80257 11.683L13.8026 6.22849C13.9372 6.08161 14.1143 6 14.3 6C14.4857 6 14.6628 6.08161 14.7974 6.22849C15.0673 6.52286 15.0675 6.96692 14.7982 7.26157L10.32 12.2531L14.7974 17.1376C15.0675 17.4322 15.0675 17.8769 14.7974 18.1715C14.6628 18.3184 14.4857 18.4 14.3 18.4C14.1143 18.4 13.9372 18.3184 13.8026 18.1715L8.84003 12.7578C8.78628 12.7326 8.74761 12.6915 8.72332 12.6532C8.68886 12.5989 8.67373 12.5385 8.66578 12.4952C8.64995 12.4088 8.64998 12.3118 8.65 12.2596L8.65 12.2515C8.65 12.1974 8.64999 12.1031 8.6648 12.0062Z"></path></svg></button>',
  nextArrow: '<button class="slick-next slick-arrow" aria-label="Next" type="button" style=""><svg width="23" height="24" viewBox="0 0 23 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M15.1352 12.1938C15.121 12.2871 15.0884 12.4177 14.9974 12.517L9.99743 17.9715C9.86279 18.1184 9.68569 18.2 9.5 18.2C9.31432 18.2 9.13721 18.1184 9.00257 17.9715C8.73274 17.6771 8.73248 17.2331 9.0018 16.9384L13.48 11.9469L9.00257 7.06241C8.73248 6.76777 8.73248 6.32313 9.00257 6.02849C9.13721 5.88161 9.31432 5.8 9.5 5.8C9.68569 5.8 9.86279 5.88161 9.99743 6.02849L14.96 11.4422C15.0137 11.4674 15.0524 11.5085 15.0767 11.5468C15.1111 11.6011 15.1263 11.6615 15.1342 11.7048C15.1501 11.7912 15.15 11.8882 15.15 11.9404L15.15 11.9485C15.15 12.0026 15.15 12.0969 15.1352 12.1938Z"></path></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true
      }
    },
    {
      breakpoint: 750,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
if ($(window).width() < 769){
  $(document).ready(function() {
    $('.footer-block__heading').click(function() {
      $(this).next('.footer-block__details-content').slideToggle("slow");
      $(this).toggleClass('active');
    });
  });
}
$('.moreless-button').click(function() {
  $('.product-full__description').slideToggle();
  if ($('.moreless-button').text() == "Read more") {
    $(this).text("Read less")
  } else {
    $(this).text("Read more")
  }
});