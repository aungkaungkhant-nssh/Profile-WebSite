let screenHeight = $(window).height();
new WOW().init();
$('.pricing-slick').slick({
     arrows:false,
     dots: true,
     infinite: true,
     speed: 300,
     slidesToShow: 3,
     slidesToScroll: 3,
     responsive: [
         {
             breakpoint: 1400,
             settings: {
                 slidesToShow: 3,
                 slidesToScroll: 3,
                 infinite: true,
                 dots: true
             }
         },
         {
             breakpoint: 800,
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
$(window).scroll(function(){
    let currentHeight = $(this).scrollTop()
    if(currentHeight > screenHeight){
        $(".side-nav").addClass("side-nav-scroll");
       $(".navbar-nav a").addClass("black");
       $(".navbar-nav a").removeClass("white");
    }else{
        $(".side-nav").removeClass("side-nav-scroll");
        $(".navbar-nav a").addClass("white");
        $(".navbar-nav a").removeClass("black");
        setActive("home")
    }
   
})
$(".navbar-toggler").click(function(){
    let isOpen = $(".navbar-collapse").hasClass("show")
    if(!isOpen){
        $(".menu-icon").removeClass("fa-bars").addClass("fa-close");
    }else{
        $(".menu-icon").removeClass("fa-close").addClass("fa-bars");
    }
})
function setActive(id){
    $(`.nav-link`).removeClass("current-section")
    $(`.nav-link[href='#${id}']`).addClass("current-section")
}
function navScroll(){
        let currentSection = $('section[id]');
        currentSection.waypoint(function(direction){
            if(direction == "down"){
               let currentSectionId =  $(this.element).attr("id");
               setActive(currentSectionId);
            }
        })
        currentSection.waypoint(function(direction){
            if(direction == "up"){
                let currentSectionId =  $(this.element).attr("id");
               setActive(currentSectionId);
            }
        })
}
navScroll()

