//everything in this function switches the page on tab click
$(function() {
	function tabChange(tab) {
		document.getElementById(tab + 'Link').style.backgroundColor = '#001064';

		if (tab != '') {
			document.getElementById('Link').style.backgroundColor = '';
		}
		if (tab != 'projects') {
			document.getElementById('projectsLink').style.backgroundColor = '';
		}
		if (tab != 'achievements') {
			document.getElementById('achievementsLink').style.backgroundColor = '';
		}
	}

	//find difference between old tab and current tab and move every page a proportional distance
	function pageChange(nowPage,nextPage) {
		var oldPage = nowPage || 'FIRST';
		var newPage = nextPage || window.location.hash;

		//home is '#' or '', which is not in list so is set to -1.
		//this way projects = home + 1, achievements = projects + 1, etc
		var tabs = ['#projects','#achievements'];
		var tabDistance = tabs.indexOf(newPage) - tabs.indexOf(oldPage);
		var tabPercent = '-=' + String(tabDistance * 100) + '%';

		//if you directly navigate to url oldPage is first and there is no animation
		if (oldPage == 'FIRST') {
			delay = 0;
		} else {
			delay = 750;
		}

		$('#homePage').animate({marginLeft: tabPercent}, delay);
		$('#projectsPage').animate({marginLeft: tabPercent}, delay);
		$('#achievementsPage').animate({marginLeft: tabPercent}, delay);
		tabChange(newPage.substring(1))
	}

	//on start change the tab to the one matching your url and set as current url
	pageChange();
	window.currentPage = window.location.hash;

	function tabSwitch() {
		//switch string is a placeholder so it isn't seen as empty and doesn't get set to FIRST
		var pastPage = window.currentPage || 'switch';
		pageChange(pastPage,window.location.hash);
		window.currentPage = window.location.hash;
	}

	//whenever hash changes (you navigate to new jQuery element) change tab
	window.onhashchange = tabSwitch;

});

function popupOn(id) {
	document.getElementById('darkScreen').style.display = 'block';
	document.getElementById(id).style.display = 'block';
}

//makes all popups invisible (so you can just click the darkScreen w/o it needing to know what is on)
function popupOff() {
	document.getElementById('darkScreen').style.display = 'none';
	document.getElementById('econSim').style.display = 'none';
	document.getElementById('stockEval').style.display = 'none';
}