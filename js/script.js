$(document).ready(function() {
  
    //Placeholder text
    if ("placeholder" in document.createElement("input")) return;

    $(':input[placeholder]').each(function(index) {
        var el = $(this);
        var placeholderText = el.attr('placeholder');
        el.val(placeholderText);
        el.bind('focus blur', function(e) {
            if (e.type === 'focus' && el.val() === placeholderText) el.val(''); 
            if (e.type === 'blur' && el.val() === '') el.val(placeholderText); 
        });
    });
});

   
$(document).ready(function() {

    function animation(){
		var active = $('.activeSlide img');
											
		active.animate({
			width: '100%'
		}, 500);
		active.delay(5700).animate({
			width: '70%'
		}, 500);
	}
	
	//animation();
	
	$('.slides').cycle({
		fx: 'fade', // choose your transition type, ex: fade, scrollUp, shuffle, etc...
		timeout: 6000, 
		speed:300,
        pager:   '.pager',
		pagerAnchorBuilder: function(idx, slide) { 
	    	// return selector string for existing anchor 
			return '.pager li:eq(' + idx + ') a'; 
		},
		
		onPagerEvent: function(){
			//console.log($('.pager li').not('.activeSlide').find('img'));
			//$('.pager li').find('img').clearQueue();
			$('.pager li').find('img').dequeue().animate({
				width: '70%'
				//queue: false
			}, 1);
		},
		
		after: function(){
			animation();
			
		}
    });
    	
	animation();
	
	 //Google Map
	 if ($('#map').length){
		var myLatlng = new google.maps.LatLng(56.463337,-3.036089);
		var myOptions = 
		{
			zoom: 13,
			center: myLatlng,
			mapTypeId: google.maps.MapTypeId.ROADMAP
		}
		
		var map = new google.maps.Map(document.getElementById("map"), myOptions);
		
		var marker = new google.maps.Marker(
		{
			position: myLatlng, 
			map: map,
			title:"Scottish Grief & Bereavement Hub"
		});
	} 	
	
	$('.newsflash').each(function() {
	      lineheight = $(this).height();
	      // console.log(lineheight);
	      answerheight = $(this).find('p').height();
	      // console.log($(this).find('p').height());
	      padding = (lineheight - answerheight) /2; $(this).find('p').css('padding-top',padding);
	});	
		
   
});