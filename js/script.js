// gnb 페이지이동
$(window).on("load", function(){ 
    let offsetPadding = 0; 

    function scrollToSection(target, targetButton) {
        let targetOffset = $(target).offset();
        if (targetOffset) {
            $("html, body").animate({
                scrollTop: targetOffset.top - offsetPadding
            }, 800);
            // activateButton(targetButton); 
        } else {
            console.log("Error: target not found", target);
        }
    }

    $(".aside_top").click(function(){
        scrollToSection("#header", this);
    });

    $(".gnb li:first-child").click(function(){
        scrollToSection("#section1", this);
    });

    $(".gnb li:nth-child(2)").click(function(){
        var target = $("#section3");
        var offset = target.offset().top - -0; 
        $("html, body").animate({ scrollTop: offset }, 600);
    });

        $(".gnb li:nth-child(3)").click(function(){
            var target = $("#section6");
            var offset = target.offset().top - -0;  
            $("html, body").animate({ scrollTop: offset }, 600);
        });
})