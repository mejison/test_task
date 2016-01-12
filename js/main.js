// "use strict"

var block = $(".block"); // найти всі блоки 


function down_cursor(elm) {
  
  var ball = elm.toElement;
  console.log(ball)
  ball.style.position = 'absolute';
  moveAt(ball);
  
  document.body.appendChild(ball);

  ball.style.zIndex = 1000; // показывать мяч над другими элементами

  function moveAt(e) {
    ball.style.left = e.pageX - ball.offsetWidth / 2 + 'px';
    ball.style.top = e.pageY - ball.offsetHeight / 2 + 'px';
  }

  document.onmousemove = function(e) {
    moveAt(e);
  }

  ball.onmouseup = function() {
    document.onmousemove = null;
    ball.onmouseup = null;
  }
} // -----------------------------------------------------------------------

(function (){

$.each(block, function (val, ind){
  ind.onmouseover = function(obj){
    $(obj.toElement).tooltip('show');
  }
  ind.onmousedown = down_cursor;
}); //  вивисти всі тултипи у випадку якщо буде наведена мишка

var width  = 0;
setInterval(function(){
  if ( width != $(document).width()){
    change_position_tooltip();
    width = $(document).width(); 
  }
}, 1000); // перевірити чи не змінився розмір вікна 
  

function change_position_tooltip() {
  if (width <= 768){ 
    $.each(block, function(index,value){
      if (index == block.length-1)
        $(value).attr('data-placement', 'top')
      else
        $(value).attr('data-placement', 'bottom')
        
      
    });
  }
  if (width > 768){ 
    $.each(block, function(index,value){
      $(value).attr('data-placement', 'left')
        
      
    });
  }

}; // змінити розміщення тултипу

})();
