function addDot(nStr) {
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + '.' + '$2');
	}
	return x1 + x2;
}

$( function() {
	$("#slider-Danabijak").slider({
			range: "min",
			value: 2000000,
			min: 1000000,
			max: 3000000,
			step: 100000,
			slide: function( event, ui ) {
			  	$( "#amount" ).text( "Rp " + addDot(ui.value.toString()) );
			}
		});
	$("#amount").text( "Rp " + $("#slider-Danabijak").slider("ui"));
});

