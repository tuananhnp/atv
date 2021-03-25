$(document).on("scroll", function(){
    if($(document).scrollTop() > 50)
    {
       $("#logo-left").addClass("logo-shrink");
       $("#logo-center").addClass("logo-shrink");
    }
    else
    {
       $("#logo-left").removeClass("logo-shrink");
       $("#logo-center").removeClass("logo-shrink");
    }
});