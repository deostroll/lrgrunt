var padZero = function(n) {
	return n < 10 ? '0' + n: n;
};

Date.prototype.toLongTimeString = function() {
	var h = this.getHours(),
		s = this.getSeconds(),
		m = this.getMinutes();
	return padZero(h) + ':' + padZero(m) + ':' + padZero(s);		
};

window.addEventListener('load', function(){
	var p = document.createElement('p');
	p.innerHTML = 'Time now is: ' + new Date().toLongTimeString();
	document.body.appendChild(p);
}, false);
