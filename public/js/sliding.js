showLegend = true;  // default value showing the legend
//  $('.testlegend').hide(); 
var toggleLegend = function(){
if(showLegend === true){
/* use jquery to select your DOM elements that has the class 'legend' */
 $('.legend').hide(); 
 showLegend = false; 
}else{
 $('.legend').show();
 showLegend = true; 
}
}

      
$(function(){
    
  //   $('.domcontainer').tooltip({
  //   track:true,
  //   show: {delay:50, duration:100, effect:'slideDown'},
  //   hide: {delay:50, duration:100, effect:'slideUp'},
  //   animation:true

  // })
  $('.domcontainer').on('click',function(){
    $('#testlegend').slideToggle()
    
  })
  $('#1').on('click',function(){
      alert('done')
    })
 })