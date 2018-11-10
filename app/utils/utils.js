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
	}
}