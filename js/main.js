
// function Drap_and_Drop(e) {
  
//   block = this;
//   block.style.position = 'absolute';
//   moveAt(e);
  
//   document.body.appendChild(block);

//   block.style.zIndex = 1000; // показывать мяч над другими элементами

//   function moveAt(e) {
//     block.style.left = e.pageX - block.offsetWidth / 2 + 'px';
//     block.style.top = e.pageY - block.offsetHeight / 2 + 'px';
//   }

//   document.onmousemove = function(e) {
//     moveAt(e);
//   }

//   block.onmouseup = function() {
//     document.onmousemove = null;
//     block.onmouseup = null;
//   }
// }
(function (){

  var app = {
    "init" : function (){
      app.div_block = $('.block');
      app.bootstrap_module();

    },
    "bootstrap_module" : function (){
      var elm = app.div_block;
      app.event_check(); // event moduel enable
      app.timeouts();
    },
    "config" : { "width_docuemnt" : 0},
    "event_check" : function() {
        Array.prototype.map.call(app.div_block, function(elm){
          elm.onmouseover = app.mouse_move_on_block;
        });
    }
    ,"mouse_move_on_block" : function(obj ){
      if ( $(document).width() <= 768 )
        $.each(app.div_block, function (ind, val){
          if (ind == app.div_block.length-1)
            $(val).attr('data-placement', 'top');
          else
            $(val).attr('data-placement', 'bottom');
        })

      if ( $(document).width() >= 768 )
        $.each(app.div_block, function (ind, val){
          $(val).attr('data-placement', 'left');
        })
      $(obj.srcElement).tooltip('show');
    },
    "timeouts" : function(){
      setTimeout(app.chenge_width_document, 1000);
    },
    "chenge_width_document" : function (){
        if (app.config['width_docuemnt'] != $(document).width()){
            app.config['width_docuemnt'] = $(document).width()
            app.event_check();
          }
    }
    
  };
  app.init();
  
})();
