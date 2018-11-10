'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;
const {setError} = require('../utils/utils.js');

class ProjectController extends Controller {
	// projectModel.insert(this)
  async insert () {
		const { app, ctx } = this
		await app.mongoose.model('pm_project').create({project_name: '1234', project_uid: '132631', project_originator: 'root', project_persion: [], projec_level: 3}).then(res => {
			ctx.body = res
		}).catch(err => {
			ctx.body = setError(err)
		})
  }
  async getList () {
  	const { app, ctx } = this
  	const {query} = ctx
    let pageSize = query.page || 5
  	await app.mongoose.model('pm_project').find({}, {project_name: '1', _id: '1', project_status: '1', create_time: '1', projec_level: 1}).limit(pageSize).then(res => {
  		ctx.body = {list: res, code: 1}
  	}).catch(err => {
  		ctx.body = setError(err)
  	})
  }
}

module.exports = ProjectController;
