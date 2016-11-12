'use strict'

class Core {
	constructor (base) {
		this.__base = base || "";
		this.__string = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789-_";
	}

	encodeUrl(num) {
		return this.__base+this.encode64(num);
	}

	decodeUrl(url) {
		let slug = url.substr(this.__base.length);
		return decode64(slug);
	}

	encode64(num) {
		let str = Array(11);

		for (var i = 10; i >= 0 && num > 0; i--) {
			str[i] = this.__string[num&63];
			num >>= 6;
		}

		return str.slice(i).join('');
	}

	decode64(str) {
		let value = 0;

		for (let i = 0, j = 0; i < str.length && j < 11; i++, j++) {
			let code = str[i].charCodeAt(0);
			let column_value = 0;

			if (code > 64 && code < 91) {
				column_value = code - 39; // - 65 + 26
			} else if (code > 96 && code < 123) {
				column_value = code - 97;
			} else if (code > 47 && code < 58) {
				column_value = code + 4; // - 48 + 52
			} else if (code === 95) {
				column_value = 62;
			} else if (code === 45) {
				column_value = 63;
			} else {
				throw new Error('Malformed Base64 string.');
			}

			value = (value<<6)|column_value;
		}

		return value;
	}
}

module.exports = Core;
