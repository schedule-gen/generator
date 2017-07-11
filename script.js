let rangeN = 0, dayN = 0;

$(document).ready(function(){
	$('#day').click(function() {
		$('<div>No school on <input type="date" name="no-school_'+dayN+'">').append($('<button type="button">X</button></div>').click(function(){$(this).parent().remove();})).appendTo($('form'));
		dayN++;
	});
	$('#range').click(function() {
		$('form').append('<div>No school from <input type="date" name="range_' + rangeN + '_0"> to <input type="date" name="range_' + rangeN + '_1"></div>');
	});
});