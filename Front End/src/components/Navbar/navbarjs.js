export function func1(){
('.navTrigger').click(function () {
    (this).toggleClass('active');
    console.log("Clicked menu");
    ("#mainListDiv").toggleClass("show_list");
    ("#mainListDiv").fadeIn();

})
};

export function func2(){
(window).scroll(function() {
    if ((document).scrollTop() > 50) {
        ('.nav').addClass('affix');
        console.log("OK");
    } else {
        ('.nav').removeClass('affix');
    }
})
};