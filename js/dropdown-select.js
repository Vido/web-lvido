function dropDown(actived) {
	var drop_down = document.getElementById('list');
	var displays_attr = ['block', 'none'];
	var translate = ['0px', '0px,-10px'];
	drop_down.style.display = displays_attr[actived];
	setTimeout(function (){
		drop_down.style.transform = "translate("+translate[actived]+")";
	}, 0);
}

function category(selected) {
	var item = document.getElementById('item-'+selected).innerHTML;
	document.getElementById("selector").value = item;
}