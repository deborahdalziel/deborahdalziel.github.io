//when the html document is ready
$(document).ready(function(){
    //when close menu button is clicked
    $('.close-menu').click(function(){
        //hide the menu links
        $('nav li').css('display', 'none');
    });
    //when menu button is clicked
    $('.drop-down-button').click(function(){
    	//open the menu links
    	$('nav li').css('display', 'inline');	
    });
});