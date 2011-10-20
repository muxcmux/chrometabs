(function($) {

  var settings = {
    hoverClass: 'hover',
    activeClass: 'active',
    selectedClass: 'selected',
    containerClass: 'chrometabs'
  };

  var methods = {
    init: function(options) {
      if (options) $.extend(settings, options);
      
      return this.each(function() {
        var instance = $(this);
        var tabs = instance.children('nav').children('ul');
        // figure out current tab
        var current = tabs.children('li').children('a.' + settings.selectedClass);
        var tabcount = tabs.children('li').length;
        if (!current.length) {
          current = tabs.children('li:eq(0)').children('a');
          current.addClass(settings.selectedClass);
        }
        // set class
        instance.addClass(settings.containerClass);
        
        // reverse z-index order and set index data
        for (i = 0; i < tabcount; i++) {
          var index = tabcount - i;
          tabs.children('li:eq(' + i + ')').css('z-index', index).data('index', index);
          // set div index data
          instance.children('div:eq(' + i + ')').data('index', index);
        }
        // set highest order to current tab
        current.parent('li').css('z-index', (tabcount + 2));
        // hide all divs except the current
        instance.children('div').each(function() {
          if ($(this).data('index') != current.parent('li').data('index')) {
            $(this).hide();
          }
        });
        
        // mouse over/out/up/down
        tabs.children('li').children('a').mouseover(function() {
          if (!$(this).hasClass(settings.selectedClass)) {
            $(this).parent('li').css('z-index', tabcount + 1);
            $(this).addClass(settings.hoverClass);
          }
        }).mouseout(function() {
          if (!$(this).hasClass(settings.selectedClass)) {
            $(this).parent('li').css('z-index', $(this).parent('li').data('index'));
          }
          $(this).removeClass(settings.hoverClass);
        }).mousedown(function() {
          $(this).addClass(settings.activeClass);
        }).mouseup(function() {
          tabs.children('li').children('a').each(function() {
            $(this).removeClass(settings.selectedClass).parent('li').css('z-index', $(this).parent('li').data('index'));
          });
          $(this).removeClass(settings.activeClass).addClass(settings.selectedClass).parent('li').css('z-index', tabcount + 2);
        }).click(function() {
          var link = $(this);
          instance.children('div').each(function() {
            if ($(this).data('index') == link.parent('li').data('index')) {
              $(this).show();
            } else {
              $(this).hide();
            }
          });
          return false;
        });
        
      });
    }
  };

  $.fn.chrometabs = function(method) {

    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method) {
      return methods.init.apply(this, arguments);
    } else {
      $.error('Method ' +  method + ' does not exist on jQuery.chrometabs');
    }    

  };

})(jQuery);