/**
 * Created by Administrator on 2016/8/25.
 */
$(function(){

    /*if($.fn.unslider){
        $('.unslider-box').unslider({
            speed: 1000,
            delay: 3000,
            keys: true,
            dots: true,
            fluid: true,
            autoplay: true
        });
    }*/



    $(".index-news-nav").children("li").click(function(){
        var index=$(this).index();
        $(this).addClass("active").siblings().removeClass('active');

        $(".news-content").removeClass('hide').hide().eq(index).show();

    });

    $("#goTop").click(function(){
        $('html,body').animate({scrollTop:0},100);
    });


    var isSearchShow=false;
    $("#showSearchBox").click(function(e){
        var e=e||window.event;//事件处理时候区分IE和其他浏览器的事件对象
        $("#searchBox").stop().animate({right:"-1px"},300);
        isSearchShow=true;
        e.stopPropagation();//阻止事件冒泡，停止事件的传播，阻止它被分派到其他 Document 节点,不再派发事件。
        e.preventDefault();//取消事件的默认动作,通知浏览器不要执行与事件关联的默认动作。

        return false
    });
    $("#searchBox").click(function(){
        return false;
    });

    $(window).click(function(){
        if(isSearchShow){
            $("#searchBox").stop().animate({right:"-237px"},300);
            isSearchShow=!isSearchShow;
        }
    });



})
