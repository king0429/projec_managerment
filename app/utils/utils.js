module.exports = {
	setError: (obj) => {
		// console.log(obj)
		let err = obj.errmsg
		switch (obj.code) {
			case 11000:
			let key = err.substring(err.indexOf(':') + 1, err.indexOf('index'))
				return {code: '801', errMsg: `重复的${key}唯一字段`}
			break;
			default:
				return {code: '888', errMsg: '未知错误'}
			break;
		}
	},
	getStr: function (n) {
		this.n = n || 8
		let o = []
		for (var i = this.n - 1; i >= 0; i--) {
			let a = {}
			a.str = ''
			let r = parseInt((Math.random() * 10000) % STR.length)
			a.str += STR[r]
			a.order = r
			o.push(a)
		}
		return o
	},
	enHash: (dateStr) => {
		let n = 0
		let e = ''
		getStr(8).forEach((v) => {
		  n += v.order, e += v.str
		})
		let u = (n.toString()[0] + (dateStr || new Date()).getTime().toString(16).toUpperCase().split("").reverse().join("") + e).split('')
		let m = ''
		for (var i = 0; i <= u.length - 1; i++) {
			if (i % 4 === 0) {
				m += `-${u[i]}`
			} else {
				m += u[i]
			}	
		}
		return m.substr(1, m.length)
	},
	deHash: (pwd) => {
		let unts = (pwd.split('-')[0] + pwd.split('-')[1] + pwd.split('-')[2]).split('').reverse().join("")
		let re = unts.substr(0, unts.length - 1)
		return new Date(parseInt(re, 16))
	}
}
const STR = [
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N',
	'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '1', '2',
	'3', '4', '5', '6', '7', '8', '9', '0'
]
let getStr = function (n) {
	this.n = n || 8
	let o = []
	for (var i = this.n - 1; i >= 0; i--) {
		let a = {}
		a.str = ''
		let r = parseInt((Math.random() * 10000) % STR.length)
		a.str += STR[r]
		a.order = r
		o.push(a)
	}
	return o	
}