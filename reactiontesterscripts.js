	var createdTime;
	var clickedTime;
	var bestTime=Number.MAX_VALUE;
	function randomColorGenerator() {
		var hex = '0123456789ABCDEF'.split('');
		var color = "#";
		for (var i = 0; i<6; i++) {
			color += hex[Math.round(Math.random()*15)];
		}
		return color;
	}
	function randomPositionGenerator(element) {
		var top = Math.random();
		top = top*400;
		var left = Math.random();
		left = left*1000;
		element.style.top = top+"px";
		element.style.left = left+"px";

	}
	function lowestTime(val) {
		if(val < bestTime) {
			bestTime = val;
		}
		return bestTime;
	}
	function disappear() {
		clickedTime = Date.now();
		var time = (clickedTime - createdTime)/1000;
		var bTime = lowestTime(time);
		document.getElementById("displayTime").innerHTML=time;
		document.getElementById("bestTime").innerHTML=bTime;
		document.getElementById("square").style.display = "none";
		appear();
	}
	function stop () {
		document.getElementById("square").style.display = "none";
	}
	function appear () {
		createdTime = Date.now();
		var timeout = Math.random();
		timeout *= 2000;
		var squareId = document.getElementById("square");
		//set shape
		if(Math.random() > 0.5) {
			squareId.style.borderRadius="50%";
		}
		else {
			squareId.style.borderRadius="0";
		}

		setTimeout(function() {
			squareId.style.backgroundColor=randomColorGenerator();
			randomPositionGenerator(squareId);
			squareId.style.display = "block";
		}, timeout);
	}
