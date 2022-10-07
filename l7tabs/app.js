var gettablinks = document.getElementsByClassName('tablinks'); // HTML Collection
var gettabpanel = document.getElementsByClassName('tab-panel');
var getbtnclose = document.querySelectorAll('.btn-close'); // Nodelist

var tabpanels = Array.from(gettabpanel);

function gettab(evn,linkid){

	// console.log(evn.target);
	// console.log(linkid);

	tabpanels.forEach(function(tabpanel){
		// console.log(tabpanel);
		tabpanel.style.display = 'none';
	});

	for(var x = 0; x < gettablinks.length; x++){
		gettablinks[x].className = gettablinks[x].className.replace(' active','');

		getbtnclose[x].addEventListener('click',function(){
			this.parentElement.style.display = 'none';
		});
	};

	document.getElementById(linkid).style.display = "block";

	// evn.target.className += ' active';
	// evn.target.className = evn.target.className.replace('tablinks','tablinks active');
	// evn.target.classList.add('active');

	// console.log(evn.target);
	// console.log(evn.currentTarget);
	evn.currentTarget.className += ' active';


};

document.getElementById('autoclick').click();