function download() {
	let script = '\
function download() {\n\
	something();\n\
}\
	';
	var encodedUri = encodeURI('data:text/javascript;charset=utf-8,' + script);
	window.open(encodedUri);
}