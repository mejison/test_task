// "use strict"

var block = $(".block"); // найти всі блоки 

// var position_block = {"one":{x:0,y:0},
//                       "two":{x:0,y:0},
//                       "three":{x:0,y:0},
//                       "four":{x:0,y:0},
//                       "five":{x:0,y:0},
//                       "six":{x:0,y:0}};
var position_block = $.ajax({
  "type" : "POST",
  "url"  : "data.json",
});
function down_cursor(elm) {
  
  var ball = elm.toElement;
  // console.log(ball)
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
    save_elm_server($(ball).text(), [ball.style.left.slice(0,-2), ball.style.top.slice(0,-2)]);
    document.onmousemove = null;
    ball.onmouseup = null;
  }
} // -----------------------------------------------------------------------


function save_elm_server (elm, pos){
  var diget = "";
  switch (elm){
    case '1':
      diget = "one";
    break;
      case '2':
      diget = "two";
    break;
        case '3':
      diget = "three";
    break;
        case '4':
      diget = "four";
    break;
        case '5':
      diget = "five";
    break;
        case '6':
      diget = "six";
    break;
  }
  position_block[diget].x = pos[0];
  position_block[diget].y = pos[1];
  // console.log(position_block)

 $.ajax({
   type: "POST",
   url: "data.json",
   data: position_block,
   success: function(msg){
     alert( "Data Saved: ");
   }
 });

}
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
