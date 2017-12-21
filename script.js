$(document).ready(function () {
    $('#sidebarCollapse').click (function () {
        $('.sidebar').toggleClass('active');
    });
    $('#sidebarCollapse-x').on('click', function () {
        $('.sidebar').toggleClass('active');
    });
        $('#sidebarCollapse').click (function () {
        $('.navmenu').toggleClass('active');
    });
    $('#sidebarCollapse-x').on('click', function () {
        $('.navmenu').toggleClass('active');
    });
    function width(){
        var width = $( window ).width();
        var show = $('.show');
        console.log(width);
    }
    width();
    $(window).resize(function() {
        width();
            if($(window).width() <= 1400){
               $('nav').removeClass('sidebar');
               $('nav').addClass('navbar-fixed-top');
               $('nav').addClass('navmenu');
            }
            else{
                $('nav').addClass('sidebar');
                $('nav').removeClass('navbar-fixed-top');
                $('nav').removeClass('navmenu');
            }
    });
        
});