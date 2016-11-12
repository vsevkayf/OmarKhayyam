var Circular = function(obj) {
		this.wrapper   = $(obj);                     // initial wrapper
		this.items     = this.wrapper.find('li');    // text content items
		this.nrOfItems = this.items.length;          // number of items
		this.w         = 0;                          // wrap width
		this.h         = 0;                          // wrap height
		this.midX      = 0;                          // middle of wrapper X
		this.midY      = 0;                          // middle of wrapper Y
		this.pi        = Math.PI;                    // we ask for pi only once
		this.radians   = (this.pi*2)/this.nrOfItems; // distance between two elements 
		this.r         = 150;                        // radius of circle
		this.distance  = 20;                         // distance of text from the circle
		this.wrap      = null;                       // real wrapper 
		var self       = this;

		this.init = function() {

			// create wrapper div
			self.wrapper.wrap('<div class="circular-wrap" />');
			self.wrap = self.wrapper.parents('div');

			self.w = self.wrap.width();
			self.h = self.wrap.height();

			self.midX = self.w/2;
			self.midY = self.h/2;

			// add lines element
			for (var i=0; i<self.nrOfItems; i++){
				self.wrap.append("<b></b>");
			}

			// init real pixel positions
			var posX = 0;
			var posY = 0;

      // go through li elements
			$.each(self.items, function(index, item){

				// get item's sizes
				w = $(item).width();
				h = $(item).height();

				// actual radian value to calculate with
				rad = self.pi/2 - index*self.radians;

				// general real Y pixels
				posY = self.midY - self.r * Math.sin(rad) - h/2;

				// general real X pixels
				posX = self.midX + self.r * Math.cos(rad) + self.distance;
				
				// top position, pi/2
				if ( self.pi == rad*2 ) { 
					posX = posX - w/2 - self.distance;
					posY = posY - h;
				}

        // bottom position, -pi/2
        if ( self.pi == -rad*2) { 
					posX = posX - w/2 -self.distance;
					posY = posY + h;
				}
        
				// left part positions
				if (rad < -self.pi/2) posX = posX - w - self.distance*2;
        
				// placing the item
				$(item).css({left: posX, top: posY});

				// calc degrees for lines' transform
				deg = (self.pi/2 - rad) * (180/self.pi);

				// set rotation for the nth b element
				self.wrap.find('b').eq(index).css({
					'transform': 'rotate('+ deg +'deg)'
				});
			});
		}

		this.init();
};

$(function(){
  circular = new Circular('#circular');
});
