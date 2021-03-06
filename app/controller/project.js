'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;
const {setErrorm, getStr, enHash} = require('../utils/utils.js');

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
    // consoel.log(query)
    let pageSize = Number(query.page_size) || 5, page, len
    // page = (query.page - 1 < 0 ? 0 : page - 1) || 0
    // if (query.page) {
    //   page = query.page
    // } else {
    //   page = 1
    // }
    page = Number(query.page) || 1
    console.log(query.page)
    await app.mongoose.model('pm_project').count().then(res => {
      len = res
    }).catch(err => {
      console.log('error')
      console.log(err)
    })
  	await app.mongoose.model('pm_project').find().skip((page - 1) * pageSize).limit(pageSize).then(res => {
  		ctx.body = {list: res, code: 1, len}
  	}).catch(err => {
      console.log(err)
  		ctx.body = setError(err)
  	})
  }
  async create () {
    const {app, ctx} = this
    let data = ctx.request.body
    data.create_time = new Date()
    data.project_uid = enHash(new Date())
    await app.mongoose.model('pm_project').create(data).then(res => {
      ctx.body = {code: 1, project_id: res._id}
    }).catch(err => {
      ctx.body = {code: 0, err}
    })
  }
  async findOne () {
    const { app, ctx } = this
    let { query } = ctx
    await app.mongoose.model('pm_project').findOne({_id: query.id}, {}).then(res => {
      ctx.body = {code: 1, showData: res}
    }).catch(err => {
      ctx.body = {code: 0, err}
    })
  }
}

module.exports = ProjectController;
