function addZero(time) {
  if (time < 10) {
    return "0" + time;
  } else {
    return time;
  }
}


function updateTime(){
	const currentTime = new Date();
	let hour = currentTime.getHours();
	let minute = currentTime.getMinutes();
  	let second = currentTime.getSeconds();

  	 if (hour > 12) {
    hour -= 12;
  	}

	second = addZero(second);
	minute = addZero(minute);
	hour = addZero(hour);

  	document.getElementById('hour').innerHTML = hour + ':';
  	document.getElementById('minute').innerHTML = minute + ':';
  	document.getElementById('second').innerHTML = second;

}

setInterval(updateTime);
