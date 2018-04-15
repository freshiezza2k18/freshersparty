function countdown(){
          var now=new Date();
          var eventDate=new Date(2018,3,21);
          var currentTime=now.getTime();
          var eventTime=eventDate.getTime();
          var remTime=eventTime-currentTime;
          var s=Math.floor(remTime/1000);
           var m=Math.floor(s/60);
           var h=Math.floor(m/60);
           var d=Math.floor(h/24);
          h%=24;
           m%=60;
           s%=60;
          if(d<=0 && h<=0 && m<=0 && s<=0)
              {
                  d="0";
                  h="0";
                  m="0";
                  s="0";
              }
           d=(d<10)? "0"+d : d;
        
          h=(h<10)? "0"+h : h;
           m=(m<10)? "0"+m : m;
           s=(s<10)? "0"+s : s;
         
          document.getElementById("days").textContent=d;
         
          document.getElementById("days").innerText=d;
          
          document.getElementById("hours").textContent=h;
          document.getElementById("minutes").textContent=m;
          document.getElementById("seconds").textContent=s;
          setTimeout(countdown,1000);
      }
      countdown();
//second js

 $(document).ready(function() {

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');

});