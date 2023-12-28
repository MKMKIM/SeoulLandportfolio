$(document).ready(function(){
    $(".info_pan_box > a > img").fadeOut(2000, function(){
        $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item2.jpg")
        $(".info_pan_box > a > img").fadeIn(2000, function(){
            $(".info_pan_box > a > img").fadeToggle(2000, function(){
                $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item3.jpg")
                $(".info_pan_box > a > img").fadeToggle(2000, function(){
                    $(".info_pan_box > a > img").fadeToggle(2000, function(){
                        $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item4.png")
                        $(".info_pan_box > a > img").fadeToggle(2000, function(){
                            $(".info_pan_box > a > img").fadeToggle(2000, function(){
                                $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item5.webp")
                                $(".info_pan_box > a > img").fadeToggle(2000, function(){
                                    $(".info_pan_box > a > img").fadeToggle(2000, function(){
                                        $(".info_pan_box > a > img").attr("src", "./img/banner/info/info_item6.webp")
                                        $(".info_pan_box > a > img").fadeToggle(2000)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})