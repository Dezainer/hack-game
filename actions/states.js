import $ from 'jquery';

export function setState(posit, color) {

	var id = getId(posit);
	$('#'+id).parent().parent().css("border", "3px solid "+color+"");
}

function getId(posit){
	var id;

	if(posit == 0){
		id = 'one';
	}else if(posit == 1){
		id = 'two';
	}else if(posit == 2){
		id = 'three';
	}else{
		id = 'four';
	}

	return id;
}