$(document).ready(function() {
    $('#fullpage').fullpage({
        autoScrolling: true,
        scrollHorizontally: true,
        anchors: ['firstPage', 'Page2', 'Page3', 'Page4', 'Page5', 'Page6', 'Page7'],
        sectionsColor: ['#000000', '#00000', '#000000', '#000000', '#000000', '#000000', '#000000'],
        menu: '#myMenu'
    });

    //methods
    $.fn.fullpage.setAllowScrolling(false);
});