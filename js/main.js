$(function(){

//$('.dropdown-toggle').dropdown()

//----------start user-dropdown----------
$('.user-dropdown').click(function(){	
		$(this).toggleClass('active');	
	});
});
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".user-dropdown"); 
  
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      div.removeClass('active');
    }
  });
});
//----------end user-dropdown----------

//------------start lang dropdown------------
$(function(){ 
var ddData = [
   {
        text: "",
        value: 3,
        selected: false,
        imageSrc: "img/lg3.svg"
    },
    {
        text: "",
        value: 2,
        selected: false,
        imageSrc: "img/lg2.svg"
    },    
    {
        text: "",
        value: 1,
        selected: false,
        selected: true,
        imageSrc: "img/lg.svg"
    }  
];
$('#lang__dropdown').ddslick({
    data:ddData,
    imagePosition:"left",
    onSelected: function(selectedData){

    }   
});
});

jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".dd-options");
     var div2 = $(".dd-pointer"); 
  
    if (!div.is(e.target)
        && div.has(e.target).length === 0) {
      div.hide('');
  div2.removeClass('dd-pointer-up');
    }
  });
});
//------------end lang dropdown------------

//------------start dashboard tab--------
$(function(){
	$(".tab").click(function() {
	$(".tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
$(function(){
	$(".user-tab").click(function() {
	$(".user-tab").removeClass("active").eq($(this).index()).addClass("active");
 	$(".user-tab_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
});
//------------end dashboard tab----------

//-------------start user list delete---------
$('.user-list .row .col-1').click(function(){	
		$(this).parent().hide();	
	});
//------------end user list delete-----------

//-------------start view more---------
$('.view-more').click(function(){	
		$(this).toggleClass('active');
		$('.dashboard-header__row--hidden').slideToggle();			
	});


//------------end view more-----------

$(function() {

  (function quantityProducts() {
    var $quantityArrowMinus = $(".quantity-arrow-minus");
    var $quantityArrowPlus = $(".quantity-arrow-plus");
    var $quantityNum = $(".quantity-num");

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();

});

