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
        var e=e||window.event;//�¼�����ʱ������IE��������������¼�����
        $("#searchBox").stop().animate({right:"-1px"},300);
        isSearchShow=true;
        e.stopPropagation();//��ֹ�¼�ð�ݣ�ֹͣ�¼��Ĵ�������ֹ�������ɵ����� Document �ڵ�,�����ɷ��¼���
        e.preventDefault();//ȡ���¼���Ĭ�϶���,֪ͨ�������Ҫִ�����¼�������Ĭ�϶�����

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
