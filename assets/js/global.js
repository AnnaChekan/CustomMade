jQuery(document).ready(function($) {
    $(".fancybox").fancybox();
    $('.nice_Select').niceSelect();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 50) {
            $('.scrolltop:hidden').stop(true, true).fadeIn();
        } else {
            $('.scrolltop').stop(true, true).fadeOut();
        }
    });

    $(function() {
        $(".muve-top").click(function() {
            $("html,body").animate({
                scrollTop: $(".thetop").offset().top
            }, "1000");
            return false
        })
    })

    if ($('.post-item img').length || $('.seo-block img').length) {
        $('.post-item img, .seo-block img').each(function() {
            var imgThis = $(this);
            if (!imgThis.hasClass("nofancy")) {
                if (imgThis.closest('a')) {
                    imgThis.closest('a').attr({
                        'data-fancybox': 'content-group',
                        //'href': $(this).attr('src'),
                    });
                };
            };
        });
    };

    if ($('.post-item iframe').length) {
        $('.post-item iframe').closest('p').addClass('iframe-box')
    }
})

/*range*/
/*const rangeInputs = document.querySelectorAll('input[type="range"]')
const numberInput = document.querySelector('input[type="number"]')

function handleInputChange(e) {
  let target = e.target
  if (e.target.type !== 'range') {
    target = document.getElementById('range')
  } 
  const min = target.min
  const max = target.max
  const val = target.value
  
  target.style.backgroundSize = (val - min) * 100 / (max - min) + '% 100%'
}    
rangeInputs.forEach(input => {
  input.addEventListener('input', handleInputChange)
})    */


/*popover*/
/*const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl)
})*/

/*rSlider*/
/*function setLeftValue() {
    let min = parseInt($("#input-left").attr('min')), // Минимально допустимое число
        max = parseInt($("#input-left").attr('max')), // Максимально допустимое число
        text = Math.min(parseInt($("#input-left").val()), parseInt($("#input-right").val()) - 1), // Минимальное значение ползунка
        percent = ((text - min) / (max - min)) * 100; // % Левого значения
    $("#input-left").val(text);
    $(".price_value_min").text(text.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ');
    $(".slider > .thumb.left").css('left', percent + "%");
    $(".slider > .range").css('left', percent + "%");
}
setLeftValue();
function setRightValue() {
    let min = parseInt($("#input-right").attr('min')),
        max = parseInt($("#input-right").attr('max')),
        text = Math.max(parseInt($("#input-right").val()), parseInt($("#input-left").val()) + 1),
        percent = ((text - min) / (max - min)) * 100;
    $("#input-right").val(text);
    $(".price_value_max").text(text.toString().replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ') + ' ');
    $(".slider > .thumb.right").css('right', (100 - percent) + "%");
    $(".slider > .range").css('right', (100 - percent) + "%");
}
setRightValue();
$("#input-left").bind("input", setLeftValue);
$("#input-right").bind("input", setRightValue);*/



/*header*/
const burgerMenu = document.querySelector('#burgerMenu');
const navMenu = document.querySelector('#navMenu');
burgerMenu.addEventListener('click', function(){
    navMenu.classList.toggle('btn-menu');
    burgerMenu.classList.toggle('active')
})

/*подчеркивание в header - .navbar-nav*/
$(document).ready(function() {
    const list = document.querySelectorAll('.navbar-nav .nav-item .nav-link')
    list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active'); });
        item.classList.add('active')
        })
    })
})
/*подчеркивание в header - .nav-menu*/
$(document).ready(function() {
    const list = document.querySelectorAll('.nav-menu-list .nav-menu-item .nav-menu-link')
    list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active-menu'); });
        item.classList.add('active-menu')
        })
    })
})
/*подчеркивание в header - .more-list*/
$(document).ready(function() {
    const list = document.querySelectorAll('.more-list .more-item .more-link')
    list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active-more'); });
        item.classList.add('active-more')
        })
    })
})

/*блок .pbw-nav*/
$(document).ready(function() {
    const $pbw = $('.pbw');
    const list = document.querySelectorAll('.pbw-nav-list .pbw-nav-item .pbw-nav-link')
    list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('active-pbw'); });
        item.classList.add('active-pbw')
        })
    })
    $('.pbw-nav-list .pbw-nav-link').on("click", function() {
        let href = $(this).attr('href');
        $pbw.addClass("hidden");
        $(href).removeClass("hidden");
    });
})

/*блок .ae-stages-nav*/
$(document).ready(function() {
    const $stages = $('.stages');
    const listStages = document.querySelectorAll('.ae-stages-nav-list .ae-stages-nav-item .ae-stages-nav-link')
    listStages.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
            listStages.forEach(el=>{ el.classList.remove('active-ae-stages'); });
        item.classList.add('active-ae-stages')
        })
    })
    $('.ae-stages-nav-list .ae-stages-nav-link').on("click", function() {
        let href = $(this).attr('href');
        $stages.addClass("hidden");
        $(href).removeClass("hidden");
    });
})


/*slider блок - .first-screen; .completed-projects*/
const helpers = {
	addZeros: function (n) {
		return (n < 10) ? '0' + n : '' + n;
	}
};
function sliderInit() {
    const $slider = $('.single-item');
    $slider.each(function() {
    const $sliderParent = $(this).parent();
    $(this).slick({
      slidesToShow: 1,
      slidesToScroll: 1,
    });
    if ($(this).find('.slider-item').length > 1) {
        $(this).siblings('.slides-numbers').show();
    }   
    $(this).on('afterChange', function(event, slick, currentSlide){
       $sliderParent.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1)); 
    });
    const sliderItemsNum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParent.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNum));  
    }); 
};
sliderInit();

$(document).ready(function(){
    $('.single-item').slick({
        infinite: false,   
        slidesToShow: 1,
        slidesToScroll: 1, 	
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    dots: true,
                }
            }
        ]
    });
});
/*slider блок  - .multiple-items*/
function sliderInitMulti() {
    const $sliderAum = $('.multiple-items');
    $sliderAum.each(function() {
    const $sliderParentAum = $(this).parent();
    $(this).slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
            breakpoint: 375,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }
    ]
    });
    if ($(this).find('.slider-multi-item').length > 1) {
        $(this).siblings('.slides-numbers').show();
    }   
    $(this).on('afterChange', function(event, slick, currentSlide){
       $sliderParentAum.find('.slides-numbers .active').html(helpers.addZeros(currentSlide + 1)); 
    });
    const sliderItemsNumAum = $(this).find('.slick-slide').not('.slick-cloned').length;
        $sliderParentAum.find('.slides-numbers .total').html(helpers.addZeros(sliderItemsNumAum));
    }); 
};
sliderInitMulti();

/*для блока - .review-mob*/
$(document).ready(function(){
    $('.single-item-mob').slick({
        responsive: [
            {
                breakpoint: 375,
                settings: {
                    dots: true,
                    infinite: false,    
                }
            }
        ]
    });
});



/*блок .aum-team-left*/
$(document).ready(function() {
    const $team = $('.team');
    const listTeam = document.querySelectorAll('.aum-team-list .aum-team-item .aum-team-link')
    listTeam.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
            listTeam.forEach(el=>{ el.classList.remove('active-team'); });
        item.classList.add('active-team')
        })
    })
    $('.aum-team-list .aum-team-link').on("click", function() {
        let href = $(this).attr('href');
        $team.addClass("hidden");
        $(href).removeClass("hidden");
    });
})

/*Загрузить еще -.fwm-completed-projects -  Реализованные проекты - mob*/ 
const listFwmCPImg = $(".completed-projects-img .completed-projects-img-item");
const numToShowFwmCPImg = 4; //сколько показывать элементов
const buttonFwmCPImg = $("#btnMorePhoto");
const numInListFwmCPImg = listFwmCPImg.length;
    listFwmCPImg.hide();
    if (numInListFwmCPImg > numToShowFwmCPImg) {
        buttonFwmCPImg.show();
    }
    listFwmCPImg.slice(0, numToShowFwmCPImg).show();
    buttonFwmCPImg.click(function() {
      const showingFwmCPImg = listFwmCPImg.filter(':visible').length;
      listFwmCPImg.slice(showingFwmCPImg - 1, showingFwmCPImg + numToShowFwmCPImg).fadeIn();
      const nowShowingFwmCPImg = listFwmCPImg.filter(':visible').length;
      if (nowShowingFwmCPImg >= numInListFwmCPImg) {
        buttonFwmCPImg.hide();
      }
});

/*Загрузить еще - блок Портфолио лучших работ .portfolio*/ 
const listPortfolioMore = $(".pbw-apartments-mob .portfolio-apartments-link");
const numToShowPortfolioMore = 8; //сколько показывать элементов
const buttonPortfolioMore = $(".btnPortfolioMore");
const numInListPortfolioMore = listPortfolioMore.length;
listPortfolioMore.hide();
    if (numInListPortfolioMore > numToShowPortfolioMore) {
        buttonPortfolioMore.show();
    }
    listPortfolioMore.slice(0, numToShowPortfolioMore).show();
    buttonPortfolioMore.click(function() {
      const showingPortfolio = listPortfolioMore.filter(':visible').length;
      listPortfolioMore.slice(showingPortfolio - 1, showingPortfolio + numToShowPortfolioMore).fadeIn();
      const nowShowingPortfolio = listPortfolioMore.filter(':visible').length;
      if (nowShowingPortfolio >= numInListPortfolioMore) {
        buttonPortfolioMore.hide();
      }
});

/*Загрузить еще - блок Наши проекты загородных домов .ae-projects-of-country-houses*/
const listAePchMore = $(".ae-pch-block-mob .ae-pch-mob-item");
const numToShowAePchMore = 4; //сколько показывать элементов
const buttonAePchMore = $(".btnAePchMore");
const numInListAePchMore = listAePchMore.length;
listAePchMore.hide();
    if (numInListAePchMore > numToShowAePchMore) {
        buttonAePchMore.show();
    }
    listAePchMore.slice(0, numToShowAePchMore).show();
    buttonAePchMore.click(function() {
      const showingAePchMore = listAePchMore.filter(':visible').length;
      listAePchMore.slice(showingAePchMore - 1, showingAePchMore + numToShowAePchMore).fadeIn();
      const nowShowingAePchMore = listAePchMore.filter(':visible').length;
      if (nowShowingAePchMore >= numInListAePchMore) {
        buttonAePchMore.hide();
      }
});

/*Загрузить еще - блок Отзывы .reviews-more-block-mob*/ 
const listReviewsMore = $(".reviews-more-block-mob .reviews-more-block");
const numToShowReviewsMore = 3; //сколько показывать элементов
const buttonReviewsMore = $(".btnReviewsMore");
const numInListReviewsMore = listReviewsMore.length;
listReviewsMore.hide();
    if (numInListReviewsMore > numToShowReviewsMore) {
        buttonReviewsMore.show();
    }
    listReviewsMore.slice(0, numToShowReviewsMore).show();
    buttonReviewsMore.click(function() {
      const showingReviewsMore = listReviewsMore.filter(':visible').length;
      listReviewsMore.slice(showingReviewsMore - 1, showingReviewsMore + numToShowReviewsMore).fadeIn();
      const nowShowingReviewsMore = listReviewsMore.filter(':visible').length;
      if (nowShowingReviewsMore >= numInListReviewsMore) {
        buttonReviewsMore.hide();
      }
});

/*Загрузить еще - блок Блог мобильная версия .blog-mob*/
const listBlogMobMore = $(".blog-mob .blog-more");
const numToShowBlogMobMore = 3; //сколько показывать элементов
const buttonBlogMobMore = $(".btmBlogMobMore");
const numInListBlogMobMore = listBlogMobMore.length;
listBlogMobMore.hide();
    if (numInListBlogMobMore > numToShowBlogMobMore) {
        buttonBlogMobMore.show();
    }
    listBlogMobMore.slice(0, numToShowBlogMobMore).show();
    buttonBlogMobMore.click(function() {
      const showingBlogMobMore = listBlogMobMore.filter(':visible').length;
      listBlogMobMore.slice(showingBlogMobMore - 1, showingBlogMobMore + numToShowBlogMobMore).fadeIn();
      const nowShowingBlogMobMore = listBlogMobMore.filter(':visible').length;
      if (nowShowingBlogMobMore >= numInListBlogMobMore) {
        buttonBlogMobMore.hide();
      }
});

/*блок .card-block  - Нужна консультация?/Расскажите нам о своем проекте*/
const btnOther = document.querySelector('.btn-open');
const card = document.querySelector('.card-block'); 
const closeCard = document.querySelector('.btn-close-card');
const formBlock = document.querySelector('.form-block');
btnOther.addEventListener('click', function(){
    card.style.display = 'flex';
    formBlock.style.display = 'none';
});
closeCard.addEventListener('click', function(){
    card.style.display = 'none';
    formBlock.style.display = 'flex';
})

/*Читать полностью - блок Блог*/
/*1 блок*/
function readMoreOne() {
    const moreTextOne = document.getElementById("moreOne");
    const btnBlogReadOne = document.getElementById("btnBlogReadOne");
    if (moreTextOne.style.display === "none") {
    btnBlogReadOne.innerHTML = "Читать полностью"; 
    moreTextOne.style.display = "none";
    } else {
        moreTextOne.style.display = "inline";
        btnBlogReadOne.style.display = 'none';
    }

    /*mob*/
    const moreTextOneMob = document.getElementById("moreOneMob");
    const btnBlogReadOneMob = document.getElementById("btnBlogReadOneMob");
    if (moreTextOneMob.style.display === "none") {
        btnBlogReadOneMob.innerHTML = "Читать полностью"; 
        moreTextOneMob.style.display = "none";
    } else {
        moreTextOneMob.style.display = "inline";
        btnBlogReadOneMob.style.display = 'none';
    }
}
/*2 блок*/
function readMoreTwo() {
    const moreTextTwo = document.getElementById("moreTwo");
    const btnBlogReadTwo = document.getElementById("btnBlogReadTwo");
    if (moreTextTwo.style.display === "none") {
        btnBlogReadTwo.innerHTML = "Читать полностью"; 
        moreTextTwo.style.display = "none";
    } else {
        moreTextTwo.style.display = "inline";
        btnBlogReadTwo.style.display = 'none';
    }
     /*mob*/
    const moreTextTwoMob = document.getElementById("moreTwoMob");
    const btnBlogReadTwoMob = document.getElementById("btnBlogReadTwoMob");
    if (moreTextTwoMob.style.display === "none") {
        btnBlogReadTwoMob.innerHTML = "Читать полностью"; 
        moreTextTwoMob.style.display = "none";
    } else {
        moreTextTwoMob.style.display = "inline";
        btnBlogReadTwoMob.style.display = 'none';
    }
}
/*3 блок*/
function readMoreThree() {
    const moreTextThee = document.getElementById("moreThree");
    const btnBlogReadThree = document.getElementById("btnBlogReadThree");
    if (moreTextThee.style.display === "none") {
        btnBlogReadThree.innerHTML = "Читать полностью"; 
        moreTextThee.style.display = "none";
    } else {
        moreTextThee.style.display = "inline";
        btnBlogReadThree.style.display = 'none';
    }
    /*mob*/
    const moreTextTheeMob = document.getElementById("moreThreeMob");
    const btnBlogReadThreeMob = document.getElementById("btnBlogReadThreeMob");
    if (moreTextTheeMob.style.display === "none") {
        btnBlogReadThreeMob.innerHTML = "Читать полностью"; 
        moreTextTheeMob.style.display = "none";
    } else {
        moreTextTheeMob.style.display = "inline";
        btnBlogReadThreeMob.style.display = 'none';
    }
}
/*4 блок*/
function readMoreFour() {
    const moreTextFour = document.getElementById("moreFour");
    const btnBlogReadFour = document.getElementById("btnBlogReadFour");
    if (moreTextFour.style.display === "none") {
        btnBlogReadFour.innerHTML = "Читать полностью"; 
        moreTextFour.style.display = "none";
    } else {
        moreTextFour.style.display = "inline";
        btnBlogReadFour.style.display = 'none';
    }

    /*mob*/
    const moreTextFourMob = document.getElementById("moreFourMob");
    const btnBlogReadFourMOb = document.getElementById("btnBlogReadFourMob");
    if (moreTextFourMob.style.display === "none") {
        btnBlogReadFourMOb.innerHTML = "Читать полностью"; 
        moreTextFourMob.style.display = "none";
    } else {
        moreTextFourMob.style.display = "inline";
        btnBlogReadFourMOb.style.display = 'none';
    }
}
/*5 блок*/
function readMoreFive() {
    const moreTextFive = document.getElementById("moreFive");
    const btnBlogReadFive = document.getElementById("btnBlogReadFive");
    if (moreTextFive.style.display === "none") {
        btnBlogReadFive.innerHTML = "Читать полностью"; 
    moreTextFive.style.display = "none";
    } else {
        moreTextFive.style.display = "inline";
        btnBlogReadFive.style.display = 'none';
    }
    /*mob*/
    const moreTextFiveMob = document.getElementById("moreFiveMob");
    const btnBlogReadFiveMob = document.getElementById("btnBlogReadFiveMob");
    if (moreTextFiveMob.style.display === "none") {
        btnBlogReadFiveMob.innerHTML = "Читать полностью"; 
        moreTextFiveMob.style.display = "none";
    } else {
        moreTextFiveMob.style.display = "inline";
        btnBlogReadFiveMob.style.display = 'none';
    }
}
/*6 блок*/
function readMoreSix() {
    const moreTextSix = document.getElementById("moreSix");
    const btnBlogReadSix = document.getElementById("btnBlogReadSix");
    if (moreTextSix.style.display === "none") {
        btnBlogReadSix.innerHTML = "Читать полностью"; 
        moreTextSix.style.display = "none";
    } else {
        moreTextSix.style.display = "inline";
        btnBlogReadSix.style.display = 'none';
    }
    /*mob*/
    const moreTextSixMob = document.getElementById("moreSixMob");
    const btnBlogReadSixMob = document.getElementById("btnBlogReadSixMob");
    if (moreTextSixMob.style.display === "none") {
        btnBlogReadSixMob.innerHTML = "Читать полностью"; 
        moreTextSixMob.style.display = "none";
    } else {
        moreTextSixMob.style.display = "inline";
        btnBlogReadSixMob.style.display = 'none';
    }
}
/*7 блок*/
function readMoreSeven() {
    const moreTextSeven = document.getElementById("moreSeven");
    const btnBlogReadSeven = document.getElementById("btnBlogReadSeven");
    if (moreTextSeven.style.display === "none") {
        btnBlogReadSeven.innerHTML = "Читать полностью"; 
        moreTextSeven.style.display = "none";
    } else {
        moreTextSeven.style.display = "inline";
        btnBlogReadSeven.style.display = 'none';
    }
    /*mob*/
    const moreTextSevenMob = document.getElementById("moreSevenMob");
    const btnBlogReadSevenMob = document.getElementById("btnBlogReadSevenMob");
    if (moreTextSevenMob.style.display === "none") {
        btnBlogReadSevenMob.innerHTML = "Читать полностью"; 
        moreTextSevenMob.style.display = "none";
    } else {
        moreTextSevenMob.style.display = "inline";
        btnBlogReadSevenMob.style.display = 'none';
    }
}
/*8 блок*/
function readMoreEight() {
    const moreTextEight = document.getElementById("moreEight");
    const btnBlogReadEight = document.getElementById("btnBlogReadEight");
    if (moreTextEight.style.display === "none") {
        btnBlogReadEight.innerHTML = "Читать полностью"; 
        moreTextEight.style.display = "none";
    } else {
        moreTextEight.style.display = "inline";
        btnBlogReadEight.style.display = 'none';
    }
    /*mob*/
    const moreTextEightMob = document.getElementById("moreEightMob");
    const btnBlogReadEightMob = document.getElementById("btnBlogReadEightMob");
    if (moreTextEightMob.style.display === "none") {
        btnBlogReadEightMob.innerHTML = "Читать полностью"; 
        moreTextEightMob.style.display = "none";
    } else {
        moreTextEightMob.style.display = "inline";
        btnBlogReadEightMob.style.display = 'none';
    }
}




