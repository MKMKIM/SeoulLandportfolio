$(document).ready(function(){
    // $(".info_pan_box > a > img").fadeOut(2000, function(){
    //     $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item2.jpg")
    //     $(".info_pan_box > a > img").fadeIn(2000, function(){
    //         $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //             $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item3.jpg")
    //             $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                 $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                     $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item4.png")
    //                     $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                         $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                             $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item5.webp")
    //                             $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                                 $(".info_pan_box > a > img").fadeToggle(2000, function(){
    //                                     $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item6.webp")
    //                                     $(".info_pan_box > a > img").fadeToggle(2000)
    //                                 })
    //                             })
    //                         })
    //                     })
    //                 })
    //             })
    //         })
    //     })
    // })

    setInterval(function(){
        imgRolling()
    }, 12000)

    function imgRolling() {
        $(".info_pan_box > a > img").eq(0).delay(0).fadeIn(2000).fadeOut(2000);
        $(".info_pan_box > a > img").eq(1).delay(2000).fadeIn(2000).fadeOut(2000);
        $(".info_pan_box > a > img").eq(2).delay(4000).fadeIn(2000).fadeOut(2000);
        $(".info_pan_box > a > img").eq(3).delay(6000).fadeIn(2000).fadeOut(2000);
        $(".info_pan_box > a > img").eq(4).delay(8000).fadeIn(2000).fadeOut(2000);
        $(".info_pan_box > a > img").eq(5).delay(10000).fadeIn(2000).fadeOut(2000);
    }
    imgRolling()
})