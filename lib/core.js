'use strict'


class Core {

	constructor () {

		this.string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
	}


	 encodeintstring62(url,num) {
		
		var base = 62;

		var data = [];
		var reminder;

		while (num > 0) {

			reminder = Math.ceil(num % base);
			data.push(reminder);
			num = Math.round(num/base);

		}

		data.reverse();

		for (var i=0; i < data.length; i++) {

				data[i] = this.string[data[i]];

		}

		return	url += data.join('');

	}


	 decodeintstring62(url,data) {
	
		//var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var base = 62;
		var decoded = 0;
		data = data.split('');

		var j = 0;

		var length = data.length -1;
		//console.log(length);

		while (length != -1) {

			for (var i = 0; i < base; i++) {

				if (data[length] == this.string[i]) {
					//console.log();
					decoded += ((length + 1) * (Math.pow(62,length)));
					break;
				}
			}
			//console.log(length);
			
			length--;
		}


 		return url+decoded;
	}


	 encodeint62(num) {
		
		var base = 62;

		var data = [];
		var reminder;

		while (num > 0) {

			reminder = Math.ceil(num % base);
			data.push(reminder);
			num = Math.round(num/base);

		}

		data.reverse();

		for (var i=0; i < data.length; i++) {

				data[i] = this.string[data[i]];

		}

		return data.join('');

	}


	 decodeint62(data) {
	
		//var string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
		var base = 62;
		var decoded = 0;
		data = data.split('');

		var j = 0;

		var length = data.length -1;
		//console.log(length);

		while (length != -1) {

			for (var i = 0; i < base; i++) {

				if (data[length] == this.string[i]) {
					//console.log();
					decoded += ((length + 1) * (Math.pow(62,length)));
					break;
				}
			}
			//console.log(length);
			
			length--;
		}


 		return decoded;
	}



}


module.exports = Core;