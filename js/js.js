$(window).load(function(){

if(typeof(Storage) !== "undefined"){

	$(".checkb").change(function(){
		var thisid = $(this).attr('id');
		if($(this).prop('checked')) {
			localStorage.setItem(thisid, true);
		} else {
			localStorage.setItem(thisid, false);
		}
		console.log(localStorage.getItem(thisid));
	});

	$("input:checkbox").each(function(){
		var thisid = $(this).attr('id');
		var thisstate = localStorage.getItem(thisid);
		if(thisstate == 'true') {
			$(this).prop('checked', true);
		}
	})	

	$("#reset").click(function(){
		localStorage.clear();
		location.reload();
	})

} else {
	alert("Your browser does not support Web Storage, values will not be saved.");
}




})