$(document).ready(function(){
    /* --- header --- */
    const header=document.getElementById('header');
    header.addEventListener('mouseenter',function(){
        this.classList.add('active');
    });
    header.addEventListener('mouseleave',function(){
        this.classList.remove('active');
    });

    /* --- gnb --- */
    $('.gnb > ul > li ').mouseenter(function(){
        $('.gnb > ul > li').find('.sub').stop().slideDown(100);
        $('.sub_bg').addClass('on');
        $('.sub_bg').stop().slideDown(100);
    });
    $('#header').mouseleave(function(){
        $('.gnb > ul > li').find('.sub').stop().slideUp(100);
        $('.sub_bg').removeClass('on');
        $('.sub_bg').stop().slideUp(100);
    });

    /* --- menu --- */
    const toggle=document.querySelector(".next");
    const imgbox1=document.querySelector(".itembox")
    const imgbox2=document.querySelector(".itembox2")
    let imgW1=imgbox1.clientWidth;
    toggle.addEventListener('click',function(e){
        e.preventDefault();
        toggle.classList.toggle('active');
        imgbox1.style.left= -imgW1+"px";
        imgbox2.style.left= 0+"px";
        if(imgbox1.offsetLeft<0){
            imgbox1.style.left= 0+"px";
            imgbox2.style.left= imgW1+"px";
        }
    });

    /* --- slide banner --- */
    const swiper = new Swiper('.swiper', {
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },
      });

    /* --- news --- */
    const newslist=document.querySelectorAll(".newslist");
    const txt=document.querySelectorAll(".newslist .txt");
    //console.log(txt)
    for(let i=0; i<newslist.length; i++){
        newslist[i].addEventListener('mouseenter',function(){
            txt[i].style.bottom=0+"px";
        });
        newslist[i].addEventListener('mouseleave',function(){
            txt[i].style.bottom=-137+"px";
        });
    }

    /* --- mobile menu --- */

    /* --- toggle --- */
    $('.toggle').click(function(){
        $(this).toggleClass('on');
        $('.m_gnb').toggleClass('on')
    });

    $('.m_nav ul > li > a').click(function () {
        if ($(this).next().css('display') == 'none') {
          $('.m_sub:visible').slideUp(200);
          $(this).next().slideDown(200);
        } else {
          $(this).next().slideUp(200);
        };
      });
});