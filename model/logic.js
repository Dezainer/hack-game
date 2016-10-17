import $ from 'jquery';
import {setState} from '../actions/states';

var one   = 0;
var two   = 0;
var three = 0;
var four  = 0;

var Pass = [1,2,3,4];

export function transformValues(Code) {
	
	for (var i = 0; i < Code.length; i++) {
		Code[i] = convertValues(Code[i]);
	}

	validate(Code);
}

function convertValues(posit){
	return (posit/15) * -1;
}

function validate(Code) {
	
	for (var i = 0; i < Pass.length; i++) {

		if(Code[i] == Pass[i]){
			setState(i, 'green');

		}else if(Pass.indexOf(Code[i]) != -1){

			setState(i, 'yellow');

		}else{

			setState(i, 'red');
		
		}

	}

}