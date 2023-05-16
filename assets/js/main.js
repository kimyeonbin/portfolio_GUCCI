$(function(){
    
    gsap.registerPlugin(ScrollTrigger);
    
    ScrollTrigger.saveStyles(".mobile, .desktop");
    
    ScrollTrigger.matchMedia({
        "(min-width: 1281px)": function() {
            /**
             * @마우스커서1_제품찾기
             */
            $('.sc-more').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY - ($('.sc-more').outerHeight()/2);

                gsap.to('.cursor1',{
                    left: '0%',
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.sc-more').mouseleave(function(e){
                gsap.to('.cursor1',{
                    x:0,
                    y:0,
                    left: '50%'
                });
            });
            /**
             * @마우스커서공통_카테고리
             */
            $('.col-sticky').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY;
                $(this).find('.cursor-common').addClass('show');

                gsap.to($(this).find('.cursor-common'),{
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.col-sticky').mouseleave(function(){
                $(this).find('.cursor-common').removeClass('show');
            });
            /**
             * @마우스커서5_선택배너
             */
            $('.sc-choice').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY;
                $(this).find('.cursor5').addClass('show');

                gsap.to($(this).find('.cursor5'),{
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.sc-choice').mouseleave(function(){
                $(this).find('.cursor5').removeClass('show');
            });
            /**
             * @컬렉션텍스트_나타남
             */
            const headTxt = new SplitType('.sc-collection .col-sticky .title span', { types: 'words, chars'});

            $('.col-sticky').each(function(i,el){

                child = $(this).find('.col-bg.on');
                child2 = $(this).find('.title span .char');
        
                gsap.to(child,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        scrub:1,
                        // markers:true,
                    },
                    opacity:0.7
                });
                gsap.to(child2,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        // markers:true,
                    },
                    yPercent:-100,
                    stagger:0.03,
                });
            });
            /**
             * @스크롤_버튼
             */
            $('.scroll').click(function(){
                herePos=$('.here').offset().top;
                window.scrollTo({top:herePos,behavior:"smooth"});
            });
            /**
             * @푸터_상하움직임
             */
            gsap.to('footer',{
                scrollTrigger:{
                    trigger:'footer',
                    start:`100% 100%`,
                    end:"200% 100%",
                    scrub:0,
                    // markers:true,
                },
                yPercent:100
            });
        },


        "(min-width: 1025px) and (max-width: 1280px)": function() {
            /**
             * @사이드내비_너비조절
             */
            $(window).resize(function(){

                windowVal = $(window).width();

                if(windowVal >= 1280){
                    $('body').removeClass('hidden');
                }else{
                    if($('.gnb .side-nav').hasClass('on')){
                        $('body').addClass('hidden');
                    }
                }
            });
            /**
             * @마우스커서1_제품찾기
             */
            $('.sc-more').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY - ($('.sc-more').outerHeight()/2);

                gsap.to('.cursor1',{
                    left: '0%',
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.sc-more').mouseleave(function(e){
                gsap.to('.cursor1',{
                    x:0,
                    y:0,
                    left: '50%'
                });
            });
            /**
             * @마우스커서공통_카테고리
             */
            $('.col-sticky').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY;
                $(this).find('.cursor-common').addClass('show');

                gsap.to($(this).find('.cursor-common'),{
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.col-sticky').mouseleave(function(){
                $(this).find('.cursor-common').removeClass('show');
            });
            /**
             * @마우스커서5_선택배너
             */
            $('.sc-choice').mousemove(function(e){
                leftVal = e.offsetX;
                topVal = e.offsetY;
                $(this).find('.cursor5').addClass('show');

                gsap.to($(this).find('.cursor5'),{
                    x:leftVal,
                    y:topVal,
                });
            });
            $('.sc-choice').mouseleave(function(){
                $(this).find('.cursor5').removeClass('show');
            });
            /**
             * @컬렉션텍스트_나타남
             */
            const headTxt = new SplitType('.sc-collection .col-sticky .title span', { types: 'words, chars'});

            $('.col-sticky').each(function(i,el){

                child = $(this).find('.col-bg.on');
                child2 = $(this).find('.title span .char');
        
                gsap.to(child,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        scrub:1,
                        // markers:true,
                    },
                    opacity:0.7
                });
                gsap.to(child2,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        // markers:true,
                    },
                    yPercent:-100,
                    stagger:0.03,
                });
            });
            /**
             * @스크롤_버튼
             */
            $('.scroll').click(function(){
                herePos=$('.here').offset().top;
                window.scrollTo({top:herePos,behavior:"smooth"});
            });
            /**
             * @푸터_상하움직임
             */
            gsap.to('footer',{
                scrollTrigger:{
                    trigger:'footer',
                    start:`100% 100%`,
                    end:"200% 100%",
                    scrub:0,
                    // markers:true,
                },
                yPercent:100
            });
        },


        "(min-width: 768px) and (max-width: 1024px)": function() {
            /**
             * @사이드내비_너비조절
             */
            $(window).resize(function(){

                windowVal = $(window).width();

                if(windowVal <= 1024 && $('.gnb .side-nav').hasClass('on')){
                    $('body').addClass('hidden');
                }
            });
            /**
             * @컬렉션텍스트_나타남
             */
            const headTxt = new SplitType('.sc-collection .col-sticky .title span', { types: 'words, chars'});

            $('.col-sticky').each(function(i,el){

                child = $(this).find('.col-bg.on');
                child2 = $(this).find('.title span .char');
        
                gsap.to(child,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        scrub:1,
                        // markers:true,
                    },
                    opacity:0.7
                });
                gsap.to(child2,{
                    scrollTrigger:{
                        trigger:el,
                        start:"top top",
                        end:"bottom top",
                        // markers:true,
                    },
                    yPercent:-100,
                    stagger:0.03,
                });
            });
            /**
             * @스크롤_버튼
             */
            $('.scroll').click(function(){
                herePos=$('.here').offset().top;
                window.scrollTo({top:herePos,behavior:"smooth"});
            });
         },


        "(max-width: 767px)": function() {
            /**
             * @사이드내비_너비조절
             */
            $(window).resize(function(){

                windowVal = $(window).width();

                if(windowVal <= 767 && $('.gnb .side-nav').hasClass('on')){
                    $('body').addClass('hidden');
                }
            });
        },


        "all": function() {
            /**
             * @구찌텍스트_나타남
            */
            const gucciTxt = new SplitType('.sc-intro .desc span', { types: 'words, chars'});

            $('.sc-intro').each(function(i,el){

                child = $(this).find('.desc span .char');
                gsap.timeline({
                    paused: true,
                })
                .to(child,{yPercent:-100, stagger:0.08,})
                .play();
            });
            /**
             * @메인비주얼슬라이드
             */
            const mainSlide = new Swiper('.main-slide',{
                loop:true,
                effect: "fade",
                autoplay: {
                    delay: 750,
                    disableOnInteraction: false
                },
            });
             /**
             * @사이드내비_버튼
             */
             $('.gnb .btn-menu').click(function(){
                $('.gnb .side-nav').toggleClass('on');
                $('body').toggleClass('hidden');
            });
            /**
             * @헤더_나타남사라짐
             */
            let lastScroll = 0;
            $(window).scroll(function(){
                
                curr=$(this).scrollTop();

                if(curr >= 500){
                    if(curr > lastScroll){
                        $('header').addClass('hide');
                    }else{
                        $('header').removeClass('hide');
                    }
                }else{
                    $('header').removeClass('hide');
                };

                lastScroll = curr;
            });
            /**
             * @연락버튼_나타남사라짐
             */
            let lastScroll2 = 0;
            $(window).scroll(function(){
                
                curr=$(this).scrollTop();

                if(curr >= 10){
                    if(curr > lastScroll2){
                        $('.fix-btn').addClass('hide');
                    }else{
                        $('.fix-btn').removeClass('hide');
                    }
                }else{
                    $('.fix-btn').removeClass('hide');
                };

                lastScroll2 = curr;
            });
             /**
             * @제품색상선택텍스트_호버
             */
             $('.sc-theme .theme-area a').hover(function(){
                $(this).siblings().css("opacity",0.1);
            },function(){
                $(this).siblings().css("opacity",1);
            });
        }
    });
});