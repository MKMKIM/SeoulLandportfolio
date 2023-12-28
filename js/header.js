$(document).ready(function(){
    $('.header_ul_li_total, .header_pan_ul_total, .header_pan_box').hover(function(){
        $('.header_pan_ul_total, .header_pan_box').css({
            display:'block'
        })
    }, function(){
        $('.header_pan_ul_total, .header_pan_box').css({
            display:'none'
        })
    })
})