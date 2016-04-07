//when the html document is ready
$(document).ready(function(){
    //when menu button is clicked
    $('.close-menu').click(function(){
        //hide the menu links
        $('nav li').css('display', 'none');
    });
});