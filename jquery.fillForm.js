(function($){
    $.fillForm = function(el, options){
        // To avoid scope issues, use 'base' instead of 'this'
        // to reference this class from internal events and functions.
        var base = this;
        
        // Access to jQuery and DOM versions of element
        base.$el = $(el);
        base.el = el;
        
        // Add a reverse reference to the DOM object
        base.$el.data("fillForm", base);
        
        base.init = function(){
            base.options = $.extend({}, $.fillForm.defaultOptions, options);
            // Put your initialization code here
			
            $.each(options, function(key, val) {
                var el = base.$el.find('[name='+ key +']'),
				type = el.attr('type');
				
				if( type === 'checkbox') {
					if( val !== false && val != 0 ) {
                        el.attr('checked', val);
                    }
					else {
						el.attr('checked', false);
					}
				}
				else if(el.length !== 0 && el.attr('type') !== 'checkbox' ) {
                    el.val(val);
                }
				
            });
        };
        
        // Sample Function, Uncomment to use
        // base.functionName = function(paramaters){
        // 
        // };
        
        // Run initializer
        base.init();
    };
    
    $.fillForm.defaultOptions = {};
    
    $.fn.fillForm = function(options){
        return this.each(function(){
            (new $.fillForm(this, options));

		   // HAVE YOUR PLUGIN DO STUFF HERE
			
	
		   // END DOING STUFF

        });
    };
    
})(jQuery);
