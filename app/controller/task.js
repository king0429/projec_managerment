'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;
const {setError} = require('../utils/utils.js');

class TaskController extends Controller {
	async getList () {
		const { app, ctx } = this
  	const {query} = ctx
    let pageSize = query.page || 5
    await app.mongoose.model('pm_task').find({}, {task_name: '1', _id: '1', task_number: '1', start_date: '1', end_date: 1}).limit(pageSize).then(res => {
  		ctx.body = {list: res, code: 1}
  	}).catch(err => {
  		ctx.body = setError(err)
  	})
	}
}
module.exports = TaskController;