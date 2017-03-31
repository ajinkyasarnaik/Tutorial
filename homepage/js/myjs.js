$(document).ready(function(){
	
	 $(".tab2").click(function(){
		  $(".tabs").toggle();
		   $(".tabs li").click(function(){
			 
			   $(".tabs").hide(); 
		 
		  });
	 });
	  $("#tabs1 li").click(function(){
		 var tabs = $(this).attr("data_tab");
		 $(".tab").removeClass("current");
		 $(this).addClass("current");
		 $(".tab2").removeClass("current");
		 $("#"+tabs).addClass("current");
		 
	 });
});