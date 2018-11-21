'use strict';
// const testModal = require('../modal/test.modal.js');
const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    console.log('---------------------------------')
    let a = {}
    console.dir(this.ctx.req.connection.TCP)
    a = this.ctx.req.connection
    this.ctx.body = this.ctx.request;
  }
  async test () {
		const { app, ctx, service } = this
		// console.log(await ctx.model)
		// let model = await ctx.model.test.insert({userName: '123', password: '123123'})
    // console.dir(app.mongoose.model('test').find())
		ctx.body = await app.mongoose.model('pm_user').findOne({userName: 'admin'})
  }
}

module.exports = HomeController;
