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
    let pageSize = Number(query.page) || 5, page, len
    page = query.page - 1 < 0 ? 0 : page - 1 || 0
    console.log('pageSize:', pageSize)
    await app.mongoose.model('pm_project').count().then(res => {
      len = res
    }).catch(err => {
      console.log('error')
      console.log(err)
    })
  	await app.mongoose.model('pm_project').find().skip(page).limit(pageSize).then(res => {
  		ctx.body = {list: res, code: 1, len}
  	}).catch(err => {
      console.log(err)
  		ctx.body = setError(err)
  	})
  }
}

module.exports = ProjectController;
