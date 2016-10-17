import $ from 'jquery';

var posit;

var positOne   = 0;
var positTwo   = 0;
var positThree = 0;
var positFour  = 0;

var value = 0;
var ajust = 0;



$('.item-wrapper-up').click(function () {
	value = 15;
	getElement(this);
});

$('.item-wrapper-down').click(function () {
	value = -15
	getElement(this);
});


function getElement(element) {
	var content = $(element).parent().find('div.content');
	var name = $(content).attr('id');
	var id = name;

	name = name.toLowerCase().replace(/\b[a-z]/g, function(letter) {
	    return letter.toUpperCase();
	});

	posit = eval('posit'+ name +' += '+value+"+"+ajust);

	if(posit > 0){
		noMoreUp(id);
		posit = 0;
		ajust = -15;
	}else if(posit < -135){
		noMoreDown(id);
		posit = -120;
		ajust = 15;
	}else{
		changeNumber(id, posit);
		ajust = 0;
	}

}

function changeNumber(id, posit) {
	$('#'+id).css("transform", "translate(0, "+posit+"vw)");
}



function noMoreUp(id) {
	$('#'+id).css("transform", "translate(0, 7vw)")
	  .delay(100).queue(function(next){
	  	$(this).css("transform", "translate(0, 0)");
	  	next();
	  });
}

function noMoreDown(id) {
	$('#'+id).css("transform", "translate(0, -142vw)")
	  .delay(100).queue(function(next){
	  	$(this).css("transform", "translate(0, -135vw)");
	  	next();
	  });
}

export function getValues(){
	var code = [];

	code.push(positOne);
	code.push(positTwo);
	code.push(positThree);
	code.push(positFour);

	return code;
}