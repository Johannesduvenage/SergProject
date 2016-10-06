
var cart;
var config;
var wiNumInputPrefID;
/* WI-GLOBAL-VARS */
$(document).ready(function(){  
    cart = new WICard("cart");
    config = {'clearAfterSend':true, 'showAfterAdd':false};
    
    cart.init("basketwidjet", config);

  priceList = {
	"001" : {"id" : "001", "subid" : {}, "name" : "Manual gameboard", "price" : "10"},
	"002" : {"id" : "002", "subid" : {}, "name" : "Something else", "price" : "225"},
	"003" : {"id" : "003", "subid" : {}, "name" : "Lorem ipsum dolor sit amet.", "price" : "156"},
	"004" : {"id" : "004", "subid" : {}, "name" : "Multi gamboard manual", "price" : "10"},
	"005" : {"id" : "005", "subid" : {}, "name" : "gameboardn2", "price" : "450"}
	};
    /* WI-MODULES */
    
    
});	
document.addEventListener('visibilitychange', function(e) {
cart.init("basketwidjet", config);
}, false);
